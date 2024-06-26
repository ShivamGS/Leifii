import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Video = () => {
  const { scrollY } = useViewportScroll();
  // Change 0 to the starting scroll position and 1000 to the end scroll position as needed
  const scale = useTransform(scrollY, [0, 1000], [0.8, 1.2]);

  return (
    <motion.div className="main h-[650px] w-full absolute transform-gpu overflow-hidden">
      <motion.video
        className="video_section h-[650px] w-[95%] object-cover border rounded-3xl"
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
