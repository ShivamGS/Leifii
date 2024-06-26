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
      <Container direction="column" fullwidth>
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
      </Container>
    </footer>
  );
};
