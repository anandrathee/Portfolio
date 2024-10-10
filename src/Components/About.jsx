import React from 'react'
import Button from './Button'
import { FiArrowRightCircle } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";

const About = () => {
  return (
    <div id='about' className='about w-full h-screen flex items-center justify-evenly gap-2 overflow-hidden '>

<div className="about-left-container w-[23%] bg-blue-500 h-[55vh] rounded-lg flex flex-col items-center justify-center leading-[16vw] " > 
  <h1 className='text-[17vw] font-semibold text-white'>1<sup className='text-[10vw] font-normal'>+</sup></h1>
  <span className='text-xl font-semibold text-white'>Years of Experience</span>
</div>

          <div className="about-right-container w-fit  h-fit gap-2 rounded-lg flex items-start justify-center p-10 flex-col" >            
            <p className='about-me font-semibold text-1xl'>- About Me</p>
            <h1 className='about-name text-[3.2vw] font-semibold text-green-500 -mb-6'><span className='who text-black'>Who is</span> Anand</h1>
            <h1 className='about-last-name text-[3.2vw] font-semibold text-green-500'>Rathee ?</h1>
            <div className="des w-[30rem] font-semibold">
            <p className='about-para text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquam! consectetur adipisicing elit. Quas, aliquam! </p>
            </div>

            <div className="about-text-content flex gap-16">
              <div>
                <h1 className='six text-4xl font-semibold'>20+</h1>
                <h1 className='six-des font-semibold'>Projects Completed</h1>
              </div>
              <div>
                <h1 className='five text-4xl font-semibold'>12+</h1>
                <h1 className='five-des font-semibold'>Industry Covered</h1>
              </div>
            </div>
            <div className="about-button-container flex items-center h-20 justify-center gap-10">
              {/* <div className="about-btn  border-none w-52 relative px-2  gap-2 flex rounded-full items-center justify-center"> */}
                <a href="" className='about-link bg-blue-500 text-white z-10 text-sm flex items-center gap-2 justify-center rounded-full font-semibold transition duration-500  px-4 py-3 '>Download CV</a>
                {/* <h1 className='cv text-white font-semibold -ml-12 flex items-center justify-between'>CV</h1> */}
              {/* </div> */}
              <div className="about-sign h-32 items-center justify-center flex ">
                <img src="./signature.png" className='signature w-48' alt="" />
              </div>
            </div>
            
          </div>
          
    </div>
  )
}

export default About