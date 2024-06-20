import React, { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Navbar } from "../../components/Nav/Navbar/index.tsx";
import "./about.css";
import cubes from "./cubes.json";
import leaves from "./leaves.json";
import uiux from "./uiux.json";
import designSprint from "./designSprint.json";
import scroll from "./scroll.json";
import PageLoader from "../../components/PageLoader/pageLoader.jsx";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-200px" });

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Transform properties for the first figure (top-left)
  const top = useTransform(scrollYProgress, [0, 0.1], ["-50%", "34.8%"]);
  const left = useTransform(scrollYProgress, [0, 0.1], ["-50%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.5, 5]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Transform properties for the second figure (top-right)
  const top2 = useTransform(scrollYProgress, [0.1, 0.2], ["-50%", "34.8%"]);
  const left2 = useTransform(scrollYProgress, [0.1, 0.2], ["150%", "35.85%"]);
  const scale2 = useTransform(scrollYProgress, [0.1, 0.2], [0.5, 5]);
  const opacity2 = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

  // Transform properties for the third figure (bottom-left)
  const top3 = useTransform(scrollYProgress, [0.2, 0.3], ["150%", "55.05%"]);
  const left3 = useTransform(scrollYProgress, [0.2, 0.3], ["-50%", "29.35%"]);
  const scale3 = useTransform(scrollYProgress, [0.2, 0.3], [0.5, 5]);
  const opacity3 = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

  // State to handle text appearance
  const [content, setContent] = useState({ title: "", description: "" });

  // Opacity transform for fading out blocks and text
  const fadeOutOpacity = useTransform(scrollYProgress, [0.4, 0.5], [1, 0]);

  // Update text when scroll reaches a certain point
  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      if (v > 0.3) {
        setContent({
          title: "Building Block 3: Our Future Vision",
          description: "A description about our vision for the future.",
        });
      } else if (v > 0.2) {
        setContent({
          title: "Building Block 2: Our Collaboration ",
          description: "A description about our collaboration and commitment.",
        });
      } else if (v > 0.1) {
        setContent({
          title: "Building Block 1: Our Expertise",
          description: "A description about our expertise and innovation.",
        });
      } else if (v > 0) {
        setContent({
          title: "This is showcase of our logo",
          description: "A description about our vision and mission.",
        });
      } else {
        setContent({ title: "", description: "" });
      }
    });
  }, [scrollYProgress]);

  return (
    <div>
      <PageLoader />
      <Navbar />
      <div className="h-[150px] "></div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="h-screen flex flex-col items-center pt-[10rem]"
      >
        <div className="text-[2rem] font-[questrial] mb-5">Scroll Down</div>
        <div style={{ width: "100px", height: "80px" }}>
          <Lottie
            animationData={scroll}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </motion.div>

      <motion.div
        ref={targetRef}
        style={{ top, left, scale, opacity: fadeOutOpacity }}
        className="fixed w-8 h-8 rounded-br-full gradient-bg-1"
      />

      <motion.div
        style={{
          top: top2,
          left: left2,
          scale: scale2,
          opacity: fadeOutOpacity,
        }}
        className="fixed bg-blue-900 w-8 h-8 rounded-br-full gradient-bg-2"
      />

      <motion.div
        style={{
          top: top3,
          left: left3,
          scale: scale3,
          opacity: fadeOutOpacity,
        }}
        className="fixed bg-green-600 w-16 h-8 rounded-bl-full rounded-tr-full gradient-bg-3 "
      />

      {content.title && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          style={{ opacity: fadeOutOpacity }}
          className="fixed top-[40%] right-[10%] transform -translate-y-1/2 p-4 rounded"
        >
          <div className="text-black py-10 ml-10">
            <h2 className="text-3xl font-bold">{content.title}</h2>
            <p className="text-lg">{content.description}</p>
          </div>
        </motion.div>
      )}
      <div className="h-screen"></div>
      <div className="h-screen"></div>

      <div className="text-[3rem] font-[questrial] text-center">
        Pillars at Leifii
        <div
          style={{
            width: "50px",
            height: "2px",
            backgroundColor: "#000",
            margin: "auto",
            marginTop: "10px",
          }}
        ></div>
      </div>

      <div className="pillars h-[30rem] bg-[#fff] grid grid-cols-4 gap-x-8 items-end">
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
    </div>
  );
};

export default About;

{
  /* <div className="h-[30rem] bg-[#edeaed] grid grid-cols-4 gap-x-8 items-end">
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
      </div> */
}
