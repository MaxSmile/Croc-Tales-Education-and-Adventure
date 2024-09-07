// src/components/HeroSection.jsx

import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[75vh] my-8">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/welcome"
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">

        {/* Call to Action Buttons */}
        {/* <div className="flex space-x-4">
          <Link
            to="/explore"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg"
          >
            Start Your Adventure
          </Link>
          <a
            href="#crocwise-section"
            className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-6 rounded-lg"
          >
            Learn About Crocwise
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
