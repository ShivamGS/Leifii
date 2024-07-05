import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Video = () => {
  const { scrollY } = useViewportScroll();
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" }); // Tailwind's sm breakpoint

  const scale = useTransform(
    scrollY,
    [0, 1000],
    isMobile ? [0.9, 1.2] : [0.8, 1.2]
  );

  return (
    <motion.div className=" w-full absolute transform-gpu overflow-hidden mt-[10rem] md:mt-0">
      <motion.video
        className={`video_section ${
          isMobile ? "h-[300px]" : "h-[650px] sm:h-[500px] md:h-[650px]"
        } w-[100%] md:w-[95%] object-cover border rounded-3xl`}
        src="/newVid.mp4"
        playsInline
        autoPlay
        loop
        muted
        style={{ scale }} // Apply the scaling based on scroll
      ></motion.video>
    </motion.div>
  );
};

export default Video;
