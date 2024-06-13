import React from "react";
import Lottie from "lottie-react";
import design2 from "./design2.json";
import strategy from "./strategy.json";
import marketing from "./marketing.json";
import love from "./love.json";

const Element = () => {
  return (
    <div className="h-[57rem] bg-[#fff] flex flex-col">
      <div className="text-container flex flex-row items-center pb-10 pt-[4rem]">
        <p className="text-[4rem] w-1/2 pl-12 mt-10">
          Designing your
          <br /> leaves with
        </p>
        <div className="flex flex-col w-1/2 mt-[5rem]">
          <p className="text-xl">
            We can help you grow those leaves to reach all the right people, and
            make sure they understand what sets you apart from the competition
          </p>
          <div>
            <button className="bg-black text-white rounded-full py-4 px-8 mt-10 font-[Questrial] text-[1rem]">
              Explore Services 👀
            </button>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-4 gap-x-8 mt-auto mb-20">
        <div className="h-auto w-full border border-[hsla(0,0%,7%,.2)] border-l-2 border-y-0 border-r-0 pl-[1.6rem] flex flex-col">
          <div className="text-[hsla(0,0%,7%,.7)]">001</div>
          <div className="flex items-start py-5 pr-10">
            <Lottie
              animationData={design2}
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <div className="text-[1.5rem]">Design </div>
          <div className="text-[hsla(0,0%,7%,.7)]">
            The clue is in the name: we realise your visual concept at pace.
          </div>
        </div>
        <div className="h-auto w-full border border-[hsla(0,0%,7%,.2)] border-l-2 border-y-0 border-r-0 pl-[1.6rem] flex flex-col">
          <div className="text-[hsla(0,0%,7%,.7)]">002</div>
          <div className="flex items-start py-5 pr-10">
            <Lottie
              animationData={marketing}
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <div className="text-[1.5rem]">Marketing </div>
          <div className="text-[hsla(0,0%,7%,.7)]">
            We solve problems with strategic design. Lorem ipsum, dolor sit amet
            consectetu
          </div>
        </div>
        <div className="h-auto w-full border border-[hsla(0,0%,7%,.2)] border-l-2 border-y-0 border-r-0 pl-[1.6rem] flex flex-col">
          <div className="text-[hsla(0,0%,7%,.7)]">003</div>
          <div className="flex items-start py-5 pr-10">
            <Lottie
              animationData={strategy}
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <div className="text-[1.5rem]">Strategy</div>
          <div className="text-[hsla(0,0%,7%,.7)]">
            We tactically expand your brand into the digital world.
          </div>
        </div>
        <div className="h-auto w-full border border-[hsla(0,0%,7%,.2)] border-l-2 border-y-0 border-r-0 pl-[1.6rem] flex flex-col">
          <div className="text-[hsla(0,0%,7%,.7)]">004</div>
          <div className="flex items-start py-5 pr-10">
            <Lottie
              animationData={love}
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <div className="text-[1.5rem]">Love</div>
          <div className="text-[hsla(0,0%,7%,.7)]">
            We facilitate workshops that fast track discovery of your brand’s
            identity
          </div>
        </div>
      </div>
    </div>
  );
};

export default Element;
