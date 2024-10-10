import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
// import { toast } from "react-toastify";

const Contact = () => {
  const handleSubmit = () => {
    // toast.success(`Your request is submitted`);
  };

  return (
    <div
      id="contact"
      className="contact-page w-[100%] px-32 h-screen flex items-center justify-evenly"
    >
      <div className="contact-left w-[50%]">
        <p className="contact-us text-sm">- Contact Us</p>
        <h1 className="contact-head text-[2.5vw] font-semibold leading-[3.5vw]">
          Let's <span className=" text-blue-500">Connect </span>& <br />{" "}
          <span className="text-blue-500">Get Services</span>
        </h1>
        <p className="contact-des text-sm mt-3 ctn-para w-[80%]">
          We value integrity and transparency. Our mission is to deliver
          top-quality technology solutions, putting customer satisfaction first.
          We envision a future where technology enhances lives, and we strive to
          be at the forefront of this positive change.
        </p>

        <div className="contact-details mt-3 flex text-sm flex-col gap-5">
          <div className="ctn-phone flex items-center gap-5 ">
            <div className="ctn-icon-circle w-12 h-12 text-2xl bg-blue-500 rounded-full text-white flex items-center justify-center">
              <FaPhoneAlt className="ctn-icon" />
            </div>
            <div className="phone-numbers flex flex-col">
              <a href="tel:+919266764544" className="font-semibold">
                Anand Rathee: <span className="text-blue-500">+91 7291876266</span>{" "}
              </a>
              <a href="tel:+919266764544" className="font-semibold">
                Help Desk: <span className="text-blue-500">01149952553</span>{" "}
              </a>
              
            </div>
          </div>

          <div className="email-id flex gap-5">
            <div className="ctn-icon-circle w-12 h-12 text-2xl bg-blue-500 rounded-full text-white flex items-center justify-center">
              <MdEmail className="ctn-icon" />
            </div>
            <a
              href="mailto:abhaymehta@it-innovateenterprises.com"
              className="ctn-email  font-semibold text-blue-600 underline -mb text-1xl flex items-center w-[58%] gap-2"
            >
              {" "}
              an4nd6501@gmail.com
            </a>
          </div>

          <div className="ctn-address font-semibold leading-normal flex items-center gap-5 ">
            <span className="ctn-icon-circle w-12 h-12 text-2xl bg-blue-500 rounded-full text-white flex items-center justify-center">
              <FaLocationDot className="ctn-icon" />
            </span>{" "}
            1623, Basement Shop No-4, Gali No-13, <br /> Govind puri, Kalkaji-1,
            New Delhi-110019.{" "}
          </div>
        </div>
      </div>

      <div className="contact-right flex gap-3 items-center justify-center ">
        <form
          action="https://formspree.io/f/xjkbzlog"
          method="POST"
          className="form w-86  flex flex-col gap-3"
        >
          <div className="name flex gap-3">
            <input
              className="input-box w-full h-12 text-sm bg-zinc-200 rounded  border-b-2 hover:border-blue-500 outline-none text-black p-2 placeholder:text-xs placeholder:font-semibold placeholder:text-black"
              type="text"
              placeholder="Full Name *"
              name="username"
              required
            />
          </div>
          <div className="cont flex gap-3">
            <input
              className="input-box w-full h-12 text-sm bg-zinc-200 rounded  outline-none  border-b-2 hover:border-blue-500  text-black p-2 placeholder:text-xs placeholder:font-semibold placeholder:text-black"
              type="text"
              placeholder="Email *"
              name="email"
              required
            />

            <input
              className="input-box w-full h-12 text-sm bg-zinc-200 rounded  outline-none  border-b-2 hover:border-blue-500  text-black p-2 placeholder:text-xs placeholder:font-semibold placeholder:text-black"
              type="text"
              placeholder="Phone Number *"
              name="phonenumber"
              required
            />
          </div>

          <div className="subject flex gap-3">
            <input
              className="input-box subject w-full h-12 text-sm bg-zinc-200 rounded outline-none  border-b-2 hover:border-blue-500  text-black p-2 placeholder:text-xs placeholder:font-semibold placeholder:text-black"
              type="text"
              placeholder="Subject *"
              name="subject"
              required
            />
          </div>
          <div className="text-area">
            <textarea
              className="text-area-box w-full h-40 text-sm bg-zinc-200 rounded outline-none   border-b-2 hover:border-blue-500  text-black p-2 placeholder:text-xs placeholder:font-semibold placeholder:text-black"
              placeholder="Message *"
              name="message"
              id=""
              required
            ></textarea>
          </div>
          <div className="contact-btn-container border-none  relative gap-2 flex items-center justify-start">
            <input
              onClick={handleSubmit}
              type="submit"
              className="contact-btn rounded uppercase bg-blue-500 text-white z-10 flex items-center justify-start gap-2 rounde text-sm font-semibold  px-3 py-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
