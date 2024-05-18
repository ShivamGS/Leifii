import React, { useRef } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import zeroTree from "./zeroTree.json"; // Make sure to provide the correct path
import "./intro.scss"; // Ensure this contains your custom styles

const Intro = () => {
  const constraintRef = useRef(null);

  return (
    <div className="h-[700px] flex flex-row justify-center items-center">
      <div className="w-[50%] flex justify-center">
        <div className="align-middle flex items-center justify-center p-[20px] rounded-3xl h-[35rem]">
          <Lottie
            animationData={zeroTree}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div className="w-[50%] flex flex-col justify-center items-start">
        {" "}
        {/* Adjusted from items-center to items-start */}
        <div className="info text-3xl font-[questrial] m-10 text-left">
          Leifii is a leading digital product agency focused on branding, UI/UX
          design, mobile, and web development.
        </div>
        <motion.div
          ref={constraintRef}
          className="my-20 mx-10 flex items-center justify-start rounded-3xl w-full pl-2"
        >
          <div className="button-container-3">
            <span className="mas text-[1.5rem] text-black p-7">Know More</span>
            <button type="button" name="Hover">
              Know More
            </button>
          </div>

          {/* <motion.button
            drag
            dragConstraints={constraintRef}
            dragElastic={0.2}
            dragSnapToOrigin={true}
            dragMomentum={true}
            className="border border-black rounded-full p-[3rem] text-3xl transition-all duration-400 hover:scale-105 hover:text-white hover:bg-black"
          >
            Know more
          </motion.button> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
