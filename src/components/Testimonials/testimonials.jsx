import React, { useState, useEffect } from "react";
import "./testimonials.css"; // Stylesheet for Testimonials component

const Testimonials = () => {
  const [testimonies, setTestimonies] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [previousCursorPosition, setPreviousCursorPosition] = useState({
    x: 0,
    y: 0,
  });

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
      quote: "Increased Online Presence - without the hassle",
      name: "I am very much satisfied with how the team is handling the work. They all are painstaking and very dedicated, understands the requirements and keeps themselves on toes.",
      title: "Pooja - CEO of Pooja Khandelwal Designs",
    },
    {
      quote: "A Creative and Innovative Partner",
      name: "I really like their creativity and ideas. They have a unique way featuring festive posts. We really appreciate the team's quick response and dedication.",
      title: "Amit Firodiya From Alsan India",
    },
    {
      quote: "Leifii Co is the Digital Marketing Partner You Can Trust",
      name: "You just give them a small brief and they are up with ideas that make your work look damn good. Within the span of just 15 days of interacting they already knew my preferences and could understand my points without even explaining.",
      title: "Rohan Hasabnis CEO of Asian Box",
    },
    {
      quote: "Effortless Expansion of Digital Footprint - Thanks to Leifii Co",
      name: "Leifii Co has been instrumental in expanding our online presence seamlessly. Their team's meticulous attention to detail and unwavering dedication have made the process hassle-free.",
      title: "Neha Sharma, Marketing Director at TechSavvy Solutions",
    },
    {
      quote: "Innovative Solutions with Leifii Co",
      name: "Partnering with Leifii Co has been a game-changer for us. Their innovative approach and out-of-the-box ideas have added a fresh perspective to our digital marketing efforts. ",
      title: "Karan Patel, Founder of Pulse Innovations",
    },
  ]; // List of testimonials

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    const smoothMoveCursor = () => {
      const newX =
        previousCursorPosition.x +
        (cursorPosition.x - previousCursorPosition.x) * 0.1;
      const newY =
        previousCursorPosition.y +
        (cursorPosition.y - previousCursorPosition.y) * 0.1;
      setPreviousCursorPosition({ x: newX, y: newY });
      requestAnimationFrame(smoothMoveCursor);
    };

    smoothMoveCursor();

    return () => {
      cancelAnimationFrame(smoothMoveCursor);
    };
  }, [cursorPosition, previousCursorPosition]);

  const handleTestimonyClick = () => {
    const randomTestimonial =
      testimonials[Math.floor(Math.random() * testimonials.length)];
    const randomAngle = Math.random() * 20 - 10; // Random angle in range [-10, 10] degrees
    const newTestimony = {
      text: randomTestimonial.quote,
      position: {
        x: previousCursorPosition.x - 100,
        y: previousCursorPosition.y - 100,
      },
      color: colors[Math.floor(Math.random() * colors.length)], // Randomly choose a color
      rotation: randomAngle, // Random rotation angle
      name: randomTestimonial.name,
      title: randomTestimonial.title,
    };
    setTestimonies([...testimonies, newTestimony]);
  };

  return (
    <div className="testimonials-container" onClick={handleTestimonyClick}>
      <div className="text-black flex justify-center text-[55px]">
        Testimonials
      </div>
      <div className="text-black flex justify-center text-[20px]">
        Click to reveal
      </div>
      {testimonies.map((testimony, index) => (
        <div
          key={index}
          className="testimony"
          style={{
            top: testimony.position.y,
            left: testimony.position.x,
            backgroundColor: testimony.color, // Set background color
            transform: `rotate(${testimony.rotation}deg)`, // Apply rotation
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

// import React, { useState, useEffect } from "react";
// import "./testimonials.css"; // Stylesheet for Testimonials component

// const Testimonials = () => {
//   const [testimonies, setTestimonies] = useState([]);
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [previousCursorPosition, setPreviousCursorPosition] = useState({
//     x: 0,
//     y: 0,
//   });

//   const colors = ["#FF5733", "#33FF6E", "#339AFF", "#E833FF", "#FF3369"]; // List of colors

//   const testimonialsList = [
//     "This is a great product!",
//     "I'm very satisfied with the service.",
//     "Amazing experience, highly recommended!",
//     "Best decision I've made!",
//     "Excellent customer support!",
//   ]; // List of testimonials

//   useEffect(() => {
//     const moveCursor = (e) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
//     };

//     document.addEventListener("mousemove", moveCursor);

//     return () => {
//       document.removeEventListener("mousemove", moveCursor);
//     };
//   }, []);

//   useEffect(() => {
//     const smoothMoveCursor = () => {
//       const newX =
//         previousCursorPosition.x +
//         (cursorPosition.x - previousCursorPosition.x) * 0.1;
//       const newY =
//         previousCursorPosition.y +
//         (cursorPosition.y - previousCursorPosition.y) * 0.1;
//       setPreviousCursorPosition({ x: newX, y: newY });
//       requestAnimationFrame(smoothMoveCursor);
//     };

//     smoothMoveCursor();

//     return () => {
//       cancelAnimationFrame(smoothMoveCursor);
//     };
//   }, [cursorPosition, previousCursorPosition]);

//   const handleTestimonyClick = () => {
//     const randomAngle = Math.random() * 20 - 10; // Random angle in range [-10, 10] degrees
//     const newTestimony = {
//       text: testimonialsList[
//         Math.floor(Math.random() * testimonialsList.length)
//       ], // Randomly choose a testimonial text
//       position: {
//         x: previousCursorPosition.x,
//         y: previousCursorPosition.y,
//       },
//       color: colors[Math.floor(Math.random() * colors.length)], // Randomly choose a color
//       rotation: randomAngle, // Random rotation angle
//     };
//     setTestimonies([...testimonies, newTestimony]);
//   };

//   return (
//     <div className="testimonials-container" onClick={handleTestimonyClick}>
//       <div
//         className="custom-cursor"
//         style={{
//           left: previousCursorPosition.x,
//           top: previousCursorPosition.y,
//         }}
//       >
//         <span>Click me to reveal testimonials</span>
//       </div>
//       {testimonies.map((testimony, index) => (
//         <div
//           key={index}
//           className="testimony"
//           style={{
//             top: testimony.position.y,
//             left: testimony.position.x,
//             backgroundColor: testimony.color, // Set background color
//             transform: `rotate(${testimony.rotation}deg)`, // Apply rotation
//           }}
//         >
//           {testimony.text}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Testimonials;
