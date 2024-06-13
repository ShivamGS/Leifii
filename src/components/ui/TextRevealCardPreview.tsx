import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal-card.tsx";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-black h-[40rem] rounded-2xl w-[1400px]">
      <TextRevealCard
        text="You know the business"
        revealText="We know the chemistry "
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
