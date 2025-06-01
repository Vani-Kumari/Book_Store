import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiMiniBars3CenterLeft, HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { FaBookOpen } from "react-icons/fa";
import avatarImg from "../assets/avatar.png"

const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Cart Page", href: "/cart" },
    { name: "Check Out", href: "/checkout" },
    { name: "Logout", href: "/logout" }
];

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const dropdownRef = useRef(null);
    const currentUser = true;

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
            setSearchQuery("");
        }
    };

    return (
        <header className='bg-white shadow-sm sticky top-0 z-50'>
            <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
                <nav className='flex justify-between items-center'>
                    {/* Left section with logo and search */}
                    <div className='flex items-center md:gap-8 gap-4'>
                        {/* Logo with book icon */}
                        <Link className='flex items-center gap-2' to='/'>
                            <FaBookOpen className="text-indigo-600 size-6" />
                            <span className='text-xl font-bold text-indigo-600 hidden sm:inline'>BookVerse</span>
                        </Link>

                        {/* Search form */}
                        <form onSubmit={handleSearch} className='relative sm:w-80 w-48'>
                            <button 
                                type="submit"
                                className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-indigo-600'
                            >
                                <IoSearchOutline className='size-5' />
                            </button>
                            <input
                                type="text"
                                placeholder='Search books, authors...'
                                className='bg-gray-50 w-full py-2 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent transition-all duration-200'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </form>
                    </div>

                    {/* Right section with user actions */}
                    <div className='relative flex items-center md:space-x-6 space-x-3'>
                        {/* Wishlist */}
                        <button className='hidden sm:block p-1 rounded-full hover:bg-gray-100 transition-colors duration-200'>
                            <HiOutlineHeart className='size-6 text-gray-600 hover:text-indigo-600' />
                        </button>

                        {/* Cart */}
                        <Link to="/cart" className='flex items-center bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-md text-white transition-colors duration-200'>
                            <HiOutlineShoppingCart className='size-5' />
                            <span className='ml-1 text-sm font-medium'>0</span>
                        </Link>

                        {/* User dropdown */}
                        <div className='ml-2' ref={dropdownRef}>
                            {currentUser ? (
                                <>
                                    <button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className='focus:outline-none'
                                    >
                                        <img
                                            src={avatarImg}
                                            alt="User avatar"
                                            className={`size-8 rounded-full cursor-pointer ring-2 ${isDropdownOpen ? 'ring-indigo-600' : 'ring-gray-300'} transition-all duration-200`}
                                        />
                                    </button>
                                    {isDropdownOpen && (
                                        <div className='absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md z-50 border border-gray-100'>
                                            <div className='px-4 py-3 border-b border-gray-100'>
                                                <p className='text-sm font-medium text-gray-900'>John Doe</p>
                                                <p className='text-xs text-gray-500'>john@example.com</p>
                                            </div>
                                            <ul className='py-1'>
                                                {navigation.map((item) => (
                                                    <li key={item.name}>
                                                        <Link
                                                            to={item.href}
                                                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200'
                                                            onClick={() => setIsDropdownOpen(false)}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link to='/login' className='p-1 rounded-full hover:bg-gray-100 transition-colors duration-200'>
                                    <HiOutlineUser className='size-6 text-gray-600 hover:text-indigo-600' />
                                </Link>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;