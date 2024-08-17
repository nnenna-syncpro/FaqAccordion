"use client"; // useState only works in a Client Component marked with "use client". so they're Server Components by default.
import * as React from "react";
import Image from "next/image";
import IconMinus from "@/assets/images/icon-minus.svg";
import IconPlus from "@/assets/images/icon-plus.svg";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type Props = {};

export default function Accordian({}: Props) {
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordionOpen = () => {
    // sets setAccordionOpen to the opposite ofnisAccordionOpen
    setAccordionOpen(!isAccordionOpen);
  };

  const [animationParent] = useAutoAnimate();

  return (
    <div ref={animationParent} className="flex flex-col gap-4 py-4">
      {/* question */}
      <div
        onClick={toggleAccordionOpen}
        className="flex justify-between cursor-pointer font-bold text-xl md:text-2xl"
      >
        <span>Question</span>
        <div>
          {isAccordionOpen ? (
            <Image src={IconMinus} alt="minus-icon" className="h-6"></Image>
          ) : (
            <Image src={IconPlus} alt="plus-icon" className="h-6"></Image>
          )}
        </div>
      </div>
      {/* if accordion is open then show answer */}
      {isAccordionOpen && (
        <div>
          {/* for the answer use backticks to avoid any text errors */}
          <p className="text-base md:text-lg text-gray-500 pb-3">{`Answer`}</p>
          <hr className="bg-gray-100" />
        </div>
      )}
    </div>
  );
}
