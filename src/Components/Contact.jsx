import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contactPage" className='contact w-full h-screen px-32 flex items-center justify-center'>
        <div className="contact-left w-[50%] px-32">
            <p className=" contact-para">- Contact Us</p>
            <h1 className='contact-head text-5xl font-semibold mt-2'>Let's <span className=' text-green-500'>Connect </span>& <span className='text-green-500'>Collaborate</span></h1>
            <p className='mt-3 ctn-para'>Lorem ipsum dolor sit, amet consectetur ipsum dolor sit nemo! Quae, rerum.</p>

            <div className="contact-phone mt-3 flex flex-col gap-5">
              <h1 className='text-1xl flex items-center gap-2 '><span className='w-12 h-12 text-2xl bg-[#5840BA] rounded-full text-white flex items-center justify-center'><FaPhoneAlt/></span> 011-422-0120</h1>

              <a href="" className='text-1xl flex items-center gap-2'><span className='w-12 h-12 text-2xl bg-[#5840BA] rounded-full text-white flex items-center justify-center'><MdEmail /></span> example@gmail.com</a>

              <h1 className='text-1xl flex items-center gap-2'><span className='w-12 h-12 text-2xl bg-[#5840BA] rounded-full text-white flex items-center justify-center'><FaLocationDot /></span> 2464 Royal Ln. Mesa, New Jersey 45463</h1>
            </div>
        </div>

        <div className="contact-right flex gap-3 items-center">
          <form action="" className=' flex flex-col gap-3'>
            <div className="name flex gap-3">
              <input className='input-box w-full h-12 rounded-md bg-[#5840BA] text-white p-2 placeholder:text-sm placeholder:text-white' type="text" placeholder='First Name *' />
              <input className='input-box w-full h-12 rounded-md bg-[#5840BA] text-white p-2 placeholder:text-sm placeholder:text-white' type="text" placeholder='Last Name *' />
            </div>
            <div className="cont flex gap-3">
            <input className='input-box w-full h-12 rounded-md bg-[#5840BA] text-white p-2 placeholder:text-sm placeholder:text-white' type="text" placeholder='Email *' />
            <input className='input-box w-full h-12 rounded-md bg-[#5840BA] text-white p-2 placeholder:text-sm placeholder:text-white' type="text" placeholder='Phone Number *' />
            </div>
            <div className="subject flex gap-3">
            <input className='input-box-subject w-full h-12 rounded-md bg-[#5840BA] text-white p-2 placeholder:text-sm placeholder:text-white' type="text" placeholder='Subject *' />
            </div>
            <div className="text-area">
              <textarea className='w-full h-40 rounded-md bg-[#5840BA] text-white p-2 placeholder:text-sm placeholder:text-white' placeholder='Message *' name="" id=""></textarea>
            </div>
            <div className="contact-btn border-none  relative   gap-2 flex rounded-full items-center justify-start">
                <a href="" className='contact-btn bg-green-500 z-10 flex items-center justify-start gap-2 rounded-full text-sm text-black font-semibold  px-[2.3rem] py-3 '>Send Message </a>
                
              </div>

          </form>
        </div>
    </div>
  )
}

export default Contact