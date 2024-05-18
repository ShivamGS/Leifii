import React, { useRef } from "react";
import cubes from "./cubes.json";
import leaves from "./leaves.json";
import uiux from "./uiux.json";
import designSprint from "./designSprint.json";


import Lottie from "lottie-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Navbar } from "../../components/Nav/Navbar/index.tsx";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-200px" });

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Transform properties for the motion.div element
  const top = useTransform(scrollYProgress, [0, 1], ["7.5%", "50%"]);
  const left = useTransform(scrollYProgress, [0, 1], ["4%", "20%"]);
  const translateX = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 8]);

  return (
    <div>
      <Navbar />
      <div className="h-[150px] "></div>
      <div className="h-[30rem] bg-[#edeaed] grid grid-cols-4 gap-x-8 items-end">
        <div className="h-[70%] w-full border border-[hsla(0,0%,7%,.2)] border-l-2 border-y-0 border-r-0 pl-[1.6rem] flex flex-col">
          <div className="text-[hsla(0,0%,7%,.7)]">001</div>
          <div className="h-[12rem] py-5 pr-10">
            <Lottie
              animationData={designSprint}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="text-[1.5rem]">Design Sprints</div>
          <div className="text-[hsla(0,0%,7%,.7)]">
            The clue is in the name: we realise your visual concept at pace.
          </div>
        </div>
        <div className="h-[70%] w-full border border-[hsla(0,0%,7%,.2)] border-l-2 border-y-0 border-r-0 pl-[1.6rem] flex flex-col">
          <div className="text-[hsla(0,0%,7%,.7)]">002</div>
          <div className="bg-transparent h-[12rem] py-5 pr-10">
            <Lottie
              animationData={uiux}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="text-[1.5rem]">UX and UI Design</div>
          <div className="text-[hsla(0,0%,7%,.7)]">
            We solve problems with strategic design.
          </div>
        </div>
        <div className="h-[70%] w-full border border-[hsla(0,0%,7%,.2)] border-l-2 border-y-0 border-r-0 pl-[1.6rem] flex flex-col">
          <div className="text-[hsla(0,0%,7%,.7)]">003</div>
          <div className="bg-transparent h-[12rem] py-5 pr-10">
            <Lottie
              animationData={leaves}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="text-[1.5rem]">Design Direction</div>
          <div className="text-[hsla(0,0%,7%,.7)]">
            We tactically expand your brand into the digital world.
          </div>
        </div>
        <div className="h-[70%] w-full border border-[hsla(0,0%,7%,.2)] border-l-2 border-y-0 border-r-0 pl-[1.6rem] flex flex-col">
          <div className="text-[hsla(0,0%,7%,.7)]">004</div>
          <div className="bg-transparent h-[12rem] py-5 pr-10">
            <Lottie
              animationData={cubes}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="text-[1.5rem]">Discovery Workshops</div>
          <div className="text-[hsla(0,0%,7%,.7)]">
            We facilitate workshops that fast track discovery of your brand’s
            identity
          </div>
        </div>
      </div>

      <div className="h-screen"></div>

      <motion.div
        ref={targetRef}
        style={{ top, left, translateX, translateY, scale }}
        className="fixed bg-blue-800 w-4 h-4 rounded-br-full"
      />

      <div className="h-screen"></div>
    </div>
  );
};

export default About;
