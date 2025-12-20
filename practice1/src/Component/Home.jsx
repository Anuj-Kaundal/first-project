import React from 'react'
import { GiStarShuriken } from "react-icons/gi";

function Home() {
  return (
    // ======= MAIN WRAPPER START =======
    <div className='bg-blue-50'>

      {/* ======= HERO SECTION START ======= */}
      <div className="w-full h-screen relative">

        {/* Hero Background Image */}
        <img src="image3.jpg" alt="" className="w-full h-170 object-cover" />

        {/* Hero Heading */}
        <h1 className="text-5xl text-black font-extrabold text-center absolute top-[28%] left-1/2 -translate-x-1/2">
          Fueling Progress with Smart<br />IT Solutions
        </h1>

        {/* Hero Description */}
        <p className="text-black text-center absolute top-[42%] left-1/2 -translate-x-1/2">
          We empower your business with powerful IT solutions that aims<br />your success.
        </p>

        {/* Hero Button - Get Started */}
        <button className="bg-[#4169E1] text-white px-6 py-3 rounded-md absolute top-[55%] left-1/2 -translate-x-[110%] cursor-pointer">
          Get Started Today
        </button>

        {/* Hero Button - Consultation */}
        <button className="text-[#4169E1] bg-white px-6 py-3 rounded-md absolute top-[55%] left-1/2 translate-x-[10%] hover:bg-[#4169E1] hover:text-white cursor-pointer">
          Schedule a Free Consultation
        </button>

        {/* Hero Clients Text */}
        <p className="text-black font-semibold text-center absolute top-[68%] left-1/2 -translate-x-1/2">
          Building Success Stories for <span className='text-[#4169E1]'>200+ Trusted Clients</span>
        </p>

        {/* ======= SLIDER SECTION START ======= */}
        <div>
          <ul className='bg-black text-white font-semibold flex justify-between gap-2 h-20 items-center text-base'>
            <GiStarShuriken className='w-10 h-10 text-[#4169E1]' />
            <li>Digital Marketing</li>

            <GiStarShuriken className='w-10 h-10 text-[#4169E1]' />
            <li>Website Development</li>

            <GiStarShuriken className='w-10 h-10 text-[#4169E1]' />
            <li>Graphic Design</li>

            <GiStarShuriken className='w-10 h-10 text-[#4169E1]' />
            <li>Ecommerce</li>

            <GiStarShuriken className='w-10 h-10 text-[#4169E1]' />
            <li>Social Media Management</li>

            <GiStarShuriken className='w-10 h-10 text-[#4169E1]' />
            <li>App Development</li>

            <GiStarShuriken className='w-10 h-10 text-[#4169E1]' />
            <li>SEO Services</li>

            <GiStarShuriken className='w-10 h-10 text-[#4169E1]' />
            <li>Content Creation</li>
          </ul>
        </div>
        {/* ======= SLIDER SECTION END ======= */}

      </div>
      {/* ======= HERO SECTION END ======= */}

      {/* ======= ABOUT US SECTION START ======= */}
      <div className='bg-white flex items-center gap-12 m-20 p-10 rounded-2xl'>

        {/* About Left Content */}
        <div className='w-1/2 space-y-6'>
          <h1 className='text-[#4169E1] font-semibold'>
            ABOUT US
          </h1>

          <h1 className='text-4xl font-extrabold'>
            We provide Smart IT Solution to help your Business Grow
          </h1>

          <p className='text-gray-600'>
            Novanectar Services Private Limited is a provider of technology solutions that work to equip individuals and organizations with graphic design, web design, app development and improving all artifacts. Fueling Progress with Smart IT Solutions, we offer high quality digital solutions that are often thought out to meet the various requirements of our Clients.
          </p>

          <button className='bg-[#4169E1] text-white px-6 py-3 rounded-md cursor-pointer'>
            See More
          </button>
        </div>

        {/* About Right Image */}
        <div className='w-1/2 flex justify-center'>
          <img src="image4.jpg" alt="" width={500} height={500} className='rounded-2xl' />
        </div>

      </div>
      {/* ======= ABOUT US SECTION END ======= */}
      {/* ======= SERVICES SECTION START ======= */}
      <div>
        <h1 className='text-6xl font-semibold underline decoration-blue-400 decoration-4'>
          Services
        </h1>

        {/* ROW 1 */}
        <div className='pl-20 pr-20 p-15 flex gap-10'>

          <div className='w-120 h-120 rounded-2xl bg-pink-50 cursor-pointer'>
            <img
              src="graphicdesign.jpg"
              alt="Graphic Design"
              className="w-full h-70 object-cover rounded-t-2xl"
            />
            <h1 className='text-3xl p-5 text-center hover:text-[#4169E1]'>Graphic Design</h1>
            <p className='text-xl text-gray-700 p-3'>
              Create visually stunning designs tailored to your brand, ensuring a professional and creative edge in every project.
            </p>
          </div>

          <div className='w-120 h-120 rounded-2xl bg-pink-50 cursor-pointer'>
            <img
              src="appdevelopment.webp"
              alt="App Development"
              className="w-full h-70 object-cover rounded-t-2xl"
            />
            <h1 className='text-3xl p-5 text-center hover:text-[#4169E1]'>App Development</h1>
            <p className='text-xl text-gray-700 p-3'>
              Build innovative and user-friendly mobile applications to meet your business needs and enhance customer engagement.
            </p>
          </div>

          <div className='w-120 h-120 rounded-2xl bg-pink-50 cursor-pointer'>
            <img
              src="webdevelopment.jpeg"
              alt="Website Development"
              className="w-full h-70 object-cover rounded-t-2xl"
            />
            <h1 className='text-3xl p-5 text-center hover:text-[#4169E1]'>Website Development</h1>
            <p className='text-xl text-gray-700 p-3'>
              Design responsive, visually appealing, and functional websites that deliver an exceptional user experience.
            </p>
          </div>

        </div>
        {/* ROW 2 */}
        <div className='pl-20 pr-20 p-10 flex gap-10'>

          <div className='w-120 h-120 rounded-2xl bg-pink-50 cursor-pointer'>
            <img
              src="socialmedia.webp"
              alt="Social Media Management"
              className="w-full h-70 object-cover rounded-t-2xl"
            />
            <h1 className='text-3xl p-5  text-center hover:text-[#4169E1]'>Social Media Management</h1>
            <p className='text-xl text-gray-700 p-3'>
              Elevate your brand's digital presence and engagement with powerful, data-driven social media strategies.
            </p>
          </div>

          <div className='w-120 h-120 rounded-2xl bg-pink-50 cursor-pointer'>
            <img
              src="seo.jpg"
              alt="SEO Services"
              className="w-full h-70 object-cover rounded-t-2xl"
            />
            <h1 className='text-3xl p-5 text-center hover:text-[#4169E1]'>SEO Services</h1>
            <p className='text-xl text-gray-700 p-3'>
              Optimize your online content to improve visibility, attract organic traffic, and enhance your search engine rankings.
            </p>
          </div>

          <div className='w-120 h-120 rounded-2xl bg-pink-50 cursor-pointer'>
            <img
              src="digital.png"
              alt="Digital Marketing"
              className="w-full h-70 object-cover rounded-t-2xl"
            />
            <h1 className='text-3xl p-5 text-center hover:text-[#4169E1]'>Digital Marketing</h1>
            <p className='text-xl text-gray-700 p-3'>
              Provide strategic and effective marketing campaigns to promote your brand and drive measurable growth.
            </p>
          </div>

        </div>
      </div>
      {/* ======= SERVICES SECTION END ======= */}
      {/* ======= Process section start ======= */}
      <div className='flex'>
        <div>
          <h1>Strategy</h1>
          <p>We craft tailored digital strategies, aligning business goals with innovative solutions for impactful results.</p>
        </div>
        <div>
          <h1>Wireframing & Design</h1>
          <p>We create intuitive wireframes and stunning designs to ensure seamless user experiences and visual appeal.</p>
        </div>
        <div>
          <h1>Development</h1>
          <p>Employing advanced technologies, we build scalable, robust solutions optimized for performance and functionality.</p>
        </div>
        <div>
          <h1>Quality Assurance</h1>
          <p>Thorough testing ensures flawless performance, addressing bugs and aligning deliverables with client expectations.</p>
        </div>
      </div>
    </div>
    // ======= MAIN WRAPPER END =======
  )
}

export default Home
