import React, { useEffect, useState } from 'react';

const Testimonial = () => {
  const customerData = [
    {
      image: "/image/man1.avif", 
      name: "Nikhil", 
      position: "Admin, HR", 
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.", 
      rating: "4.8"
    },
    {
      image: "/image/man2.avif", 
      name: "Mohit", 
      position: "IT, Manager", 
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
      rating: "4.9"
    },
    {
      image: "/image/man3.avif", 
      name: "Rajesh", 
      position: "Sr, Maintanance Manager", 
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", 
      rating: "4.7"
    },
    {
      image: "/image/man4.avif", 
      name: "Sachin", 
      position: "Director at sky worrior", 
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.", 
      rating: "4.6"
    },
    {
      image: "/image/man5.avif", 
      name: "Himanshu Gupta", 
      position: "Owner of Coal Depot", 
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", 
      rating: "4.9"
    },
  ];

  const [index, setIndex] = useState(0); // Track the current testimonial index

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % customerData.length); // Loop through testimonials
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [customerData.length]); // Only runs once on mount

  const { image, name, position, des, rating } = customerData[index];

  return (
    <div id='testimonials' className='testimonial w-[100%] h-screen flex items-center flex-col justify-center gap-14  px-[8vw]'>
      <div className="testimonial-top w-full flex flex-col gap-2 items-center justify-center">
        <p className='tesimonial-client text-[1.1vw]'>- Clients Testimonials</p>
        <h1 className='testimonial-name text-blue-500 text-3xl font-bold'>Testimonials that</h1>
        <h1 className='testimonial-head text-black text-3xl font-semibold'>Speaks Our Quality of Work</h1>
      </div>

      <div className="testimonial-bottom w-full h-[25vw] gap-12 bg-zinc-200 flex items-center justify-center rounded-lg">
        <div className="testimonial-bottom-left bg-white h-80 w-72 rounded-[46%] overflow-hidden">
          <img className='testmonial-img object-fit h-[25rem] -mt-2 w-full' src={image} alt="" />
        </div>
        <div className="testimonial-bottom-right w-[50%]">
          <div className="rating">
            <div className="rating-text flex items-center">
              {/* Rating stars */}
              {[...Array(Math.round(rating))].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
              ))}
              {[...Array(5 - Math.round(rating))].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
              ))}
              <p className="ms-1 text-xl font-medium text-gray-500 dark:text-gray-400">{rating}</p>
              <p className="ms-1 text-xl font-medium text-gray-500 dark:text-gray-400">out of</p>
              <p className="ms-1 text-xl font-medium text-gray-500 dark:text-gray-400">5</p>
            </div>
          </div>
          <div className="testi-description leading-8">
            {des}
          </div>
          <div className="name-designation mt-3">
            <h1 className='testi-name font-semibold text-2xl'>{name}</h1>
            <h1 className='testi-position'>{position}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
