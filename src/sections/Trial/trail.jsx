import React, { useState, useEffect } from "react";

// Define image paths and configurations
const images = [
  {
    path: "/blog1.png",
    startScroll: 20,
    endScroll: 30,
    startScale: 0.2,
    endScale: 2,
    startOpacity: 0,
    endOpacity: 1,
    startX: 0,
    endX: 40,
    startY: 0,
    endY: 20,
    startGradient: "linear-gradient(to right, #000000, #1b1b1b)", // Image 1 start gradient
    endGradient: "linear-gradient(to right, #000000, #0b0b0b)", // Image 1 end gradient
    text: "Product Photography ",
  },
  {
    path: "/blog3.jpg",
    startScroll: 30,
    endScroll: 40,
    startScale: 0.2,
    endScale: 2,
    startOpacity: 0,
    endOpacity: 1,
    startX: 0,
    endX: -35,
    startY: 0,
    endY: 20,
    startGradient: "linear-gradient(to right, #1a2a1b, #2b3a2b)", // Image 2 gradient
    endGradient: "linear-gradient(to right, #0a1a0b, #1b2b1b)", // Image 2 end gradient
    text: "Event Photography",
  },
  {
    path: "/blog4.jpg",
    startScroll: 40,
    endScroll: 50,
    startScale: 0.2,
    endScale: 2,
    startOpacity: 0,
    endOpacity: 1,
    startX: 0,
    endX: 40,
    startY: 0,
    endY: 20,
    startGradient: "linear-gradient(to right, #1a1a3b, #2b2b4b)", // Image 3 gradient
    endGradient: "linear-gradient(to right, #0a0a1b, #1b1b2b)", // Image 3 end gradient
    text: "Modelling Shoots",
  },
  {
    path: "/blog5.jpg",
    startScroll: 50,
    endScroll: 60,
    startScale: 0.2,
    endScale: 2,
    startOpacity: 0,
    endOpacity: 1,
    startX: 0,
    endX: -35,
    startY: 0,
    endY: 20,
    startGradient: "linear-gradient(to right, #2b1a1a, #4b2b2b)", // Image 4 gradient
    endGradient: "linear-gradient(to right, #1b0a0a, #2b1b1b)", // Image 4 end gradient
    text: "Restaurent Shoots",
  },
];

const Trail = () => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / docHeight) * 100;
      setScrollValue(Math.min(100, Math.max(0, scrollPercentage)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getBackgroundGradient = () => {
    const image = images.find(
      (img) => scrollValue >= img.startScroll && scrollValue <= img.endScroll
    );
    if (!image) return "linear-gradient(to right, #000000, #000000)";

    const progress =
      (scrollValue - image.startScroll) / (image.endScroll - image.startScroll);

    return blendGradients(image.startGradient, image.endGradient, progress);
  };

  const blendGradients = (startGradient, endGradient, progress) => {
    const startColors = startGradient.match(/#[0-9a-f]{6}/gi);
    const endColors = endGradient.match(/#[0-9a-f]{6}/gi);

    const blendedColors = startColors.map((startColor, index) => {
      const startRGB = hexToRgb(startColor);
      const endRGB = hexToRgb(endColors[index]);
      const blendedRGB = startRGB.map((start, idx) =>
        Math.round(start + progress * (endRGB[idx] - start))
      );
      return rgbToHex(blendedRGB);
    });

    return `linear-gradient(to right, ${blendedColors.join(", ")})`;
  };

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  };

  const rgbToHex = (rgb) => {
    return (
      "#" +
      rgb
        .map((val) => {
          const hex = val.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("")
    );
  };

  const getImageStyles = (image) => {
    const {
      startScroll,
      endScroll,
      startScale,
      endScale,
      startOpacity,
      endOpacity,
      startX,
      endX,
      startY,
      endY,
    } = image;
    const progress = (scrollValue - startScroll) / (endScroll - startScroll);

    const scale = startScale + progress * (endScale - startScale);
    const opacity = startOpacity + progress * (endOpacity - startOpacity);

    const translateX = startX + progress * (endX - startX);
    const translateY = startY + progress * (endY - startY);

    return {
      transform: `translate(${translateX}vw, ${translateY}vh) scale(${scale}) translate(-50%, -50%)`,
      opacity: opacity,
      transition: "transform 0.5s ease, opacity 0.5s ease",
      position: "fixed",
      top: "50%",
      left: "50%",
    };
  };

  return (
    <div className="relative overflow-hidden">
      <div className="h-[100vh] bg-gradient-to-b from-[#2d0d3a] to-[#1a1a3b]"></div>
      <div className="h-[100vh] bg-gradient-to-b from-[#1a1a3b] to-[#2c140a]"></div>
      <div className="h-[100vh] bg-gradient-to-b from-[#2c140a] to-[#05282f]"></div>
      <div
        className="h-[300vh] text-white relative overflow-hidden  bg-gradient-to-b from-[#05282f] to-[#2e0733]"
        // style={{ background: getBackgroundGradient() }}
      >
        <div className="flex justify-center space-x-4 mt-20 absolute inset-0">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[50px] h-[50px] md:w-[200px] md:h-[200px] bg-gray-500 transform scale-0 opacity-0 relative"
              style={getImageStyles(image)}
            >
              <div className="absolute text-[0.5rem] md:text-[1rem] w-[4rem] md:w-[11rem] top-[-30px] left-1/2 transform -translate-x-1/2  px-2 py-1  text-white ">
                {image.text}
              </div>
              <img
                src={image.path}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trail;
