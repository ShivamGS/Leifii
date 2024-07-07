import React from "react";
import { MacbookScroll } from "./macbook_scroll.tsx";
import { Link } from "react-router-dom";
import { LampDemo } from "./LampDemo.tsx";
import BackButton from "../BackButton.jsx/backButton.jsx";
export function MacbookScrollDemo() {
  return (
    <div>
      <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
        <div className="pt-[2rem] pl-[2rem] md:pt-[4rem] md:pl-[4rem]">
          <BackButton />
        </div>
        <LampDemo />
        <MacbookScroll
          badge={
            <Link to="https://www.instagram.com/leifii.co/">
              <Badge className="h-10 w-10 transform -rotate-12" />
            </Link>
          }
          src="/images/1.jpg"
          showGradient={false}
        />
      </div>
    </div>
  );
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return <img className="w-5 h-5" src="/logol.png"></img>;
};
