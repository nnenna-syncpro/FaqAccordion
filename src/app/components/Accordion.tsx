import * as React from "react";
import Image from "next/image";
import IconMinus from "@/assets/images/icon-minus.svg";
import IconPlus from "@/assets/images/icon-plus.svg";

type Props = {};

export default function Accordian({}: Props) {
  return (
    <div className="flex flex-col gap-4 py-4">
      {/* question */}
      <div className="flex justify-between cursor-pointer font-bold text-xl md:text-2xl">
        <span>Question</span>
        <div>
          <Image src={IconMinus} alt="minus-icon" className="h-6"></Image>
          {/* <Image src={IconPlus} alt="plus-icon" className="h-6"></Image> */}
        </div>
      </div>
      {/* for the answer use backticks to avoid any text errors */}
      <div>
        <p className="text-base md:text-lg text-gray-500 pb-3">{`Answer`}</p>
        <hr className="bg-gray-100" />
      </div>
    </div>
  );
}
