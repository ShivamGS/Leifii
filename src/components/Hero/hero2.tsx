import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import down from "./downarrow.json";
import Lottie from "lottie-react";

const Hero2 = () => {
  const { scrollY } = useViewportScroll();
  const scale = useTransform(scrollY, [10, 100], [0.1, 5]);
  const x = useTransform(scrollY, [60, 300], ["100%", "-100%"]);

  return (
    <div className="flex items-center justify-center h-[165vh] bg-white overflow-hidden">
      <div className="text-black absolute top-[17rem] font-[questrial] text-[1.6rem] md:text-[3rem] lg:text-[5rem] mx-[1rem] lg:mx-0 tracking-widest">
        THIS IS YOUR BUSINESS
      </div>
      <div className="absolute top-[20rem] left-[10rem] lg:top-[25rem] lg:left-[42rem]">
        <Lottie animationData={down} className="h-[8rem] lg:h-[15rem] w-20" />
      </div>

      <motion.div
        className="dot bg-black h-[30rem] w-[30rem] rounded-full"
        style={{ scale }}
      />
      <motion.div
        className="textClass absolute text-white text-[10rem] top-[25rem] flex space-x-[2rem] list-none"
        style={{ x }}
      >
        <li>THIS</li>
        <li>IS</li>
        <li>HOW</li>
        <li>WE</li>
        <li>CAN</li>
        <li>GROW.</li>
      </motion.div>
    </div>
  );
};

export default Hero2;

// import React from "react";
// import { motion, useTransform, useViewportScroll } from "framer-motion";
// import down from "./downarrow.json";
// import Lottie from "lottie-react";

// const Hero2 = () => {
//   const { scrollY } = useViewportScroll();

//   // The circle scales up from 1 to 100 as you scroll from 0 to 300, and stays at scale 100 after 300.
//   const scale = useTransform(scrollY, [0, 350, 1200], [5, 100, 100]);

//   // The text opacity fades in from 0 to 1 as you scroll from 100 to 300.
//   const opacity = useTransform(scrollY, [0, 200, 400], [0, 0, 1]);

//   // The x transform controls the horizontal scrolling of the image list items.
//   const xImages = useTransform(scrollY, [200, 800], [0, -55]);

//   // The x transform for the "Who We Are" text list.
//   const xWhoWeAre = useTransform(scrollY, [200, 900], [0, -38]); // Different properties

//   // The y transform controls the vertical position of the circle.
//   // The circle stays fixed from scroll position 300 to 800.
//   const y = useTransform(scrollY, [0, 50, 300, 1200], [0, -150, 0, 750]);

//   return (
//     <div className="flex items-center justify-center h-[165vh] bg-white overflow-hidden">
//       <div className="text-black absolute top-[17rem] font-[questrial] text-[1.6rem] md:text-[3rem] lg:text-[5rem] mx-[1rem] lg:mx-0 tracking-widest">
//         THIS IS YOUR BUSINESS
//       </div>
//       <div className="absolute top-[20rem] left-[10rem] lg:top-[25rem] lg:left-[42rem]">
//         <Lottie animationData={down} className="h-[8rem] lg:h-[15rem] w-20" />
//       </div>

