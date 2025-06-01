import React from 'react'

import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12 m-6 md:m-8 '>
        <div className='md:w-1/2 w-full flex items-center md:justify-end'>
        <img src={bannerImg} alt="" />
      </div>
        <div className='md:w-1/2 w-full'>
           < h1 className='md:text-5xl text-2xl font-medium mb-7 '>Turn Pages, Discover New World.</h1>
           <p className='mb-10'>
  Welcome to your modern reading corner—offering handpicked books across genres. Whether you're chasing thrillers, romance, or self-growth, we’ve got something to spark your next reading obsession.<br/> <span className='text-secondary font-semibold text-xl mt-1.5'> Start your journey—one book at a time.</span>
</p>
           <button className='btn-primary'>subscribe</button>
        </div>
      

    </div>
  )
}

export default Banner