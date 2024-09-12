import React, { useState, useEffect, useRef } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Button from "./Button";
import { IoIosCloseCircle } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  const data = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHwxfDB8fHww",
      feedBack: "Highly Recommended.", name: "Amara",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1515511624704-b8916dcc30ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
      feedBack: "Good Work, keep it up.", name: "Elena",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
      feedBack: "Awesom dude..", name: "Lucia",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
      feedBack: "Very quick service.", name: "Shira",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
      feedBack: "Nice Courteous and good knowledgeable.", name: "Peter",
    },
  ];

  const imageUrl = useRef(null);
  const name = useRef(null);
  const feedBack = useRef(null);
  const [feedForm, setFeedForm] = useState(false);
  const [formClosing, setFormClosing] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [profile, setProfile] = useState(data);

  const handleForm = (e) => {
    e.preventDefault();
    // console.log("Form submitted");
  
    const newProfile = {
      name: name.current.value,
      feedBack: feedBack.current.value,
      imageUrl: imageUrl.current.value,
    };
  
    setProfile((prev) => [...prev, newProfile]);
  
    imageUrl.current.value = "";
    name.current.value = "";
    feedBack.current.value = "";
  };

  const closeButton = () => {
    setFormClosing(true);
    setTimeout(() => {
      setFeedForm(false);
      setFormClosing(false);
    }, 500); // 500ms ke baad form remove hoga
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === profile.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [profile.length]);

  useEffect(() => {
    // console.log("Profile Updated: ", profile);
  }, [profile]);

  return (
    <div id="home" className="home-page w-full flex items-center justify-between h-screen overflow-hidden px-32">

      <div className="home-left-content flex items-start justify-between flex-col">
        <div className="top w-52 h-52   rounded-full flex items-center justify-evenly bg-zinc-100 shadow-inner p-2">
          <div className="w-full h-full rounded-full bg-zinc-300 border-2 border-blue-300 overflow-hidden flex items-center justify-center ">
            <img
              src={profile[currentImageIndex].imageUrl}
              className="h-full object-cover w-full "
              alt=""
            />
          </div>
        </div>

        <div className="testimonial h-22 w-[14rem] flex flex-col items-start p-2 rounded-md transition-all duration-1000">
          <h2 className="font-semibold text-3xl">{profile[currentImageIndex].name}:</h2>
          <h3 className="h-12 w-[16rem]  font-bold w-58 text-ellipsis overflow-hidden">
            {profile[currentImageIndex].feedBack}
          </h3>
        </div>  

        <div className="bottom flex flex-col items-start gap-1 mb-10">
          <div className="flex items-center justify-center">
          <div>
          <h2 className="font-bold text-[3rem] ml-2">{profile.length}+</h2>
          <p className="font-bold text-sm ml-2 mb-2 -mt-2">Happy Clients</p>
          </div>
          <div className="clients-feed w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center text-[#5840BA] text-2xl ml-4 border-2 border-[#5840BA]">
    <button onClick={() => setFeedForm(true)} className="w-14 h-14 font-semibold text-xl flex items-center justify-center">
    {/* <FaPlus /> */}
    Post
    </button>
            </div>
          </div>
          
          </div>


          {/* <div className="clients flex w-[17rem]  h-20 -mt-3 items-center justify-center  overflow-x-auto">
  {profile.map((item, index) => (
    <div
      key={item.name + index} // Unique key using name and index
      className={`clients-feed w-16 h-16 rounded-full shrink-0 bg-zinc-500 flex items-center justify-center border-2 -ml-4 overflow-hidden ${index === currentImageIndex ? 'scale-105' : ''} transition duration-200 `}
    >
      <img src={item.imageUrl} alt={item.name} />
    </div>
  ))}
  
         
        </div> */}
        <div className=" top-[80%] -mt-8 flex justify-start gap-5 bg-white rounded-full p-1">
          <Button color={"bg-[#5840BA] rounded-full text-white text-lg px-10 py-3"} text={"Portfolio"} />
          <Button color={"rounded-full border-2 border-black text-black font-semibold text-lg px-10 py-3 "} text={"Hire Me"} />
        </div>
      </div>

      <div className="home-center-content flex flex-col items-center justify-end h-full mt-[40rem] ">
        <p className="home-para font-semibold">- Hello</p>
        <h1 className="home-text font-semibold text-5xl flex items-center justify-center gap-2">
          I'm <u className="text-[#5840BA]"><img src="/icons/Name.png" alt="" className=" home-name-img w-40" /></u>
        </h1>
        <h1 className="home-text2 font-semibold text-6xl">Frontend Developer</h1>
        <div className="image h-[50vw] bg-cover flex items-center justify-center">
          <img id="home-img" src="/image/GirlBlue.png" className="h-full mb-10" alt="" />
        </div>        
      </div>

      <div className="home-right-content flex flex-col items-center justify-center gap-5">
        <div className="line bg-[#5840BA] w-1 h-28 rounded-full"></div>
        <FaFacebookF className="text-2xl" />
        <FaXTwitter className="text-2xl" />
        <FaLinkedinIn className="text-2xl" />
        <FaGithub className="text-2xl" />
        <div className="line bg-[#5840BA] w-1 h-28 rounded-full"></div>
      </div>
      {feedForm && (
        <div className={`feedForm bg-black flex overflow-hidden items-center justify-center w-full h-screen inset-0 bg-opacity-30 backdrop-blur-sm top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] absolute transition-transform duration-500 ${formClosing ? "translate-y-full" : ""}`}>
          <div className={`w-[25vw] rounded-md p-3 bg-zinc-800 relative`}>
            <IoIosCloseCircle className='text-3xl absolute text-white -top-4 right-0 cursor-pointer' onClick={closeButton} />
            <h1 className='font-semibold mb-5 text-center text-white text-4xl'>Feedback</h1>
            <form onSubmit={handleForm} className='flex flex-col gap-2'>
              <input ref={imageUrl} type="text" placeholder='Image url' className='h-12 rounded outline-blue-600 pl-3' />
              <input ref={name} type="text" placeholder='Name' className='h-12 rounded outline-blue-600 pl-3' />
              <textarea ref={feedBack} placeholder='Feedback' className='pl-3 h-32 outline-blue-600 rounded'></textarea>
              <input type="submit" className='px-2 py-3 text-sm text-white bg-[#5840BA] mt-1 rounded cursor-pointer' />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
