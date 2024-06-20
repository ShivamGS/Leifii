import React from "react";
import { MacbookScroll } from "./macbook_scroll.tsx";
import { Link } from "react-router-dom";
import { LampDemo } from "./LampDemo.tsx";
export function MacbookScrollDemo() {
  return (
    <div>
      <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
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
