import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const Hero2 = () => {
  const { scrollY } = useViewportScroll();

  // The circle scales up from 1 to 100 as you scroll from 0 to 300, and stays at scale 100 after 300.
  const scale = useTransform(scrollY, [0, 300, 800], [10, 100, 100]);

  // The text opacity fades in from 0 to 1 as you scroll from 100 to 300.
  const opacity = useTransform(scrollY, [100, 300], [0, 1]);

  // The x transform controls the horizontal scrolling of the list items.
  const x = useTransform(scrollY, [250, 800], [0, -100]);

  // The y transform controls the vertical position of the circle.
  // The circle stays fixed from scroll position 300 to 800.
  const y = useTransform(scrollY, [0, 300, 800], [0, 0, 500]);

  return (
    <div className="flex items-center justify-center h-[150vh] bg-white overflow-hidden">
      <motion.div
        className="bg-black rounded-full flex items-center justify-center relative"
        style={{
          scale,
          y,
          width: "20px",
          height: "20px",
        }}
      >
        <motion.div
          className="text-white text-[0.15rem] text-center flex items-center justify-center h-full"
          style={{ opacity }}
        >
          Who We Are
        </motion.div>
        <motion.div
          className="absolute text-white top-[0.4rem] flex space-x-4 text-[0.05rem] " // Increased spacing
          style={{ x, opacity }}
        >
          <div className="flex w-[2rem] h-[0.5rem] ml-8 space-x-1">
            <li>
              <img
                src="/blog1.png"
                alt="Image 1"
                className="w-[0.25rem] h-[0.15rem] mt-1"
              />{" "}
              {/* Adjust dimensions as needed */}
            </li>
            <li>
              <img
                src="/blog3.jpg"
                alt="Image 1"
                className="w-[0.25rem] h-[0.15rem] mb-1"
              />{" "}
              {/* Adjust dimensions as needed */}
            </li>
            <li>
              <img
                src="/blog4.jpg"
                alt="Image 1"
                className="w-[0.25rem] h-[0.15rem] mt-1"
              />{" "}
              {/* Adjust dimensions as needed */}
            </li>
            <li>
              <img
                src="/blog5.jpg"
                alt="Image 1"
                className="w-[0.25rem] h-[0.15rem] mb-1"
              />{" "}
              {/* Adjust dimensions as needed */}
            </li>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero2;
