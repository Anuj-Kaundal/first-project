import React from 'react'

function Blog() {
    return (
        <div className='bg-blue-50'>
            <div className='bg-blue-50 p-10'>
                <h1 className='text-5xl font-semibold text-center'>Our Blog</h1>
                <p className='text-center p-5'>Insights, guides, and expert opinions on technology, business, and more.</p>
                <center><input type="search" name="search" id="search" placeholder='Search articles...' className='border-2 border-gray-300   md:w-100 h-10 rounded-xl p-5' /></center>
            </div>
            <div className='flex flex-wrap m-5 justify-center gap-20'>
                {

                    /* Blog articles section */
                    Array.from({ length: 6 }).map((_, index) => ( // yh jo hai humne map kiye hai 3 articles ke liye
                        <div className='bg-white md:w-80 rounded-2xl shadow-7xl'>
                            <img src="image2.png" alt="" width={200} height={200} className='w-full rounded-2xl' />
                            <div className='p-5'>
                                <span className='text-gray-600'>18 Dec 2025</span>
                                <h1 className='text-xl font-semibold'>Social Media Strategies for Restaurants in Texas</h1>
                                <span className='text-gray-600 text-xs pt-2'>By Raj | Novanectar Team</span>
                                <p className='text-gray-600 text-sm font-semibold pt-2 mb-2'>This guide explains how restaurants in Texas can grow visibility, engagement, and revenue using...</p>
                                <a href="" className='text-xs font-semibold text-purple-600 p-1.5 rounded-2xl bg-purple-200'>Social Media Marketing</a><a href="" className='text-xs font-semibold text-blue-900 rounded-2xl p-1.5 ml-2 bg-blue-200'>Restaurant Marketing</a><br/><br />
                                <a href="" className='text-xs font-semibold  text-green-600 p-1.5 rounded-2xl bg-green-200'>Local Business Marketing</a><a href="" className='text-xs font-semibold text-pink-900 rounded-2xl p-1.5 ml-2 bg-pink-200'>Local SEO</a>
                                <div />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Blog