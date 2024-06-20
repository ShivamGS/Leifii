import React from "react";
import { HeroParallaxDemo } from "../../components/ui/HeroParallaxDemo.tsx";
import { MacbookScrollDemo } from "../../components/ui/MacbookScrollDemo.tsx";
import { ContainerScrollDemo } from "../../components/ui/ContainerScrollDemo.tsx";
import { LampDemo } from "../../components/ui/LampDemo.tsx";
import { FlipWordsDemo } from "../../components/ui/FlipWordsDemo.tsx";

const Web = () => {
  return (
    <div>
      <MacbookScrollDemo />
      <FlipWordsDemo />
      <HeroParallaxDemo />
      <ContainerScrollDemo />
    </div>
  );
};

export default Web;
