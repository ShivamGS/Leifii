import React from "react";
import "./flip.scss";

const Flipp = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="flip">
        <div className="front">
          <img
            src="/images/cover1.jpg"
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="back flex flex-col lg:flex-row text-black font-[questrial] p-4 lg:p-10">
          <div className="flex flex-row items-start lg:items-center mb-4 lg:mb-0">
            <div className="h-16 w-16 rounded-full overflow-hidden">
              <img src="/images/cover1.jpg" alt="Profile" />
            </div>
            <div className="p-5 pt-2 leading-6">
              <div className="text-[1.2rem]">Kshitija Whaval</div>
              <div className="text-[1.2rem] text-[#797676]">Founder</div>
            </div>
          </div>
          <div className="lg:h-1/2 text-base lg:text-[1.8rem] pt-2 lg:pt-5">
            Hello, My name is Kshitija Whaval and this is my filler content
            about marketing and things about me.
          </div>
          <div className="mt-4 lg:mt-0 lg:h-1/4 flex flex-col lg:flex-row text-[1rem] lg:text-[1.25rem] justify-between items-start md:items-center">
            <div className="text-[#032a39] mb-4 lg:mb-0">
              AKA Branding Specialist
            </div>
            <button className="bg-black text-white py-2 px-4 lg:py-4 lg:px-6 rounded-full flex flex-row items-center">
              <div>Connect</div>
              <img
                className="h-4 w-4 lg:h-5 lg:w-5 ml-2"
                src="/linkedin.png"
                alt="LinkedIn"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flip">
        <div className="front">
          <img
            src="/images/cover1.jpg"
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="back flex flex-col lg:flex-row text-black font-[questrial] p-4 lg:p-10">
          <div className="flex flex-row items-start lg:items-center mb-4 lg:mb-0">
            <div className="h-16 w-16 rounded-full overflow-hidden">
              <img src="/images/cover1.jpg" alt="Profile" />
            </div>
            <div className="p-5 pt-2 leading-6">
              <div className="text-[1.2rem]">Richank Shah</div>
              <div className="text-[1.2rem] text-[#797676]">Co-Founder</div>
            </div>
          </div>
          <div className="lg:h-1/2 text-base lg:text-[1.8rem] pt-2 lg:pt-5">
            Hello, My name is Richank Shah and this is my filler content about
            marketing and things about me.
          </div>
          <div className="mt-4 lg:mt-0 lg:h-1/4 flex flex-col lg:flex-row text-[1rem] lg:text-[1.25rem] justify-between items-start md:items-center">
            <div className="text-[#032a39] mb-4 lg:mb-0">
              AKA Marketing Specialist
            </div>
            <button className="bg-black text-white py-2 px-4 lg:py-4 lg:px-6 rounded-full flex flex-row items-center">
              <div>Connect</div>
              <img
                className="h-4 w-4 lg:h-5 lg:w-5 ml-2"
                src="/linkedin.png"
                alt="LinkedIn"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flipp;
