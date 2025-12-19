import React from 'react'
import { IoMenu } from "react-icons/io5";
function Header() {
  return (
    <div>
      <div className='p-5 shadow-lg flex justify-between items-center'>
        <img src="image1.png" alt="" height={200} width={200} />
        <ul className='hidden md:flex gap-15 justify-center'>
          <li><a href="http://localhost:5173/">Home</a></li>
          <li>Services</li>
          <li>Our work</li>
          <li><a href="">About us</a></li>
          <li><a href="Blog.jsx">Blog</a></li>
          <li>Career</li>
        </ul>
        <div>
          <button className='bg-[#4169E1] hidden md:flex justify-center items-center w-25 h-10 text-white font-semibold rounded-xl'><a href="http://localhost:5173/contact">Contact</a></button>
        </div>
        <IoMenu className='w-10 h-10 md:hidden' />
      </div>
    </div>
  )
}
export default Header