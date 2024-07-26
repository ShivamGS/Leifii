import React from "react";

const Showcase = () => {
  return (
    <div className="h-[300vh] bg-black font-[questrial] px-10">
      <div className="text-white text-[4rem] pt-5 pb-1">Featured</div>
      <div className="text-white text-[4rem]  flex flex-row items-center">
        <div className="h-[4rem] w-[7rem] rounded-full bg-slate-600 overflow-hidden">
          <video
            className=""
            src="websitesHeader.mp4"
            autoPlay
            playsInline
            loop
            muted
          ></video>
        </div>
        <span className="italic px-2">projects</span>
      </div>

      <div>
        <div className="bg-slate-600 h-[70vh] w-full mt-10 rounded-2xl"></div>
        <div className="text-white text-[1.7rem] mt-[2rem] mb-[4rem]">
          Project 1
        </div>
      </div>

      <div>
        <div className="bg-slate-600 h-[70vh] w-full mt-10 rounded-2xl"></div>
        <div className="text-white text-[1.7rem] mt-[2rem] mb-[4rem]">
          Project 2
        </div>
      </div>

      <div>
        <div className="bg-slate-600 h-[70vh] w-full mt-10 rounded-2xl"></div>
        <div className="text-white text-[1.7rem] mt-[2rem] mb-[4rem]">
          Project 3
        </div>
      </div>
    </div>
  );
};

export default Showcase;
