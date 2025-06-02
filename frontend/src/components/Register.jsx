import React, { useState } from 'react';
import { FaBook, FaPenAlt, FaUserPlus } from 'react-icons/fa';
import { GiBookmarklet } from 'react-icons/gi';
import { BsJournalBookmarkFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Register = () => {
     const [message, setMessage] = useState("")
    // const { loginUser, signInWithGoogle} = useAuth();
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit= (data)=> console.log(data);
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Side - Book Graphic */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-50 to-yellow-50 flex items-center justify-center p-12">
        <div className="max-w-md relative">
          {/* Book Registration Illustration */}
          <div className="mb-12 text-center">
            <BsJournalBookmarkFill className="mx-auto text-6xl text-blue-400 mb-4" />
            <h2 className="text-3xl font-bold text-blue-700">Join Book-Verse</h2>
            <p className="text-blue-500 mt-2">Begin your reading journey</p>
          </div>

          {/* Animated Book Graphics */}
          <div className="relative h-64">
            {/* Open Book */}
            <div className="absolute left-0 top-0 w-28 h-36 bg-yellow-100 rounded-lg shadow-md transform rotate-3 border-2 border-yellow-200 flex flex-col items-center justify-center">
              <FaBook className="text-yellow-500 text-2xl mb-2" />
              <div className="w-20 h-1 bg-yellow-400 mb-1"></div>
              <div className="w-16 h-1 bg-yellow-400"></div>
            </div>

            {/* Writing Book */}
            <div className="absolute right-0 top-8 w-24 h-32 bg-blue-100 rounded-lg shadow-md transform -rotate-2 border-2 border-blue-200 flex flex-col items-center justify-center">
              <FaPenAlt className="text-blue-500 text-xl mb-2" />
              <div className="w-16 h-1 bg-blue-400 mb-1"></div>
              <div className="w-12 h-1 bg-blue-400"></div>
            </div>

            {/* Bookmark Book */}
            <div className="absolute left-1/4 bottom-0 w-20 h-28 bg-white rounded-lg shadow-md transform rotate-6 border-2 border-gray-200 flex flex-col items-center justify-center">
              <GiBookmarklet className="text-blue-300 text-xl mb-2" />
              <div className="w-16 h-1 bg-blue-300 mb-1"></div>
              <div className="w-12 h-1 bg-yellow-300"></div>
            </div>
          </div>

          {/* Reading Quote */}
          <div className="mt-16 text-center px-8">
            <p className="text-blue-600 italic">
              "The more that you read, the more things you will know. The more that you learn, the more places you'll go."
            </p>
            <p className="text-blue-500 text-sm mt-2">- Dr. Seuss</p>
          </div>
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <FaUserPlus className="mx-auto text-4xl text-blue-500 mb-3" />
            <h2 className="text-3xl font-bold text-gray-800">Create Your Account</h2>
            <p className="text-gray-500 mt-2">Fill in your details to get started</p>
          </div>

          <form onSubmit ={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="John"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
               {...register("email", { required: true })} 
                type="email"
                id="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
               {...register("password", { required: true })} 
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
              />
              <p className="mt-1 text-xs text-gray-500">
                Must be at least 8 characters
              </p>
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
              />
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the <a href="#" className="text-blue-500 hover:text-blue-600">Terms</a> and <a href="#" className="text-blue-500 hover:text-blue-600">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-colors mt-4"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or sign up with</span>
              </div>
            </div>

            <div className="mt-6 ">
              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
                Continue with Google
              </button>
              
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login"className="font-medium text-blue-500 hover:text-blue-600">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;