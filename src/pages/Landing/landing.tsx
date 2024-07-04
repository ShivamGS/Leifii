import React, { useEffect, useState } from "react";
import { HeroParallaxDemo } from "../../components/ui/HeroParallaxDemo.tsx";
import Hero from "../../components/Hero/hero.tsx";
import CursorProvider from "../../lib/context/cursorContext.tsx";
import { Cursor } from "../../components/Cursor/index.tsx";
import { Navbar } from "../../components/Nav/Navbar/index.tsx";
import Video from "../../sections/Videoo/Video.tsx";
import { ThreeDCardDemo } from "../../components/ui/ThreeDCardDemo.tsx";
import Blog from "../../sections/Blog/blog.tsx";
import { Footer } from "../../sections/Footer/index.tsx";
import { InfiniteMovingCardsDemo } from "../../components/ui/InfiniteMovingCardsDemo.tsx";
import ImageSlider from "../../components/ImageSlider/imageSlider.jsx";
import Philosophy from "../../sections/Philosophy/philosophy.tsx";
import Intro from "../../sections/Intro/intro.tsx";

import Bulge from "../../components/Bulge/bulge.jsx";
import Preloader from "../../components/Preloader/preloader.jsx";
import { AnimatePresence } from "framer-motion";
import Testimonials from "../../components/Testimonials/testimonials.jsx";
import Parallax from "../../components/Parallax/parallax.jsx";
import Element from "../../components/Element/element.jsx";
import WhyUs from "../../components/WhyUs/whyUs.jsx";
import Cube from "../../components/Cube/cube.jsx";
import drag from "./dragWhite.json";
import Lottie from "lottie-react";
import FooterText from "../../sections/FooterText/footerText.jsx";
import BlogList from "../../sections/Blog/blogList.jsx";
import { TextRevealCardPreview } from "../../components/ui/TextRevealCardPreview.tsx";
import { HeroCardPreview } from "../../components/ui/HeroCardPreview.tsx";

const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <CursorProvider>
      <div>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Navbar />
        <div className="h-20  "></div>

        {/* <HeroCardPreview /> */}

        <Hero />
        <Video />
        <div className="h-screen"></div>
        <Intro />
        <Parallax />
        {/* <HeroParallaxDemo /> */}
        <Element />

        <div className="bg-black text-white pt-10">
          <div className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] p-4 sm:p-10 pb-0 flex justify-center font-[Questrial]">
            Why us?
          </div>

          <div className="flex flex-col sm:flex-row w-full h-screen sm:h-[85vh] justify-center pl-4 sm:pl-10">
            <div className="w-full sm:w-[75%] md:w-[60%] lg:w-[50%]">
              <Cube />
            </div>
          </div>

          <div className="flex justify-center pb-0 mb-0">
            <Lottie
              animationData={drag}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
            />
          </div>
        </div>
        <div>
          <Testimonials />
        </div>

        {/* <Philosophy /> */}
        {/* <div className="bg-white">
          <InfiniteMovingCardsDemo />
        </div> */}

        {/* <Blog /> */}
        <BlogList />

        <div className="h-[50vh] flex text-center items-center justify-center text-[5rem] bg-white text-black">
          {" "}
          Video Upcoming
        </div>

        {/* <Bulge /> */}

        {/* <div className="rounded-xl bg-slate-400  mt-10  ">
          <ImageSlider />
        </div> */}

        {/* <div className="h-screen"></div> */}

        {/* <FooterText /> */}
        <Footer />
        {/* <Cursor /> */}
      </div>
    </CursorProvider>
  );
};

export default Landing;
