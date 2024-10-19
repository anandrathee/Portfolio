import React from 'react'
import Button from './Button'
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Services = () => {
  const data = [
    {image: "/icons/UI-UX.png", heading:"UI/UX Design", des: "Lorem ipsum, dolor sit amet consectetur cupiditate natus suscipit optio."},
    {image: "/icons/computer.png", heading:"App Design", des: "Lorem ipsum, dolor sit amet consectetur cupiditate natus suscipit optio."},
    {image: "/icons/App-Design.png", heading:"Web Design", des: "Lorem ipsum, dolor sit amet consectetur cupiditate natus suscipit optio."},
  ]
  return (
    <div id='services' className='services w-full h-screen px-32 bg-white '>
      <div className='flex items-center justify-center w-full h-screen flex-col gap-10 '>

      <div className="services-top w-full flex items-center justify-between"> 

        <div className="service-top-left flex flex-col items-start justify-between">
            <p className='service-top-para font-semibold text-[#5840BA]'>- Services</p>
          <h1 className='my-services text-3xl font-semibold text-[#5840BA]'>My <span className='text-green-500'>Services</span></h1>
          
        </div>
      

      </div>
      <div className="services-bottom w-full flex items-center justify-evenly">
        {data.map((item,index)=>(
          <div key={index} className="services-bottom-left w-[20vw] h-[23vw] p-2 bg-blue-500 text-white rounded-md flex items-center justify-center gap-5 flex-col">
          <div className="service-img w-28 h-28 rounded-full overflow-hidden p-8 relative bg-white">
            <img src={item.image} alt="" className='w-full h-full  object-cover' />
          </div>

          <h1 className='service-heading text-2xl font-semibold'>{item.heading}</h1>
          <div className="service-des w-full rounded-full text-center"> 
            <p className='ser-des font-semibold text-sm'>{item.des}</p>
          </div>
            <div className='ser-btn flex items-center justify-center text-sm gap-10'>
          <a href="">Learn More</a>
          <MdOutlineArrowRightAlt className='right-arrow -ml-8' />
            </div>

      </div>
        ))}
        
      </div>
      </div>
    </div>
  )
}

export default Services