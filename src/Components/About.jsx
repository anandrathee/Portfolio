import React, { useEffect, useState } from 'react';

const About = () => {
  const [days, setDays] = useState(0); // initial day count
  const [years, setYears] = useState(0); // manually set initial year count
  const [months, setMonths] = useState(12); // manually set initial month count
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);

      // Calculate the total difference in days from the start date
      const startDate = new Date('2024-01-01T00:00:00'); // Local time (no timezone adjustment)
      const diffInTime = now.getTime() - startDate.getTime();
      const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));

  

      // Update days based on the difference in days from the start date
      setDays(diffInDays);
      setMonths(Math.ceil(diffInDays / 30));
      setYears((prev)=> {
        if(months > 12){
          return prev + 1;
        }
        return prev;
      });
    }, 1000); // update every 1 second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="about" className="about w-full h-screen flex items-center justify-evenly gap-2 overflow-hidden">
      <div className="about-left-container w-[23%] bg-blue-500 h-[55vh] p-2 text-center rounded-lg flex flex-col items-center justify-center">
        <div className="flex gap-5 -mb-8">
          <h1 className="text-[5vw] font-semibold text-white">
            {years}
            <sup className="text-[1vw] font-semibold">year</sup>
          </h1>
          <h1 className="text-[5vw] font-semibold text-white">
            {months}
            <sup className="text-[1vw] font-semibold">months</sup>
          </h1>
        </div>

        <h1 className="text-[4vw] font-semibold text-white">
          {days}
          <sup className="text-[1vw] font-semibold">days</sup>
        </h1>

        <div className="data-time flex flex-col gap-2 text-white font-semibold text-xl">
          <h1 className="text-3xl font-semibold text-white">Years of Experience</h1>
          <div className="flex text-center items-center justify-center gap-5">
            <p>{currentTime.toLocaleTimeString()}</p>
            <p>{currentTime.toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      <div className="about-right-container w-fit h-fit gap-2 rounded-lg flex items-start justify-center p-10 flex-col">
        <p className="about-me font-semibold text-1xl">- About Me</p>
        <h1 className="about-name text-[3.2vw] font-semibold text-green-500 -mb-6">
          <span className="who text-black">Who is</span> Anand
        </h1>
        <h1 className="about-last-name text-[3.2vw] font-semibold text-green-500">Rathee ?</h1>
        <div className="des w-[30rem] font-semibold">
          <p className="about-para text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquam! consectetur adipisicing elit. Quas, aliquam!
          </p>
        </div>

        <div className="about-text-content flex gap-16">
          <div>
            <h1 className="six text-4xl font-semibold">20+</h1>
            <h1 className="six-des font-semibold">Projects Completed</h1>
          </div>
          <div>
            <h1 className="five text-4xl font-semibold">12+</h1>
            <h1 className="five-des font-semibold">Industry Covered</h1>
          </div>
        </div>
        <div className="about-button-container flex items-center h-20 justify-center gap-10">
          <a
            href="/documents/Anand_resume.pdf"
            download="Anand_resume.pdf"
            className="about-link bg-blue-500 text-white z-10 text-[.9vw] flex items-center gap-2 justify-center rounded-full font-semibold transition duration-500 active:scale-95 px-4 py-3"
          >
            Download CV
          </a>
          <div className="about-sign h-32 items-center justify-center flex">
            <img src="./signature.png" className="signature w-48" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
