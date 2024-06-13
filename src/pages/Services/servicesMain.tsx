import React from "react";
import Services from "./services";
import { Navbar } from "../../components/Nav/Navbar/index.tsx";
import "./services.css";
import Banner from "../../components/Banner/banner.jsx";
import { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { Footer } from "../../sections/Footer/index.tsx";
import { Cursor } from "../../components/Cursor/index.tsx";
import CursorProvider from "../../lib/context/cursorContext.tsx";
import { TextRevealCardPreview } from "../../components/ui/TextRevealCardPreview.tsx";

const ServicesMain = () => {
  const containerRef = useRef(null);
  return (
    <div className="bodyy overflow-hidden ">
      {/* <Navbar /> */}
      {/* <div className="h-[120px] bg-blue-200"></div> */}
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <AnimatePresence>
          <CursorProvider>
            <main
              className="App bg-white"
              data-scroll-container
              ref={containerRef}
            >
              <Navbar />
              <div className="h-[150px] "></div>
              <div className="text-[70px] p-[20px] bg-white text-black text-left font-[questrial] ml-10 pb-0 ">
                {" "}
                Our Services{" "}
              </div>
              <div className="h-[1300px] bg-white flex flex-col p-10 pt-0 pl-0">
                <div className=" h-[300px] flex flex-row font-[questrial] justify-end">
                  <div className="w-[25%] p-10 mt-16 pl-12 ">
                    <span className="text-[60px]">123</span> Completed Projects
                  </div>
                  <div className="w-[25%] p-10 mt-16">
                    <span className="text-[60px]">25</span> Awards & Features
                  </div>
                  <div className="w-[50%] text-3xl text-justify p-20">
                    Choose Leifii Co for all your marketing needs. Proven
                    results, full services - strategy to deployment.
                  </div>
                </div>

                <div className="h-[800px] w-[1400px]  ml-10 mb-10">
                  <div className="w-[1400px]">
                    <TextRevealCardPreview />
                  </div>
                </div>

                <div className=" flex flex-row">
                  <div className="w-[50%] flex flex-col justify-start">
                    <div className="text-[60px] font-[questrial] text-justify pl-20">
                      Approach
                    </div>
                    <div className="text-[20px] text-justify p-20 font-[questrial]">
                      Explore Leifii Co's winning formula: Strategize. Design.
                      Marketing. Crafting digital success through analysis and
                      precision.
                    </div>
                  </div>
                  <div className="w-[40%] bg-blue-500 rounded-3xl text-white text-2xl m-10 mt-0 pt-10 text-justify pl-10 ">
                    Our Design
                  </div>
                </div>
              </div>
              <Banner />
              <div className="h-[400px] bg-white font-[Questrial] text-3xl p-10">
                {" "}
                Discuss the Project
              </div>
              <Footer />
              <Cursor />
            </main>
          </CursorProvider>
        </AnimatePresence>
      </LocomotiveScrollProvider>
      <Services />
    </div>
  );
};

export default ServicesMain;
