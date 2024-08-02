import React from "react";
import SvgLine from "../../components/SvgLine/svgLine";

const Fillar = () => {
  return (
    <div>
      <div className="h-[120vh] md:h-[120vh] w-full bg-white overflow-hidden">
        <div className="h-[65%] w-full flex flex-col md:flex-row items-center">
          <div className="order-2 md:order-1 w-full lg:w-[70%] text-[4rem] md:text-[5rem] lg:text-[10rem] font-questrial mt-[2rem] lg:mt-[8rem] ml-[2rem] lg:ml-[5rem] items-center">
            <div>CREATIVE</div>
            <div>DESIGN</div>
          </div>
          <div className="order-1 md:order-2 w-full lg:w-[30%] h-full mt-[2rem] lg:mt-[6rem] lg:pt-[0rem] lg:mr-[8rem] flex items-center justify-center">
            <div className="bg-slate-600 h-[18rem] md:h-[14rem] lg:h-[18rem] w-[18rem] md:w-[14rem] lg:w-[30rem] rounded-full overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src="/filler.mp4"
                autoPlay
                playsInline
                loop
                muted
              ></video>
            </div>
          </div>
        </div>

        <div className="">
          <SvgLine />
        </div>
        <div className="h-[30%] flex flex-col md:flex-row font-[questrial] ml-[1.25rem] lg:ml-[8rem] px-4 lg:px-0 pt-[3rem] md:pt-0">
          <div className="w-full lg:w-[30%] flex justify-start lg:justify-start mb-4 lg:mb-0">
            <img src="/logol.png" className="h-8 w-8" alt="Logo" />
          </div>
          <div className="w-full lg:w-[10%] text-[1.25rem] lg:text-[1.25rem] pt-1 text-start  lg:text-left">
            Creative Design
          </div>
          <div className="w-full lg:w-[50%] text-[1.25rem] lg:text-[1.75rem] tracking-wide px-1 pt-4 md:pt-0 lg:px-5 text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magni
            incidunt illo? Modi officia nobis repudiandae neque eius dolorum
            quisquam.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fillar;
