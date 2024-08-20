"use client";
import Image from "next/image";
import desktopBg from "@/assets/images/background-pattern-desktop.svg";
import mobileBg from "@/assets/images/background-pattern-mobile.svg";
import { useState } from "react";
import Faq from "./components/Faq/Faq";

export default function Home() {
  //create state for each accordion item and expand/collapse all
  const [isOpen, setOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  //check if any state changes to true
  const isSomeOpen = isOpen.some((item) => item);

  //handle toggle for all states including expand/collapse all
  const toggleOpen = () => {
    //if any state is true change it to false and vice versa
    isSomeOpen
      ? setOpen([false, false, false, false, false, false, false])
      : setOpen([true, true, true, true, true, true, true]);
  };

  return (
    <main className="min-h-screen relative p-4 pb-10 bg-purple-100">
      Hello World!
      <BackgroundImage />
      <Faq
        handleToggle={toggleOpen}
        isOpen={isSomeOpen}
        faqs={faqs}
        active={isOpen}
        setOpen={setOpen}
      />
    </main>
  );
}

function BackgroundImage() {
  return (
    <div className="w-full h-auto absolute top-0 left-0">
      <Image
        src={desktopBg}
        alt="desktop-background"
        className="w-full h-full object-cover hidden md:block"
        priority={true}
      ></Image>
      <Image
        src={mobileBg}
        alt="mobile-background"
        className="w-full h-full object-cover md:hidden"
      ></Image>
    </div>
  );
}

const faqs = [
  {
    question: "What is Next.js?",
    answer: "Next.js is a React framework for building web applications.",
    id: 1,
  },
  {
    question: "How does Tailwind CSS work?",
    answer:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
    id: 2,
  },
  {
    question: "What is the purpose of getStaticProps?",
    answer: "getStaticProps is used to fetch data at build time in Next.js.",
    id: 3,
  },
];