//       <motion.div
//         className="bg-black rounded-full flex items-center justify-center relative"
//         style={{
//           scale,
//           y,
//           width: "20px",
//           height: "20px",
//         }}
//       >
//         <motion.div
//           className="absolute text-white top-[0.55rem] flex space-x-2 text-[1.25px] lg:text-[2px]"
//           style={{ x: xWhoWeAre, opacity }}
//         >
//           <div className="flex w-[32px] h-[8px] ml-8 space-x-[1.6px] list-none">
//             <li>THIS</li>
//             <li>IS</li>
//             <li>HOW</li>
//             <li>WE</li>
//             <li>CAN</li>
//             <li>GROW.</li>
//           </div>
//         </motion.div>
//         <motion.div
//           className="absolute text-white top-[5.6px] lg:top-[6.4px] flex space-x-4"
//           style={{ x: xImages, opacity }}
//         >
//           <div className="flex w-[64px] h-[8px] ml-8 space-x-1 list-none">
//             <li>
//               <motion.img
//                 src="/photography/1c.png"
//                 alt="Image 1"
//                 className="w-[0px] h-[0px] mt-1"
//                 initial={{ filter: "grayscale(100%)" }}
//                 whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
//                 transition={{ duration: 0.2 }}
//               />
//             </li>
//             <li>
//               <motion.img
//                 src="/photography/1c.png"
//                 alt="Image 1"
//                 className="w-[0px] h-[0px] mt-1"
//                 initial={{ filter: "grayscale(100%)" }}
//                 whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
//                 transition={{ duration: 0.2 }}
//               />
//             </li>
//             <li>
//               <motion.img
//                 src="/photography/1c.png"
//                 alt="Image 1"
//                 className="w-[0px] h-[0px] mt-1"
//                 initial={{ filter: "grayscale(100%)" }}
//                 whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
//                 transition={{ duration: 0.2 }}
//               />
//             </li>
//             <li>
//               <motion.img
//                 src="/photography/2c.png"
//                 alt="Image 2"
//                 className="w-[2.4px] h-[2.4px] mb-1"
//                 initial={{ filter: "grayscale(100%)" }}
//                 whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
//                 transition={{ duration: 0.2 }}
//               />
//             </li>
//             <li>
//               <motion.img
//                 src="/photography/3c.png"
//                 alt="Image 3"
//                 className="w-[2.4px] h-[2.4px] mt-1"
//                 initial={{ filter: "grayscale(100%)" }}
//                 whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
//                 transition={{ duration: 0.2 }}
//               />
//             </li>
//             <li>
//               <motion.img
//                 src="/photography/4c.png"
//                 alt="Image 4"
//                 className="w-[2.4px] h-[2.4px] mb-1"
//                 initial={{ filter: "grayscale(100%)" }}
//                 whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
//                 transition={{ duration: 0.2 }}
//               />
//             </li>
//             <li>
//               <motion.img
//                 src="/photography/5c.png"
//                 alt="Image 5"
//                 className="w-[2.4px] h-[2.4px] mt-1"
//                 initial={{ filter: "grayscale(100%)" }}
//                 whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
//                 transition={{ duration: 0.2 }}
//               />
//             </li>
//             <li>
//               <motion.img
//                 src="/photography/6c.png"
//                 alt="Image 6"
//                 className="w-[2.4px] h-[2.4px] mb-1"
//                 initial={{ filter: "grayscale(100%)" }}
//                 whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
//                 transition={{ duration: 0.2 }}
//               />
//             </li>
//             <li>
//               <motion.img
//                 src="/photography/1c.png"
//                 alt="Image 7"
//                 className="w-[2.4px] h-[2.4px] mt-1"
//                 initial={{ filter: "grayscale(100%)" }}
//                 whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
//                 transition={{ duration: 0.2 }}
//               />
//             </li>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Hero2;

// import React from "react";
// import { motion, useTransform, useViewportScroll } from "framer-motion";
// import down from "./downarrow.json";
// import Lottie from "lottie-react";

// const Hero2 = () => {
//   const { scrollY } = useViewportScroll();

//   // The circle scales up from 1 to 100 as you scroll from 0 to 300, and stays at scale 100 after 300.
//   const scale = useTransform(scrollY, [0, 350, 1200], [0, 1, 1]);

//   // The text opacity fades in from 0 to 1 as you scroll from 100 to 300.
//   const opacity = useTransform(scrollY, [0, 200, 400], [0, 0, 1]);

//   // The x transform controls the horizontal scrolling of the image list items.
//   const xImages = useTransform(scrollY, [200, 800], [0, -55]);

//   // The x transform for the "Who We Are" text list.
//   const xWhoWeAre = useTransform(scrollY, [200, 900], [0, -1000]); // Different properties

//   // The y transform controls the vertical position of the circle.
//   // The circle stays fixed from scroll position 300 to 800.
//   const y = useTransform(scrollY, [0, 50, 300, 1200], [0, -150, 0, 750]);

