import Countdown from './Countdown'
import React from 'react';
import nscchome from '../assets/nscchome.png';
import cube1 from '../assets/cube1.png';
import cube2 from '../assets/cube2.png';

const HeroSection = () => {
  const sectionStyle = {
    backgroundImage: `linear-gradient(145deg, #000000, #26E8E8)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '600px',
    zIndex: 0,
  };

  return (<>
    <div className="relative text-white py-20" style={sectionStyle}>
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center relative z-10">
        <img src={nscchome} alt="Newton School Coding Club" className="h-64 sm:h-80 mb-4" />
        <h1 className="text-4xl sm:text-6xl font-bold text-center leading-tight sm:leading-snug">
          Newton School Coding Club 
        </h1>

        {/* <p className="text-2xl text-center text-cyan-400 mt-4">
          SRMIST Coder's Vertex 
        </p> */}
        
        <div className="absolute bottom-0 left-0 right-0 mb-[145px]"> {/* Adjust bottom margin as needed */}
    <Countdown className=""/>
  </div>
        <a
          href="https://lu.ma/3684aiyb"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black border-2 border-white text-white px-12 py-4 mt-[155px] rounded-2xl hover:bg-gray-700 hover:text-gray-300 transition duration-300 text-xl"
        >
          Apply Here
        </a>
        
      </div>

      <div className="hidden md:block">
        <img
          src={cube1}
          alt="Glowing Cube"
          className="absolute left-0 bottom-0 ml-32 mr-2 mb-10 z-0"
          style={{ maxHeight: '300px' }}
        />
        <img
          src={cube2}
          alt="Glowing Cube"
          className="absolute right-0 bottom-0 mb-10 ml-2 z-0"
          style={{ maxHeight: '700px', right: '2px', marginRight: '10px' }}
        />
      </div>
    </div>
  </>
  );
}

export default HeroSection;
