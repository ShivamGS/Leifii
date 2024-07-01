import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Trail = () => {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    gsap.to(img1Ref.current, {
      scrollTrigger: {
        trigger: img1Ref.current,
        start: "top 90%", // 10% scroll
        end: "top 80%", // 20% scroll
        scrub: true,
      },
      x: "-50vw", // Move to the left
      scale: 0.5,
    });

    gsap.to(img2Ref.current, {
      scrollTrigger: {
        trigger: img1Ref.current,
        start: "top 80%", // 20% scroll
        end: "top 70%", // 30% scroll
        scrub: true,
      },
      x: "50vw", // Move to the right
      scale: 0.5,
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          ref={img1Ref}
          src="/blog3.jpg"
          alt="Image 1"
          className="absolute w-1/2 h-auto"
        />
        <img
          ref={img2Ref}
          src="/blog4.jpg"
          alt="Image 2"
          className="absolute w-1/2 h-auto"
        />
      </div>
    </section>
  );
};

export default Trail;
