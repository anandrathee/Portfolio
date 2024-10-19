import React from 'react';
import Button from './Button';
import { MdOutlineArrowRightAlt } from "react-icons/md";

const MyProjects = () => {
  const data = [
    {
      image: "/projects/tmdb.png",
      title: "TMDB - Search Your Favourites Movies",
      name: "TMDB",      
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam recusandae veritatis repellat, dicta pariatur suscipit odit assumenda quaerat facere nobis.",
      ulr: "",
    },
    {
      image: "/projects/it-innovate.png",
      title: "IT-INNOVATEENTERISES",
      name: "IT-Innovate",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam recusandae veritatis repellat, dicta pariatur suscipit odit assumenda quaerat facere nobis.",
      ulr: "https://it-innovateenterprises.com/",
    },

    {
      image: "/projects/blinkit.png",
      title: "Blinkit Clone",
      name: "Blinkit-Clone",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam recusandae veritatis repellat, dicta pariatur suscipit odit assumenda quaerat facere nobis.",
      ulr: "https://it-innovateenterprises.com/",
    },
  ];

  return (
    <div id='myProjects' className='projects flex items-center justify-center bg-white  px-8 lg:px-32 w-full h-full flex-col gap-10 overflow-hidden'>
      <div className="project-top w-full flex items-center justify-between mt-[5rem]">
        <div className="project-top-left flex flex-col items-start justify-between">
          <p className='project-top-para font-semibold text-blue-600'>- Projects</p>
          <h1 className='project-head text-3xl font-semibold text-blue-600'>My <span className='text-green-500'>Latest Projects</span></h1>
        </div>
      
      </div>

      {data.map((item, index) => (
        <div key={index} className="project-card w-full h-[23vw] bg-zinc text-black rounded-3xl flex p-3 items-center justify-between gap-5">
          <div className="project-left-img w-[50%] h-fit rounded-3xl overflow-hidden relative">
            <img src={item.image} alt={item.title} className='pro-img h-96 object-contain rounded-lg' />
          </div>

          <div className="project-right-container w-[50%] h-full flex flex-col items-start justify-evenly rounded-3xl p-3">
            <div className="project-right-content-top w-full text-sm gap-3 rounded-full text-center flex">
              <Button text={"UI/UX Design"} color={"bg-green-500 text-black font-semibold rounded-br-xl"} />
              <Button text={"App Design"} color={"bg-green-500 text-black font-semibold rounded-br-xl"} />
              <Button text={"Wireframe"} color={"bg-green-500 text-black font-semibold rounded-br-xl"} />
            </div>
            <div className='project-right-content-bottom shadow-inner flex items-start justify-center gap-5 flex-col'>
              <h1 className='pro-bottom-title font-semibold'>{item.title}</h1>
              <p className='pro-bottom-des text-sm w-[28rem] leading-6'>{item.des}</p>
              {/* <div className="project-btn bg-black border-none  relative   gap-2 flex rounded-full items-center justify-center"> */}
                <a href={item.ulr} className='pro-link bg-blue-500 z-10 flex items-center justify-center gap-2 rounded text-sm text-white font-semibold transition duration-500  px-4 py-3 '>Visit Project </a>
                
              {/* </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MyProjects;
