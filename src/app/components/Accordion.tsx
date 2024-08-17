"use client"; // useState only works in a Client Component marked with "use client". so they're Server Components by default.
import * as React from "react";
import Image from "next/image";
import IconMinus from "@/assets/images/icon-minus.svg";
import IconPlus from "@/assets/images/icon-plus.svg";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type Props = {
  question: string;
  answer: string;
  isAccordionOpen?: boolean;
};

export default function Accordian(props: Props) {
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordionOpen = () => {
    // sets setAccordionOpen to the opposite of isAccordionOpen
    setAccordionOpen(!isAccordionOpen);
  };

  const [animationParent] = useAutoAnimate();

  return (
    <div ref={animationParent} className="flex flex-col gap-4 py-4">
      {/* question */}
      <div
        onClick={toggleAccordionOpen}
        className="flex justify-between cursor-pointer font-semibold text-xl md:text-2xl"
      >
        <span>{props.question}</span>
        <div>
          {isAccordionOpen ? (
            <Image
              src={IconMinus}
              alt="minus-icon"
              className="h-6 w-auto"
            ></Image>
          ) : (
            <Image
              src={IconPlus}
              alt="plus-icon"
              className="h-6 w-auto"
            ></Image>
          )}
        </div>
      </div>
      {/* if accordion is open then show answer */}
      {isAccordionOpen && (
        <div>
          <p className="text-base md:text-lg text-gray-500 pb-3">
            {props.answer}
          </p>
        </div>
      )}
    </div>
  );
}
