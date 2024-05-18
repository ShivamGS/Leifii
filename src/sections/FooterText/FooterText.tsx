import React from "react";
import "./FooterText.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FooterText = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animate);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => {
          direction = e.direction * -1;
          console.log(123);
        },
      },
      x: "-500px",
    });
  }, []);

  const animate = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animate);
  };
  return (
    <main className="main">
      <div className="bg-black w-full h-30"></div>
      {/* <img
        src="/blackbg.jpg"
        // fill={true}
        alt="background"
      /> */}
      <div className="sliderContainer">
        <div ref={slider} className="slider">
          <p ref={firstText}>Follow Us Follow Us </p>
          <p ref={secondText}>Follow Us Follow Us </p>
        </div>
      </div>
    </main>
  );
};

export default FooterText;
