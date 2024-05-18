import React, { useEffect, useState } from "react";
import { HeroParallaxDemo } from "../../components/ui/HeroParallaxDemo.tsx";
import FooterText from "../../sections/FooterText/FooterText.tsx";
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
import Cube from "../../components/Cube/cube.jsx";
import Bulge from "../../components/Bulge/bulge.jsx";
import Preloader from "../../components/Preloader/preloader.jsx";
import { AnimatePresence } from "framer-motion";
import Testimonials from "../../components/Testimonials/testimonials.jsx";
import Parallax from "../../components/Parallax/parallax.jsx";
import Element from "../../components/Element/element.jsx";

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
        <div className="h-20"></div>

        <Hero />
        <Video />
        <Intro />
        <Parallax />
        {/* <HeroParallaxDemo /> */}
        <Element />

        <div className=" bg-black ">
          <div className="text-white text-[45px] p-10 pb-0 flex justify-center font-[Questrial]">
            Projects
          </div>

          <div className="flex flex-row w-full h-screen justify-center pl-10">
            <div className="w-[50%]">
              <Cube />
            </div>
            {/* <div className="w-[50%]">
              <Cube />
            </div> */}
          </div>
          <div className="text-white text-[35px] flex justify-center pb-10 font-[Questrial]">
            Drag me
          </div>
        </div>

        {/* <Philosophy /> */}
        {/* <div className="bg-white">
          <InfiniteMovingCardsDemo />
        </div> */}

        <Blog />
        {/* <div>
          <Testimonials />
        </div> */}
        {/* <Bulge /> */}

        {/* <div className="rounded-xl bg-slate-400  mt-10  ">
          <ImageSlider />
        </div> */}

        {/* <div className="h-screen"></div> */}

        {/* <FooterText /> */}
        <Footer />
        <Cursor />
      </div>
    </CursorProvider>
  );
};

export default Landing;
