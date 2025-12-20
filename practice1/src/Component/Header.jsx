import React from 'react'
import { useNavigate } from 'react-router-dom' 
import { IoMenu } from "react-icons/io5";
function Header() {
  const navigator=useNavigate();
  return (
    <div>
      <div className='p-5 shadow-lg flex justify-between items-center fixed top-0 left-0 w-full z-50 bg-white shadow-gray-300'>
        <img src="public/image1.png" alt="" height={200} width={200} />
        <ul className='hidden lg:flex gap-15 justify-center '>
          <li onClick={()=>navigator('/')} className='cursor-pointer'>Home</li>
          <li>Services</li>
          <li>Our work</li>
          <li>About us</li>
          <li onClick={()=>navigator('/blog')} className='cursor-pointer'>Blog</li>
          <li>Career</li>
        </ul>
        <div>
          <button className='bg-[#4169E1] hidden lg:flex justify-center items-center w-25 h-10 text-white font-semibold rounded-xl cursor-pointer' onClick={()=>navigator('/contact')}>Contact</button>
        </div>
        <IoMenu className='w- 10 h-10 lg:hidden' />
      </div>
    </div>
  )
}
export default Header