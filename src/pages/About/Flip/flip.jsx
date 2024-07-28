import React from "react";
import "./flip.scss";

const Flipp = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="flip">
        <div className="front">
          <div className="absolute text-[2rem] top-[2rem] left-[2rem] text-shadow">
            Richank
          </div>
          <img src="/images/cover1.jpg" alt="Cover" />
        </div>
        <div className="back flex flex-row  text-black font-[questrial] p-10">
          <div className="h-1/4 flex flex-row">
            <div className="h-16 w-16 rounded-full overflow-hidden">
              {" "}
              <img src="/images/cover1.jpg"></img>
            </div>
            <div className="p-5 pt-2 items-center leading-6 ">
              {" "}
              <div className="text-[1.2rem]">Kshitija Whaval</div>
              <div className="text-[1.2rem] text-[#797676]">Founder</div>
            </div>
          </div>

          <div className="h-1/2 text-[1.8rem] pt-5">
            Hello, My name is Kshitija Whaval and this is my filler content
            about marketing and things about me
          </div>
          <div className="h-1/4 flex flex-row text-[1.25rem] justify-between items-center">
            <div className="text-[#032a39]">AKA Branding Specialist</div>
            <div>
              <button className="bg-black text-white p-4 px-6 rounded-full flex flex-row items-center">
                <div>Connect</div>{" "}
                <img className="h-5 w-5 ml-2" src="/linkedin.png"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flip">
        <div className="front">
          <img src="/images/cover1.jpg" alt="Cover" />
        </div>
        <div className="back flex flex-row  text-black font-[questrial] p-10">
          <div className="h-1/4 flex flex-row">
            <div className="h-16 w-16 rounded-full overflow-hidden">
              {" "}
              <img src="/images/cover1.jpg"></img>
            </div>
            <div className="p-5 pt-2 items-center leading-6 ">
              {" "}
              <div className="text-[1.2rem]">Richank Shah</div>
              <div className="text-[1.2rem] text-[#797676]">Co-Founder</div>
            </div>
          </div>

          <div className="h-1/2 text-[1.8rem] pt-5">
            Hello, My name is richank shah and this is my filler content about
            marketing and things about me
          </div>
          <div className="h-1/4 flex flex-row text-[1.25rem] justify-between items-center">
            <div className="text-[#032a39]">AKA Marketing Specialist</div>
            <div>
              <button className="bg-black text-white p-4 px-6 rounded-full flex flex-row items-center">
                <div>Connect</div>{" "}
                <img className="h-5 w-5 ml-2" src="/linkedin.png"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flipp;
