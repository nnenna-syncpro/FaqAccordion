import Accordian from "@/app/components/Faq/Accordion";
import IconMinus from "@/assets/images/icon-minus.svg";
import IconPlus from "@/assets/images/icon-plus.svg";
import IconStar from "@/assets/images/icon-star.svg";
import Image from "next/image";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";

type Props = {
  question: string;
  answer: string;
  id: number;
};

interface FaqProps {
  handleToggle: MouseEventHandler<HTMLDivElement>;
  isOpen: any;
  faqs: Props[];
  active: boolean[];
  setOpen: Dispatch<SetStateAction<boolean[]>>;
}

export default function Faq({
  handleToggle,
  isOpen,
  faqs,
  active,
  setOpen,
}: FaqProps) {
  return (
    <section className="relative bg-white mx-auto max-w-sm sm:max-w-4xl rounded-xl flex flex-col gap-4 mt-10 md:mt-35 p-5">
      {/* max width on mobile screens is 320px and 768px on larger screens */}
      <h1 className="flex gap-3 items-center justify-between">
        <div className="flex gap-3 items-center">
          <Image src={IconStar} alt="star-icon" className="h-9 w-auto"></Image>
          <span className="font-bold text-4xl">FAQs</span>
        </div>
        <div onClick={handleToggle} className="flex justify-end text-base">
          <button className="flex gap-3">
            <span className="hidden sm:block">
              {isOpen ? "Collapse All" : "Expand All"}
            </span>
            <div>
              {isOpen ? (
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
          </button>
        </div>
      </h1>
      <div>
        {faqs.map((faq, i) => (
          <Accordian
            question={faq.question}
            answer={faq.answer}
            key={i}
            id={faq.id}
            active={active}
            setOpen={setOpen}
          />
        ))}
      </div>
    </section>
  );
}
