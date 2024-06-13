import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="text-black h-[400px] w-full flex flex-col mt-[250px]">
      <div className="mr-10 ml-10 mb-0 mt-3 h-[30%] flex flex-row">
        <div className="w-[70%]">
          <div className="flex flex-row">
            <motion.h1
              initial={{ x: -20 }}
              animate={{ x: 10 }}
              transition={{
                type: "spring",
                stiffness: 100,
                repeat: Infinity,
                repeatType: "mirror",
                repeatDelay: 0.1,
              }}
              className="text-[80px] font-extralight py-3 mb-5"
            >
              Only Creativity
            </motion.h1>

            <motion.div
              className="ml-[30px] mt-[10px] w-[150px] h-[80px] rounded-full overflow-hidden rounded-tr-[0] rounded-bl-[0]"
              initial={{ x: 200 }}
              animate={{ x: 10 }}
              transition={{
                type: "spring",
                stiffness: 100,
                repeat: Infinity,
                repeatType: "mirror",
                repeatDelay: 0.1,
              }}
            >
              <video
                className="text-xl"
                src="websitesHeader.mp4"
                autoPlay
                playsInline
                loop
                muted
              ></video>
            </motion.div>
          </div>
          <motion.h1
            initial={{ x: 400 }}
            animate={{ x: 10 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="font-medium mb-0 text-[80px] pb-0"
          >
            Makes the eyes{" "}
            <motion.span
              // initial={{ scale: 1, rotateY: 0 }}
              // animate={{ scale: 1.2, rotateY: 90 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="inline-block pl-4" // Ensure it's inline-block to see the scaling effect properly
            >
              grow
            </motion.span>
          </motion.h1>
        </div>
      </div>
      {/* <div className="m-10 h-[70%] flex flex-col">
        <div className="uphalf h-[50%] flex flex-row">
          <div className="lefthalf w-[70%] bg-slate-400 rounded-br-full"></div>
          <div className="righthalf w-[30%]"></div>
        </div>
        <div className="uphalf h-[50%] flex flex-row">
          <div className="lefthalf w-[70%] bg-slate-400 rounded-tr-full rounded-bl-full"></div>
          <div className="righthalf w-[30%]"></div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
