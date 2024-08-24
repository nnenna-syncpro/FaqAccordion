"use client";
import { useMemo, useState } from "react";
import Faq from "./components/Faq/Faq";
import Search from "./components/Search";
import { useSearchParams } from "next/navigation";
import { faqs } from "@/data/data";
import { BackgroundImage } from "./background-image";

export default function Home() {
  //use state to manage all faqs
  const [faqList] = useState(faqs);
  //handle search term using search params
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") ?? "";

  //filter FAQs list using search term. But only when faqs or search term changes
  const filteredFaqList = useMemo(() => {
    return faqList.filter((faq) => {
      if (searchQuery !== null) {
        return faq.question.toLowerCase().includes(searchQuery.toLowerCase());
      } else {
        return faqList;
      }
    });
  }, [faqList, searchQuery]);

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
      <BackgroundImage />
      <Search />
      <Faq
        handleToggle={toggleOpen}
        isOpen={isSomeOpen}
        faqs={filteredFaqList}
        active={isOpen}
        setOpen={setOpen}
      />
    </main>
  );
}
