import React from "react";
import { FlipWords } from "./flip_words.tsx";

export function FlipWordsDemo() {
  const words = ["SAAS", "UI/UX", "E-COMMERCE", "PORTFOLIO"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-[6rem] mx-auto font-normal text-black dark:text-neutral-900 font-[questrial]">
        Build
        <FlipWords words={words} /> <br />
        websites with LEIFII
      </div>
    </div>
  );
}
