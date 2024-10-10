import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer w-full h-80 bg-[#2B3940]  px-[8vw]">
      <div className="footer-top w-full flex items-center justify-between h-[80%]">
        <div className="footer-left flex flex-col gap-2 w-[30%]">
          <h1 className="text-white text-sm font-semibold">
         Address: 1623, Basement Shop No-4, Gali No-13,
          Govind puri, Kalkaji-1, New Delhi-110019.
          </h1>
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3505.1768407691866!2d77.25774557549727!3d28.53440387571851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMyJzAzLjkiTiA3N8KwMTUnMzcuMiJF!5e0!3m2!1sen!2sin!4v1727682504459!5m2!1sen!2sin"  referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="footer-center flex flex-col text-sm gap-2 w-36">
          <h1 className="quick-head font-semibold text-white text-lg">
            Quick Links
          </h1>
          <a href="#home" className="flex items-center font-semibold gap-2 hover:-tracking-wider hover:text-white transition-all text-[#959CA0]">
            <MdKeyboardArrowRight /> HOME
          </a>
          <a href="#about" className="flex items-center font-semibold gap-2 hover:-tracking-wider hover:text-white transition-all text-[#959CA0]">
            <MdKeyboardArrowRight /> ABOUT
          </a>
          {/* <Link className="flex text-sm items-center font-semibold gap-2 hover:-tracking-wider transition-all text-[#959CA0]">
            <MdKeyboardArrowRight /> SERVICES
          </Link> */}
          <a href="#services" className="flex  items-center font-semibold gap-2 hover:-tracking-wider hover:text-white transition-all text-[#959CA0]">
            <MdKeyboardArrowRight /> SERVICES
          </a>
          <a href="#myProjects" className="flex items-center font-semibold gap-2 hover:-tracking-wider hover:text-white transition-all text-[#959CA0]">
            <MdKeyboardArrowRight /> PROJECTS
          </a>
          <a href="#testimonials" className="flex items-center font-semibold gap-2 hover:-tracking-wider hover:text-white transition-all text-[#959CA0]">
            <MdKeyboardArrowRight /> TESTIMONIALS
          </a>
        </div>
        <div className=" footer-right text-sm flex flex-col gap-3">
          <h1 className="quick-head text-white text-xl font-semibold">
            Contact
          </h1>
          <div className="footer-contact flex items-center gap-2 text-[#959CA0]">
            <FaPhoneAlt className="footer-link text-2xl" /> <a href="tel:+919266764544"> +91 926676 4544</a>
          </div>

          <a
            href="mailto:an4nd6501@gmail.com"
            className="footer-mail flex footer-mail items-center gap-2 text-[#959CA0]"
          >
            <MdEmail className="footer-link-mail text-2xl" />{" "}
            an4nd6501@gmail.com
          </a>
          <div className="social flex gap-2">
            <a
              target="_blank"
              href="https://www.facebook.com/share/AB7J6GswiYRcSe48/?mibextid=qi2Omg"
            >
              <FaFacebook className="footer-social-link text-[#959CA0] hover:text-white transition-all text-3xl" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/itinnovateenterprises/"
            >
              <FaInstagramSquare className="footer-social-link text-[#959CA0]  hover:text-white transition-all text-3xl" />
            </a>
            <a href="https://wa.me/919266764544" target="_blank">
              <FaSquareWhatsapp className="footer-social-link text-[#959CA0] hover:text-white transition-all text-3xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom w-full h-[20%] border-t-2 border-zinc-600 text-sm text-center flex items-center justify-center">
        <p className="footer-text text-white">
           © 2024 all rights reserved to procoder.com 
          {/* <span className="text-white">it-innovateenterprises.com</span> */}
        </p>
      </div>
    </div>
  );
};

export default Footer;
