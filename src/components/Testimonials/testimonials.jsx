import React, { useState, useEffect, useCallback } from "react";
import "./testimonials.css"; // Stylesheet for Testimonials component

const Testimonials = () => {
  const [testimonies, setTestimonies] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  const colors = [
    "rgb(174, 224, 188)",
    "rgb(172, 222, 83)",
    "white",
    "rgb(255, 193, 206)",
    "rgb(85, 79, 249)",
    "rgb(252, 215, 209)",
    "rgb(174, 196, 237)",
  ]; // List of colors

  const testimonials = [
    {
      quote: "Increased Online Presence",
      name: "I am very much satisfied with how the team is handling the work. They all are painstaking and very dedicated, understands the requirements and keeps themselves on toes.",
      title: "Pooja - CEO of Pooja Khandelwal Designs",
    },
    {
      quote: "A Creative and Innovative Partner",
      name: "I really like their creativity and ideas. They have a unique way featuring festive posts. We really appreciate the team's quick response and dedication.",
      title: "Amit Firodiya From Alsan India",
    },
    {
      quote: "Leifii Co is the Digital Marketing Partner ",
      name: "You just give them a small brief and they are up with ideas that make your work look damn good. Within the span of just 15 days of interacting they already knew my preferences and could understand my points without even explaining.",
      title: "Rohan Hasabnis CEO of Asian Box",
    },
    {
      quote: "Effortless Expansion of Digital Footprint ",
      name: "Leifii Co has been instrumental in expanding our online presence seamlessly. Their team's meticulous attention to detail and unwavering dedication have made the process hassle-free.",
      title: "Neha Sharma, Marketing Director at TechSavvy Solutions",
    },
    {
      quote: "Innovative Solutions with Leifii Co",
      name: "Partnering with Leifii Co has been a game-changer for us. Their innovative approach and out-of-the-box ideas have added a fresh perspective to our digital marketing efforts. ",
      title: "Karan Patel, Founder of Pulse Innovations",
    },
  ]; // List of testimonials

  // Throttle function to limit the frequency of cursor position updates
  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function (...args) {
      if (!lastRan) {
        func.apply(this, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(this, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

  const moveCursor = useCallback(
    throttle((e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    }, 50),
    []
  );

  useEffect(() => {
    document.addEventListener("mousemove", moveCursor);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, [moveCursor]);

  const handleTestimonyClick = () => {
    const container = document.querySelector(".testimonials-container");
    const containerRect = container.getBoundingClientRect();

    const randomTestimonial =
      testimonials[Math.floor(Math.random() * testimonials.length)];
    const randomAngle = Math.random() * 20 - 10; // Random angle in range [-10, 10] degrees

    let posX = cursorPosition.x - 100;
    let posY = cursorPosition.y - 100;

    const testimonyWidth = 300; // Approximate width of the testimony div
    const testimonyHeight = 200; // Approximate height of the testimony div

    // Ensure the testimonial stays within the container
    if (posX + testimonyWidth > containerRect.width) {
      posX = containerRect.width - testimonyWidth - 20;
    }
    if (posY + testimonyHeight > containerRect.height) {
      posY = containerRect.height - testimonyHeight - 20;
    }
    if (posX < 0) {
      posX = 20;
    }
    if (posY < 0) {
      posY = 20;
    }

    const newTestimony = {
      text: randomTestimonial.quote,
      position: {
        x: posX,
        y: posY,
      },
      color: colors[Math.floor(Math.random() * colors.length)], // Randomly choose a color
      rotation: randomAngle, // Random rotation angle
      name: randomTestimonial.name,
      title: randomTestimonial.title,
    };
    setTestimonies([...testimonies, newTestimony]);
  };

  const handleMouseEnter = () => {
    setIsCursorVisible(true);
  };

  const handleMouseLeave = () => {
    setIsCursorVisible(false);
  };

  return (
    <div
      className="testimonials-container"
      onClick={handleTestimonyClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-black flex justify-center text-[2.5rem] md:text-[4rem] pt-[2rem]">
        Testimonials
      </div>
      <div className="text-[#3f3f3f] flex justify-center text-[1.2rem] pt-[1rem]">
        Click to reveal
      </div>
      {testimonies.map((testimony, index) => (
        <div
          key={index}
          className="testimony"
          style={{
            top: `${testimony.position.y}px`,
            left: `${testimony.position.x}px`,
            backgroundColor: testimony.color, // Set background color
            transform: `rotate(${testimony.rotation}deg)`, // Apply rotation
            position: "absolute",
            transition: "top 0.3s ease, left 0.3s ease", // Smooth transition for position
          }}
        >
          <p className="text-3xl">{testimony.text}</p>
          <br />
          <br />
          <p>
            - {testimony.name}, <br />
            <br />
            {testimony.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
