import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <div className='flex flex-wrap justify-between p-10 bg-[#02153c] text-gray-400'>
        {/* info section */}
        <div className=" w-full sm:w-auto md:w-60 lg:w-60 p-5">
          <h1 className='text-white font-semibold text-2xl'>NOVANECTAR</h1>
          <h3 className='mb-3 mt-3'>IT Services & IT Consulting</h3>
          <h3>VISIT US <br /> GMS Road Dehradun <br />Uttarakhand, India - 248001</h3>
        </div>
        {/* Quick links */}
        <div className=" w-52 sm:w-auto md:w-48 lg:w-48 pt-5">
          <ul>
            <h1 className='text-white font-semibold'>Quick links</h1>
            <li>Home</li>
            <li>Services</li>
            <li>Our work</li>
            <li>About us</li>
            <li>Blog</li>
            <li>Career</li>
          </ul>
        </div>
        {/* SOLUTIONS */}
        <div className="w-60 sm:w-auto md:w-56 lg:w-56 pt-5">
          <ul>
            <h1 className='text-white font-semibold'>SOLUTIONS</h1>
            <li>Web Development</li>
            <li>App Development</li>
            <li>Graphic Designing</li>
            <li>Digital Marketing</li>
            <li>Social Media Management</li>
            <li>SEO</li>
          </ul>
        </div>
        {/* CAREER */}
        <div className='w-60 sm:w-auto lg:w-40 pt-5' >
          <ul>
            <h1 className='text-white font-semibold'>Jobs</h1>
            <li>Internship</li>
            <li>Training</li>
            <li className='text-white font-semibold cursor-not-allowed '>LEGAL</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* FOLLOW US */}
        <div className='w-60 pt-5 sm:w-auto lg:w-48'>
          <h1 className='text-white font-semibold'>FOLLOW US</h1>
          < ul className='flex gap-5 mt-5 text-2xl'>
            <span className='cursor-pointer' onClick={() => window.open('https://www.facebook.com/')}><FaFacebookF /></span>
            <span className='cursor-pointer' onClick={() => window.open('https://www.instagram.com/accounts/login/?hl=en')}><FaInstagram /></span>
            <span className='cursor-pointer' onClick={() => window.open('https://www.linkedin.com/')}><FiLinkedin /></span>
            <span className='cursor-pointer' onClick={() => window.open('https://www.youtube.com/')}><FaYoutube /></span>
            <span className='cursor-pointer' onClick={() => window.open('https://twitter.com/')}><FaTwitter /></span>
          </ul>
        </div>
      </div>
      <div className='text-center bg-[#02153c] text-gray-400'>
        <h1>© 2025 All Rights Reserved.</h1>
      </div>
    </div>
  )
}

export default Footer