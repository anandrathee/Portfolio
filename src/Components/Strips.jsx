import React from 'react';
import './Strips.css'; // Make sure to import the CSS file

const Strips = () => {
  const data = [
    {logo: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694f104c9b6ce2c0a0d0d13_botify-white.svg"},
    {logo: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e95_63aed9589c2695a8bfaa920e_yahoo.svg"},
    {logo: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab231_63aedb322c152d2deae759ec_mural.svg"},
    {logo: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b782a9d67c3b6d5e44_63b38482196e18287bb470b6_jungle.svg"},
    {logo: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f79_63aedb713ba6d19b75099311_basf.svg"},
    {logo: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88fc_660191edcdb42d79ba8c23aa_Logo.svg"},
    {logo: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b997d53302df1b9075_63aeda082c152d7b32e74c9d_remind.svg"},
  ];

  return (
    <div className="strips-container">
      <div className="strip1 animate-strip">
        {data.map((item, index) => (
          <img className='strip1-img' key={index} src={item.logo} alt=""/>
        ))}
      </div>
      <div className="strip1 animate-strip">
        {data.map((item, index) => (
          <img className='strip1-img' key={index} src={item.logo} alt=""/>
        ))}
      </div>
    </div>
  );
};

export default Strips;