import React from 'react'

function Contact() {
    return (
        <div className='bg-amber-100'>
            <div className='flex justify-center yg items-center gap-30 p-10'>
                {/* location */}
                <div className='w-fit bg-white rounded-2xl'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.5106822746134!2d78.0036214753556!3d30.30798877479193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092be94375e729%3A0xc160311fe8cb82d6!2sNovaNectar%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1766072879965!5m2!1sen!2sin" height={300} width={450} ></iframe>
                    <div className='p-5'>
                        <h1 className='text-xl font-semibold mb-3'>Address</h1>
                        <p className='mb-2'>GMS Rd, Haripuram, Kanwali, Dehradun, Uttarakhand <br /> 248001</p>
                        <h1 className='text-xl font-semibold mb-3'>Email</h1>
                        <p className='mb-2'>info@novanectar.co.in</p>
                        <h1 className='text-xl font-semibold mb-3'>Phone Number</h1>
                        <p>+91 8979891703 <br /> +91 8979891705</p>
                    </div>
                </div>
                {/* contact form */}
                <div className='w-fit p-10 bg-white rounded-2xl'>
                    <h1 className='text-3xl font-semibold text-center mb-3.5'>Contact Us Now</h1>
                    <input className='p-3 w-100 border-2 rounded-xl border-gray-400' type="text" name="name" id="name" placeholder='Enter Your Name' /><br />
                    <input className='p-3 w-100 border-2 rounded-xl border-gray-400 mt-6' type="email" name="email" id="email" placeholder='Enter Email' /><br />
                    <input className='p-3 w-100 border-2 rounded-xl border-gray-400 mt-6' type="number" name="contact" id="contact" placeholder='Enter Contact Number' /><br />
                    <input className='p-3 w-100 border-2 rounded-xl border-gray-400 mt-6' type="text" name="subject" id="subject" placeholder='Enter Subject' /><br />
                    <textarea className='p-3 w-100 border-2 rounded-xl border-gray-400 mt-6' name="message" id="message" placeholder='Enter Message'></textarea><br />
                    <input className='p-3 mb-5 w-100 text-white font-semibold rounded-xl mt-6 bg-[#4169E1]' type="submit" name="submit" id="submit" />
                </div>
            </div>
        </div>
    )
}

export default Contact