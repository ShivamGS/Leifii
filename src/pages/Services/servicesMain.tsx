import React, { useRef, useState } from "react";
import Services from "./services";
import { Navbar } from "../../components/Nav/Navbar/index.tsx";
import "./services.css";
import Banner from "../../components/Banner/banner.jsx";
import { AnimatePresence } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { Footer } from "../../sections/Footer/index.tsx";
import { Cursor } from "../../components/Cursor/index.tsx";
import CursorProvider from "../../lib/context/cursorContext.tsx";
import { TextRevealCardPreview } from "../../components/ui/TextRevealCardPreview.tsx";
import PageLoader from "../../components/PageLoader/pageLoader.jsx";
import Lottie from "lottie-react";
import arroww from "./arroww.json";
import emailjs from "emailjs-com";

const ServicesMain = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_yk2q59i",
        "template_oi5j2bj",
        formRef.current,
        "AFpSGmthR-AR8zsUF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitting(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="bodyy overflow-hidden">
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
        containerRef={containerRef}
      >
        <AnimatePresence>
          <PageLoader />
          <CursorProvider>
            <main
              className="App bg-white"
              data-scroll-container
              ref={containerRef}
            >
              <Navbar />
              <div className="h-[150px] "></div>
              <div className="text-[70px] p-[20px] bg-white text-black text-left font-[questrial] ml-10 pb-0 ">
                Our Services
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
                  <div className="relative w-[40%] bg-blue-600 rounded-3xl text-white text-2xl m-10 mt-0 pt-5  pl-10">
                    <div className="mb-3 text-justify text-slate-200">
                      Our Design
                    </div>

                    <div className="mb-3 text-[1rem] pr-20 text-left">
                      I hold that blending an artisan's method with creativity
                      empowers us to craft greatness and surpass limits in every
                      project.
                    </div>

                    <div className="flex items-center text-[1rem] text-justify mb-4">
                      <div className="flex-shrink-0 mr-4">
                        <img
                          src="/images/cover2.jpeg"
                          alt="Photo"
                          className="w-14 h-14 rounded-full"
                        />
                      </div>

                      <div>
                        <div className="">Kshitija Whaval</div>
                        <div className="text-slate-200">
                          Founder & Head Of Design
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Banner />

              <div className="relative h-[400px] bg-white font-[Questrial] p-10 pt-0 flex">
                <div className="flex-1 flex items-start justify-left mt-[6rem]">
                  <div className="text-[3rem] text-left font-bold leading-[4rem]">
                    Want Leifii updates sent straight to your mailbox?
                  </div>
                </div>

                <div className="flex-1 flex items-end justify-center pb-10">
                  <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="flex pl-[10rem]"
                  >
                    <input
                      type="email"
                      name="user_email"
                      placeholder="We saved a spot for your email"
                      className="text-xl p-2 w-[350px] border-b-2 border-black outline-none"
                      required
                    />
                    <button
                      type="submit"
                      className={`text-xl px-4 py-2 rounded-r-md transition-colors duration-300 ${
                        isSubmitting
                          ? "bg-green-500 text-white"
                          : "bg-black text-white"
                      }`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sent" : "Send"}
                    </button>
                  </form>
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none pt-[5rem]">
                  <Lottie
                    animationData={arroww}
                    style={{ width: "400px", height: "400px" }}
                  ></Lottie>
                </div>
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
