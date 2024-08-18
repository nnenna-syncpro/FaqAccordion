"use client";
import Image from "next/image";
import desktopBg from "@/assets/images/background-pattern-desktop.svg";
import mobileBg from "@/assets/images/background-pattern-mobile.svg";
import { useState } from "react";
import Faq from "./components/Faq/Faq";

export default function Home() {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    // sets setAccordionOpen to the opposite of isAccordionOpen
    setOpen(!isOpen);
  };

  return (
    <main className="min-h-screen relative p-4 pb-10 bg-purple-100">
      Hello World!
      <BackgroundImage />
      <Faq handleToggle={toggleOpen} isOpen={isOpen} faqs={faqs} />
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
    isAccordionOpen: false,
  },
  {
    question: "How does Tailwind CSS work?",
    answer:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
    isAccordionOpen: false,
  },
  {
    question: "What is the purpose of getStaticProps?",
    answer: "getStaticProps is used to fetch data at build time in Next.js.",
    isAccordionOpen: false,
  },
];
