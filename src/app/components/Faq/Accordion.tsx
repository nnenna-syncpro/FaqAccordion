"use client"; // useState only works in a Client Component marked with "use client". so they're Server Components by default.
import IconMinus from "@/assets/images/icon-minus.svg";
import IconPlus from "@/assets/images/icon-plus.svg";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  question: string;
  answer: string;
  id: number;
  active: boolean[];
  setOpen: Dispatch<SetStateAction<boolean[]>>;
};

export default function Accordian({
  question,
  answer,
  id,
  active,
  setOpen,
}: Props) {
  const toggleAccordionOpen = () => {
    //keep a copy of the isOpen array in state
    let isActive = [...active!];
    //change the state of one item
    isActive[id] = !isActive[id];
    //set the new state
    setOpen(isActive);
  };

  const [animationParent] = useAutoAnimate();

  return (
    <div ref={animationParent} className="flex flex-col gap-4 py-4">
      {/* question */}
      <div
        onClick={toggleAccordionOpen}
        className="flex justify-between cursor-pointer font-semibold text-xl md:text-2xl"
      >
        <span>{question}</span>
        <div>
          {active![id] ? (
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
      {active![id] && (
        <div>
          <p className="text-base md:text-lg text-gray-500 pb-3">{answer}</p>
        </div>
      )}
    </div>
  );
}