//   return (
//     <div className="flex items-center justify-center h-[165vh] bg-white overflow-hidden">
//       <div className="text-black absolute top-[17rem] font-[questrial] text-[1.6rem] md:text-[3rem] lg:text-[5rem] mx-[1rem] lg:mx-0 tracking-widest">
//         THIS IS YOUR BUSINESS
//       </div>
//       <div className="absolute top-[20rem] left-[10rem] lg:top-[25rem] lg:left-[42rem]">
//         <Lottie animationData={down} className="h-[8rem] lg:h-[15rem] w-20" />
//       </div>

//       <motion.div
//         className="bg-black rounded-full flex items-center justify-center relative"
//         style={{
//           scale,
//           y,
//           width: "1000px",
//           height: "1000px",
//         }}
//       >
//         <motion.div
//           className="absolute text-white top-[0.55rem] flex space-x-2 text-[1.25px] lg:text-[250px]"
//           style={{ x: xWhoWeAre, opacity }}
//         >
//           <div className="flex w-[32px] h-[100px] ml-8 space-x-[1.6px] list-none">
//             <li>THIS</li>
//             <li>IS</li>
//             <li>HOW</li>
//             <li>WE</li>
//             <li>CAN</li>
//             <li>GROW.</li>
//           </div>
//         </motion.div>
//         <motion.div
//           className="absolute text-white top-[5.6px] lg:top-[6.4px] flex space-x-4"
//           style={{ x: xImages, opacity }}
//         >
//           <div className="flex w-[64px] h-[8px] ml-8 space-x-1 list-none">
//             <li>
//               <motion.img
//                 src="/photography/1c.png"
//                 alt="Image 1"
//                 className="w-[0px] h-[0px] mt-1"
//                 initial={{ filter: "grayscale(100%)" }}
//                 whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
//                 transition={{ duration: 0.2 }}
//               />
//             </li>
//             <li>
//               <motion.img
//                 src="/photography/1c.png"
//                 alt="Image 1"
//                 className="w-[0px] h-[0px] mt-1"
//                 initial={{ filter: "grayscale(100%)" }}
//                 whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
//                 transition={{ duration: 0.2 }}
//               />
//             </li>
//             <li>
//               <motion.img
//                 src="/photography/1c.png"
//                 alt="Image 1"
//                 className="w-[0px] h-[0px] mt-1"
//                 initial={{ filter: "grayscale(100%)" }}
//                 whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
//                 transition={{ duration: 0.2 }}
//               />
//             </li>
//             <li>
//               <motion.img
//                 src="/photography/2c.png"
//                 alt="Image 2"
//                 className="w-[2.4px] h-[2.4px] mb-1"
//                 initial={{ filter: "grayscale(100%)" }}
//                 whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
//                 transition={{ duration: 0.2 }}
//               />
//             </li>
//             <li>
//               <motion.img
//                 src="/photography/3c.png"
//                 alt="Image 3"
//                 className="w-[2.4px] h-[2.4px] mt-1"
//                 initial={{ filter: "grayscale(100%)" }}
//                 whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
//                 transition={{ duration: 0.2 }}
//               />
//             </li>
//             <li>
//               <motion.img
//                 src="/photography/4c.png"
//                 alt="Image 4"
//                 className="w-[2.4px] h-[2.4px] mb-1"
//                 initial={{ filter: "grayscale(100%)" }}
//                 whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
//                 transition={{ duration: 0.2 }}
//               />
//             </li>
//             <li>
//               <motion.img
//                 src="/photography/5c.png"
//                 alt="Image 5"
//                 className="w-[2.4px] h-[2.4px] mt-1"
//                 initial={{ filter: "grayscale(100%)" }}
//                 whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
//                 transition={{ duration: 0.2 }}
//               />
//             </li>
//             <li>
//               <motion.img
//                 src="/photography/6c.png"
//                 alt="Image 6"
//                 className="w-[2.4px] h-[2.4px] mb-1"
//                 initial={{ filter: "grayscale(100%)" }}
//                 whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
//                 transition={{ duration: 0.2 }}
//               />
//             </li>
//             <li>
//               <motion.img
//                 src="/photography/1c.png"
//                 alt="Image 7"
//                 className="w-[2.4px] h-[2.4px] mt-1"
//                 initial={{ filter: "grayscale(100%)" }}
//                 whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
//                 transition={{ duration: 0.2 }}
//               />
//             </li>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Hero2;
