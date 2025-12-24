import React from 'react'

function About() {
    return (
        <div className='bg-white pt-15'>
            <div className='bg-blue-50 p-5 sm:p-10 md:p-20 lg:p-30'>
                <div>
                    {/* ======= ABOUT US SECTION START ======= */}
                    <div className='bg-white flex flex-col gap-12 p-6 md:p-10 lg:p-15 rounded-2xl'>
                        <h1 className='text-[#4169E1] font-semibold'>
                            ABOUT US
                        </h1>
                     
                        <div className='flex flex-col-reverse lg:flex-row gap-10 items-center'>



                        

                        <div className=' w-full lg:w-1/2'>
                            <h1 className='2xl md:text-3xl  lg:text-4xl font-semibold'>
                                We provide Smart IT Solution to help your Business Grow
                            </h1>
                            <p className='text-gray-600'>
                                Novanectar Services Private Limited is a provider of technology solutions that work to equip individuals and organizations with graphic design, web design, app development and improving all artifacts. Fueling Progress with Smart IT Solutions, we offer high quality digital solutions that are often thought out to meet the various requirements of our Clients.
                            </p>
                        </div>

                        {/* About Right Image */}
                        <div className='w-full lg:w-1/2 flex justify-center'>
                            <img src="public/image4.png" alt="" width={500} height={500} className='rounded-2xl' />
                        </div>
                        </div>

                    </div>
                    {/* ======= ABOUT US SECTION END ======= */}
                </div>

            </div>
            {/* Certification section start */}
            <div className='bg-white p-10'>
                <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-bold'>Certified by India's Leading Authorities</h1>
                <div>
                    <ul className='flex justify-center gap-10 p-10'>
                        <li><img src="iso.png" alt="" width={100} height={100} /></li>
                        <li><img src="startup.png" alt="" width={200} height={200} /></li>
                        <li><img src="msme.png" alt="" width={200} height={200} /></li>
                        <li><img src="mca.png" alt="" width={200} height={200} /></li>
                    </ul>
                </div>
            </div>
            {/* Certification section end */}
            {/* ourStory section start */}
            <div className='flex'>
                <div className='w-1/2 p-10 space-y-6'>
                    <h1 className='text-purple-900 font-semibold'>OurStory</h1>
                    <p>We NovaNectar Smart IT Solutions started as a small team in Dehradun with a huge faith in the capability of intelligent digital solutions. We did not begin as a big corporation. We began with passion, ability and a vision to enable businesses to expand with technology and imagination.</p>
                    <p>We spent the early years working with startups and small businesses listening to their concepts and assisting them in establishing a solid digital base. Whether it was designing a website, building an app or enhancing their online presence. We took care to create work that actually mattered.</p>
                </div>
                <div className='w-1/2 p-10'>
                    <img src="ourStory.jpg" alt="" className='h-90 w-full' />
                </div>
            </div>
            {/* ourStory section end */}
            {/* Our Vision section start */}
            <div className='flex'>
                <div className='w-1/2 p-10'>
                    <img src="ourVision.jpg" alt="" className='h-90 w-full' />
                </div>
                <div className='w-1/2 p-10 space-y-6'>
                    <h1 className='text-purple-900 font-semibold'>Our Vision</h1>
                    <p>At NovaNectar Smart IT Solutions, our vision is to become a trusted growth partner for businesses by delivering innovation, collaboration and support any time it is needed, big or small. We aim to be more than just a service provider and want to grow alongside our clients by offering smart IT solutions, creative thinking and dependable teamwork.</p>
                    <p>Whether you are a startup or expanding firm we are confident in offering quality and simple digital services that yield results. We are dedicated to listening, evolving and being there when it counts the most because your success is our success.</p>
                </div>
            </div>
            {/* Our Vision section end */}
            {/* Our Leader section start */}
            <div>
                <div className='p-5 md:p-20 lg:p-20 text-center'>
                    <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-bold'>Our Leader</h1>
                    <p className='leading-relaxed text-base'>Behind NovaNectar's success is a passionate and visionary team dedicated to creating purposeful digital experiences. At the leadership of our team is<br></br> <mark className='bg-blue-200 p-1 rounded-xl'>Shivam Rai</mark>, our CEO whose strategic vision and hands-on leadership drive the company's development and long-term horizon. With him is <mark className='bg-blue-200 p-1 rounded-xl'>Avneesh<br></br> Kumar</mark>, our Director who contributes deep understanding and leadership depth, making sure that each project reflects our values and quality standards.<br></br> <mark className='bg-blue-200 p-1 rounded-xl'>Nitish Kumar</mark>, our Manager is actively involved in everyday operations and coordination of the team to ensure delivery remains seamless and<br></br> communication remains robust within and with clients.</p>
                </div>
                <div className='flex flex-col mg:flex-row justify-center text-center gap-20 p-10'>
                    <div>
                        <img src="avneeshSir.jpg" alt="" className='w-80 h-110 rounded-2xl' />
                        <h1 className='pt-5 text-3xl'>Avneesh Kumar</h1>
                        <h2 className='text-gray-500 text-2xl'>Director</h2>
                    </div>
                    <div>
                        <img src="shivamSir.jpg" alt="" className='w-80 h-110 rounded-2xl' />
                        <h1 className='pt-5 text-3xl'>Shivam Rai</h1>
                        <h2 className='text-gray-500 text-2xl'>CEO</h2>
                    </div>
                    <div>
                        <img src="nitishSir.jpg" alt="" className='w-80 h-110 rounded-2xl' />
                        <h1 className='pt-5 text-3xl'>Nitish Kumar</h1>
                        <h2 className='text-gray-500 text-2xl'>Manager</h2>
                    </div>
                </div>
            </div>
            {/* Our Leader section end */}
        </div>
    )
}

export default About