import React from "react";
import {
  HeroCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./herocard.tsx";

export function HeroCardPreview() {
  return (
    <div className="flex items-center justify-center bg-black h-[40rem] w-full">
      <HeroCard text="You know the business" revealText="I know the chemistry ">
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription>
      </HeroCard>
    </div>
  );
}
