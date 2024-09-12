import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";

const Navbar = () => {

  const [bar, setBar] = useState(false);

  const handleBar = () => {
    setBar(prev => !prev);
  }

  return (
    <div id='navBar' className='navBar w-full h-14 flex items-center justify-between px-32 fixed'>
      <div className="logo font-bold text-3xl text-[#5840BA]">ProCoder</div>
      
      <nav className='nav flex items-center justify-center gap-10 text-lg font-semibold'>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#myProjects">Projects</a>
        <a href="#testimonials">Testimonials</a>
      </nav>

      {/* Responsive Navigation */}
      <div className={`nav-response ${bar ? 'block' : 'hidden'} flex flex-col gap-4`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#myProjects">Projects</a>
        <a href="#testimonials">Testimonials</a>
      </div>

      <div>
        <div onClick={handleBar} className='bar cursor-pointer hidden'><FaBars /></div>
        <a href="#contactPage" className='ctnPage text-black font-semibold underline text-lg px-8 py-2'>Contact</a>
      </div>
    </div>
  )
}

export default Navbar;
