import {
  useState,
  useContext,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
import { Container } from "../../components/Container/index.tsx";
import { TransitionLink } from "../../components/Links/TransitionLink/index.tsx";
import { Button } from "..//../components/MagneticButton/Button.tsx";
import { CursorContext } from "../../lib/context/cursorContext.tsx";
import { gsap } from "gsap";
import ScrollMagic from "scrollmagic";
import "./footer.scss";
import React from "react";
import { AnimatedPinDemo } from "../../components/ui/AnimatedPinDemo.tsx";

export const Footer = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const { cursor } = useContext(CursorContext);
  const footerRef = useRef(null),
    footerContentRef = useRef(null);
  const [triggerPoints, setTriggerPoints] = useState("top top");
  const links = [
    "Linkedin",
    "Behance",
    "Dribble",
    "Instagram",
    "Youtube",
    "Twitter",
  ];

  useLayoutEffect(() => {
    console.log(ScrollMagic);
    const controller = new ScrollMagic.Controller();
    updateEndTrigger();

    const tl = gsap.timeline();
    tl.fromTo(
      footerContentRef.current,
      { yPercent: -70, lazy: false },
      {
        yPercent: 0,
        duration: 1.3,
        ease: "Power0.in",
        lazy: false,
        // scrollTrigger: {
        //     trigger: footerRef.current,
        //     start: "top bottom",
        //     end: "top top",
        //     scrub: true,
        //     markers: true,
        //     onEnter: () => {
        //         console.log("Entered footer")
        //     }
        // }
      }
    );
    tl.pause();

    new ScrollMagic.Scene({
      triggerElement: footerRef.current,
      triggerHook: 0.9,
      duration: "100%",
      reverse: true,
    })
      .addTo(controller)
      .on("enter", function (e) {
        console.log("Entering the footer");
        tl.play();
      })
      .on("leave", function (e) {
        tl.reverse();
      });

    window.addEventListener("resize", function () {
      // updateEndTrigger()
    });

    return () => {
      tl?.scrollTrigger?.kill();
    };
  }, []);

  function updateEndTrigger() {
    if (window.matchMedia("(min-width: 768px)").matches) {
      console.log("Above 768px");
      setTriggerPoints("top top");
    } else {
      console.log("Below 768px");
      setTriggerPoints("top 30%");
    }
  }

  function handleCursorInvert(isInverted: boolean) {
    if (isInverted) {
      cursor.current.addState("-inverse");
    } else {
      cursor.current.removeState("-inverse");
    }
  }

  function handleCursorScale(isScaled: boolean) {
    if (isScaled) {
      cursor.current.addState("-mf-cursor-md -exclusion");
    } else {
      cursor.current.removeState("-mf-cursor-md -exclusion");
    }
  }

  return (
    <footer
      className="footer"
      onMouseEnter={() => handleCursorInvert(true)}
      onMouseLeave={() => handleCursorInvert(false)}
      ref={footerRef}
    >
      <div className="ml-[5rem] pt-[2rem] mt-[2rem] bg-black h-screen w-[90%] flex flex-col">
        <div className="h-[20%] flex flex-row justify-between px-[5rem] ">
          <div>&copy; 2024 LEIFII MEDIA LLP</div>
          <div>
            <a href="#" className="flex items-center justify-center">
              <span className="mr-2">BACK TO TOP</span>
              <div className="w-8 h-8 flex items-center justify-center bg-black rounded-full text-white">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  ></path>
                </svg>
              </div>
            </a>{" "}
          </div>
        </div>
        <div className="h-[60%] flex flex-row pl-[5rem] ">
          <div className="w-2/3 text-left pt-[5rem]">
            <div className="text-[1.5rem] text-white font-medium">
              HAVE A PROJECT IN MIND?
            </div>
            <div className="text-white/[0.60] text-[8rem] font-medium hover:text-white hover:text-opacity-100">
              LET'S TALK
            </div>
          </div>
          <div className="w-1/3 pr-[3rem]">
            {" "}
            <AnimatedPinDemo />
          </div>
        </div>
        <div className="h-[20%] flex flex-row justify-between px-[5rem] mt-[5rem]">
          <div className="flex flex-row gap-10">
            <div className="h-[4rem] w-[11rem] flex justify-center items-center text-white border-[1.5px] border-white rounded-full hover:text-black hover:bg-white hover:border-black">
              BEHANCE
            </div>
            <div className="h-[4rem] w-[11rem] flex justify-center items-center text-white border-[1.5px] border-white rounded-full hover:text-black hover:bg-white hover:border-black">
              INSTAGRAM
            </div>
            <div className="h-[4rem] w-[11rem] flex justify-center items-center text-white border-[1.5px] border-white rounded-full hover:text-black hover:bg-white hover:border-black">
              FACEBOOK
            </div>
          </div>
          <div className="flex flex-row text-[1rem] gap-10 justify-end items-center pb-2">
            <div>ABOUT US</div>
            <div>SERVICES</div>
            <div>CAREERS</div>
            <div>CONTACT US</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

{
  /* <Container direction="column" fullwidth>
        <div className="footer-content" ref={footerContentRef}>
          <div className="footer-content__top">
            <div className="footer-content__cta m-20">
              <h2>Have an idea?</h2>
              <Button text="Tell us more" type="link" darkmode />
            </div>
            <div>
              <AnimatedPinDemo />
            </div>
          </div>

          <div className="footer-content__bottom">
            <div className="footer-content__bottom-left">
              <Button
                text="leifidesignconsultancy@gmail.com"
                type="link"
                darkmode
              />
              <address>
                Shop no. 5, Mangalmurti Apartment, Pune - Satara Rd,
                <br /> Chhatrapati Sambhaji Nagar, Dhankawadi, Pune, Maharashtra
                411043
              </address>
              <TransitionLink link="Privacy policy" size="sm" />
            </div>
            <div className="footer-content__bottom-right">
              <div
                className="footer-content__bottom-links"
                onMouseEnter={() => handleCursorScale(true)}
                onMouseLeave={() => handleCursorScale(false)}
              >
                {links.map((link) => (
                  <TransitionLink link={link} size="md" darkmode />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container> */
}
