import React from 'react'
import { GiStarShuriken } from "react-icons/gi";
import { GiCube } from "react-icons/gi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { IoLayers } from "react-icons/io5";
import { MdDesktopAccessDisabled } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
function Home() {
  return (
    // ======= MAIN WRAPPER START =======
    <div className="bg-blue-50">

      {/* ======= HERO SECTION START ======= */}
      <div className="w-full h-screen relative">

        {/* Hero Background Image */}
        <img src="image3.png" alt="" className="w-full h-170 object-cover" />

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
        <button className="text-[#4169E1] border-2 border-[#4169E1] bg-white px-6 py-3 rounded-md absolute top-[55%] left-1/2 translate-x-[10%] hover:bg-[#4169E1] hover:text-white cursor-pointer">
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
      <div className='bg-white flex items-center gap-12 m-15 p-15 rounded-2xl'>

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
          <img src="public/image4.png" alt="" width={500} height={500} className='rounded-2xl' />
        </div>

      </div>
      {/* ======= ABOUT US SECTION END ======= */}
      {/* ======= SERVICES SECTION START ======= */}
      <div>
        <h1 className='text-6xl font-semibold text-center underline decoration-blue-400 decoration-4 '>
          Services
        </h1>

        {/* ROW 1 */}
        <div className='flex gap-10 p-15'>

          <div className='w-120 h-120 rounded-2xl bg-pink-50 cursor-pointer'>
            <img
              src="public/graphicDesign.webp"
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
              src="public/mobiledev.webp"
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
              src="public/webdev.webp"
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
        <div className='p-15 flex gap-10'>

          <div className='w-120 h-120 rounded-2xl bg-pink-50 cursor-pointer'>
            <img
              src="public/social.webp"
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
              src="public/seo.webp"
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
              src="public/digitalMarketing.webp"
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
      <div className=' bg-[#03031C] text-white text-center p-15'>
        <h1 className='text-4xl underline'>Process</h1>
        <div className='flex gap-7 '>
          <div className='border-2 rounded-2xl'>
            <GiCube className='ml-10 mt-5 text-7xl' />
            <h1 className='text-2xl p-5'>Strategy</h1>
            <p className='pl-5 pr-5 pb-20'>We craft tailored digital strategies, aligning business goals with innovative solutions for impactful results.</p>
          </div>
          <div className='border-2 rounded-2xl'>
            <HiOutlinePencilSquare className='ml-10 mt-5 text-7xl' />
            <h1 className='text-2xl p-5'>Wireframing & Design</h1>
            <p className='pl-5 pr-5 pb-20'>We create intuitive wireframes and stunning designs to ensure seamless user experiences and visual appeal.</p>
          </div>
          <div className='border-2 rounded-2xl'>
            <MdDesktopAccessDisabled className='ml-10 mt-5 text-7xl' />
            <h1 className='text-2xl p-5'>Development</h1>
            <p className='pl-5 pr-5 pb-20'>Employing advanced technologies, we build scalable, robust solutions optimized for performance and functionality.</p>
          </div>
          <div className='border-2 rounded-2xl'>
            <IoLayers className='ml-10 mt-5 text-7xl' />
            <h1 className='text-2xl p-5'>Quality Assurance</h1>
            <p className='pl-5 pr-5 pb-20'>Thorough testing ensures flawless performance, addressing bugs and aligning deliverables with client expectations.</p>
          </div>
        </div>
      </div>
      {/* ======= Process section end ======= */}
      {/* ======= Projects section start ======= */}
      <div className='bg-pink-50'>
        <h1 className='text-4xl text-center p-15 underline decoration-blue-400 decoration-4'>Projects</h1>
        {/* first part project */}
        <div className='flex justify-center p-15 gap-10'>
          <div className='rounded-2xl'>
            <img src="public/iconic.jpg" alt="" className='rounded-2xl w-full h-120' />
            <h1 className='text-xl font-semibold p-5'>Iconic 11</h1>
            <ul className='flex flex-row gap-2 pl-5 text-gray-400'>
              <li>Social Media Management</li>
              <li className="flex items-center gap-1 "><GoDotFill />Reels</li>
              <li className="flex items-center gap-1 "><GoDotFill />Posts</li>
            </ul>
          </div>
          <div className='rounded-2xl'>
            <img src="public/tawa.jpg" alt="" className='rounded-2xl w-full h-120' />
            <h1 className='text-xl font-semibold p-5'>The Tawa Restaurant</h1>
            <ul className='flex flex-row gap-2 pl-5 text-gray-400'>
              <li>Social Media Management</li>
              <li className="flex items-center gap-1 "><GoDotFill />Reels</li>
              <li className="flex items-center gap-1 "><GoDotFill />Posts</li>
            </ul>
          </div>
        </div>
        {/* second part project */}
        <div className='flex justify-center gap-10 pl-15 pr-15'>
          <div className='rounded-2xl'>
            <img src="public/caninkart.jpg" alt="" className='rounded-2xl w-full h-120' />
            <h1 className='text-xl font-semibold p-5'>CaninKart</h1>
            <ul className='flex flex-row gap-2 pl-5 text-gray-400'>
              <li>Custom Coded Website</li>
              <li className="flex items-center gap-1 "><GoDotFill />UI/UX</li>
              <li className="flex items-center gap-1 "><GoDotFill />Testing</li>
            </ul>
          </div>
          <div className='rounded-2xl'>
            <img src="public/kkd.jpg" alt="" className='rounded-2xl w-full h-120' />
            <h1 className='text-xl font-semibold p-5'>KKD</h1>
            <ul className='flex flex-row gap-2 pl-5  text-gray-400'>
              <li>App Development</li>
              <li className="flex items-center gap-1 "><GoDotFill />E-commerce Integration</li>
              <li className="flex items-center gap-1 "><GoDotFill />Reward System</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center p-10">
          <button className="bg-blue-500 text-white p-2 rounded-lg w-48 cursor-pointer">
            See more
          </button>
        </div>
      </div>
      {/* ======= Projects section end ======= */}
      {/* ======= Our Products ======= */}
      <div className='p-15 bg-white'>
        <h1 className='text-4xl text-center p-10 underline decoration-blue-400 decoration-4'>Our Products</h1>
        <img src="public/tap-to-taste.png" alt="" className='rounded-2xl' />
      </div>
      {/* ======= Our Products end ======= */}
      {/* ======= Our Trusted Clients =======*/}
      <div className='p-15 bg-white'>
        <h1 className='text-6xl font-semibold text-center p-10'><span className='underline decoration-blue-400 decoration-4'>Our</span> Trusted Clients</h1>
        <ul className='flex justify-center gap-10'>
          <li><img src="public/client1.png" alt="Client 1" className='w-50 h-50 object-contain' /></li>
          <li><img src="public/client2.png" alt="Client 2" className='w-50 h-50 object-contain' /></li>
          <li><img src="public/client3.png" alt="Client 3" className='w-50 h-50 object-contain' /></li>
          <li><img src="public/client4.png" alt="Client 4" className='w-50 h-50 object-contain' /></li>
          <li><img src="public/client5.png" alt="Client 5" className='w-50 h-50 object-contain' /></li>
          <li><img src="public/client6.png" alt="Client 6" className='w-50 h-50 object-contain' /></li>
          <li><img src="public/client7.png" alt="Client 1" className='w-50 h-50 object-contain' /></li>
          <li><img src="public/client8.png" alt="Client 2" className='w-50 h-50 object-contain' /></li>
          <li><img src="public/client9.png" alt="Client 3" className='w-50 h-50 object-contain' /></li>
          <li><img src="public/client10.png" alt="Client 4" className='w-50 h-50 object-contain' /></li>
          <li><img src="public/client11.png" alt="Client 5" className='w-50 h-50 object-contain' /></li>
          <li><img src="public/client12.png" alt="Client 6" className='w-50 h-50 object-contain' /></li>
        </ul>
      </div>
      {/* ======= Our Trusted Clients end ======= */}
      {/* ======= something part start ======= */}
      <div className='flex justify-center text-center gap-10 bg-white'>
        <div className='bg-blue-200 rounded-2xl p-5 pl-20 pr-20'>
          <h1 className='text-5xl text-blue-600 font-semibold'>5+</h1>
          <p className='pt-2'>Years of Experience</p>
        </div>
        <div className='bg-blue-200 rounded-2xl p-5 pl-20 pr-20'>
          <h1 className='text-5xl text-blue-600 font-semibold'>300+</h1>
          <p className='pt-2'>Completed Projects</p>
        </div>
        <div className='bg-blue-200 rounded-2xl p-5 pl-20 pr-20'>
          <h1 className='text-5xl text-blue-600 font-semibold'>200+</h1>
          <p className='pt-2'>Happy Clients</p>
        </div>
        <div className='bg-blue-200 rounded-2xl p-5 pl-20 pr-20'>
          <h1 className='text-5xl text-blue-600 font-semibold'>200%</h1>
          <p className='pt-2'>ROI (Return on Investment)</p>
        </div>
      </div>
      {/* ======= something part end ======= */}
      {/* ======= Why Choose Us ======= */}
      <div className='bg-white p-15'>
        <h1 className='text-4xl text-center p-10'><span className='underline decoration-blue-400 decoration-4'>Why</span> Choose Us</h1>
        {/* first part */}
        <div className='flex justify-center gap-10'>
          {/* 1st */}
          <div className='w-90 bg-blue-50 h-70 p-10 rounded-2xl'>
            <img src="public/reliability.png" alt="" className='w-15 h-15 border bg-white object-cover p-3 rounded-full' />
            <h1 className='text-2xl'>Reliability</h1>
            <p>Trusted by millions Uniswap products are powered by the Uniswap Protocol. The protocol is the largest onchain marketplace</p>
          </div>
          {/* 2nd */}
          <div className='w-90 bg-blue-50 h-70 p-10 rounded-2xl'>
            <img src="public/scalability.png" alt="" className='w-15 h-15 border bg-white object-cover p-3  rounded-full' />
            <h1 className='text-2xl'>Scalability</h1>
            <p>Trusted by millions Uniswap products are powered by the Uniswap Protocol. The protocol is the largest onchain marketplace</p>
          </div>
          {/* 3rd */}
          <div className='w-90 bg-blue-50 h-70 p-10 rounded-2xl'>
            <img src="public/security.png" alt="" className='w-15 h-15 border bg-white object-cover p-3  rounded-full' />
            <h1 className='text-2xl'>Security</h1>
            <p>Trusted by millions Uniswap products are powered by the Uniswap Protocol. The protocol is the largest onchain marketplace</p>
          </div>
          {/* 4th */}
          <div className='w-90 bg-blue-50 h-70 p-10 rounded-2xl'>
            <img src="public/time.png" alt="" className='w-15 h-15 border bg-white object-cover p-3 rounded-full' />
            <h1 className='text-2xl'>Time Efficiency</h1>
            <p>Trusted by millions Uniswap products are powered by the Uniswap Protocol. The protocol is the largest onchain marketplace</p>
          </div>
        </div>
        {/* second part */}
        <div className='flex justify-center gap-10 mt-5'>
          {/* 1st */}
          <div className='w-90 bg-blue-50 h-70 p-10 rounded-2xl'>
            <img src="public/customization.png" alt="" className='w-15 h-15 border bg-white object-cover p-3 rounded-full' />
            <h1 className='text-2xl'>Customization</h1>
            <p>Trusted by millions Uniswap products are powered by the Uniswap Protocol. The protocol is the largest onchain marketplace</p>
          </div>
          {/* 2nd */}
          <div className='w-90 bg-blue-50 h-70 p-10 rounded-2xl'>
            <img src="public/expert-team.png" alt="" className='w-15 h-15 border bg-white object-cover p-3 rounded-full' />
            <h1 className='text-2xl'>Expert Teams</h1>
            <p>Trusted by millions Uniswap products are powered by the Uniswap Protocol. The protocol is the largest onchain marketplace</p>
          </div>
          {/* 3rd */}
          <div className='w-90 bg-blue-50 h-70 p-10 rounded-2xl'>
            <img src="public/support.png" alt="" className='w-15 h-15 border bg-white object-cover p-3 rounded-full' />
            <h1 className='text-2xl'>24/7 Support</h1>
            <p>Trusted by millions Uniswap products are powered by the Uniswap Protocol. The protocol is the largest onchain marketplace</p>
          </div>
          {/* 4th */}
          <div className='w-90 bg-blue-50 h-70 p-10 rounded-2xl'>
            <img src="public/delivery.png" alt="" className='w-15 h-15 border bg-white object-cover p-3 rounded-full' />
            <h1 className='text-2xl'>On time delivery</h1>
            <p>Trusted by millions Uniswap products are powered by the Uniswap Protocol. The protocol is the largest onchain marketplace</p>
          </div>
        </div>
      </div>
      {/* ======= Why Choose Us end ======= */}
      {/* ======= Start your project Today! start ======= */}
      <div className='bg-white p-15'>
        <h1 className='text-4xl text-center p-10'>Start your <span className='underline text-blue-600 decoration-blue-400 decoration-2'>project</span> Today!</h1>
      </div>
      {/* ======= Start your project Today! end ======= */}
      {/* ======= footer start ======= */}
      
    </div>
    // ======= MAIN WRAPPER END =======
  )
}

export default Home
