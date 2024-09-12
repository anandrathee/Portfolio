import React from 'react'


const Testimonials = () => {
  return (
    <div id='testimonials' className='testimonial w-full h-screen flex items-center flex-col justify-center gap-14 px-32'>
        <div className="testimonial-top w-full flex flex-col gap-2 items-center justify-center mt-10">
          <p className='tesimonial-client'>- Clients Testimonials</p>
          <h1 className='testimonial-name text-4xl font-bold'>Testimonials that</h1>
          <h1 className='testimonial-head text-[#5840BA] text-4xl font-semibold'>Speaks to my results</h1>
        </div>

        <div className="testimonial-bottom w-full h-[25vw] gap-12 bg-[#F5F5F5] flex items-center justify-center rounded-lg">
        <div className="testimonial-bottom-left bg-white h-80 w-72 rounded-[46%]">
        </div>
        <div className="testimonial-bottom-right w-[50%]">
          <div className="rating">
            <h1 className='rating-stars'>Five Starts</h1>
          </div>
          <div className="  description text-lg leading-8 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nihil maxime voluptatibus obcaecati ea enim illo, possimus, impedit similique accusantium ipsa doloribus consectetur qui atque quo incidunt voluptas maiores vero.</div>
          <div className="name-designation mt-3">
            <h1 className='testi-name font-semibold text-2xl'>Bessie Cooper</h1>
            <h1 className='testi-position'>CEO, Software Company</h1>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Testimonials