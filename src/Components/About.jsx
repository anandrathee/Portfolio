import React from 'react'
import Button from './Button'
import { FiArrowRightCircle } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";

const About = () => {
  return (
    <div id='about' className='about     w-full h-screen flex items-center justify-center gap-14 px-32 overflow-hidden'>

<div className="about-left-container w-[50%] h-[70vh] rounded-lg  flex items-center justify-evenly flex-col leading-[16rem]" > 
  <h1 className='text-[21rem] font-semibold text-[#5840BA]'>3+</h1>
  <span className='text-3xl font-semibold text-[#5840BA]'>Years of Experience</span>
</div>

          <div className="about-right-container w-[50%] h-[70vh] rounded-lg flex items-start justify-between p-10 flex-col" >            
            <p className='about-me font-semibold text-1xl'>- About Me</p>
            <h1 className='about-name text-6xl font-semibold text-[#5840BA]'><span className='who text-black'>Who is</span> Anand</h1>
            <h1 className='about-last-name text-6xl font-semibold text-[#5840BA]'>Rathee ?</h1>
            <div className="des w-[30rem] h-14 font-semibold">
            <p className='about-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquam! consectetur adipisicing elit. Quas, aliquam! </p>
            </div>

            <div className="about-text-content flex gap-16">
              <div>
                <h1 className='six text-4xl font-bold'>600+</h1>
                <h1 className='six-des font-semibold'>Projects Completed</h1>
              </div>
              <div>
                <h1 className='five text-4xl font-bold'>50+</h1>
                <h1 className='five-des font-semibold'>Industry Covered</h1>
              </div>
            </div>
            <div className="about-button-container flex items-center h-20 justify-center">
              <div className="about-btn bg-black border-none w-52 relative px-2  gap-2 flex rounded-full items-center justify-center">
                <a href="" className='about-link bg-green-500 z-10 flex items-center justify-center gap-2 rounded-full font-semibold ml-8 hover:-translate-x-10 transition duration-500 px-6 py-3 '>Download <FaArrowRightLong className='arrow'/></a>
                <h1 className='cv text-white font-semibold -ml-12 flex items-center justify-between'>CV</h1>
              </div>
              <div className="about-sign h-32 items-center justify-center flex">
                <img src="./signature.png" className='signature w-full h-full bg-cover' alt="" />
              </div>
            </div>
            
          </div>
          
    </div>
  )
}

export default About