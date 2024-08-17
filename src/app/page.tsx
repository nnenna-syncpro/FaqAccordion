import Image from "next/image";
import desktopBg from "@/assets/images/background-pattern-desktop.svg";
import mobileBg from "@/assets/images/background-pattern-mobile.svg";
import IconStar from "@/assets/images/icon-star.svg";
import Accordian from "./components/Accordion";

export default function Home() {
  return (
    <main className="min-h-screen relative p-4 pb-10 bg-purple-100">
      Hello World!
      <BackgroundImage />
      {/* max width on mobile screens is 320px and 768px on larger screens */}
      <section className="relative bg-white mx-auto max-w-xs sm:max-w-4xl rounded-xl flex flex-col gap-4 mt-24 md:mt-35 p-5">
        <h1 className="flex gap-3 items-center">
          <Image src={IconStar} alt="star-icon" className="h-9 w-auto"></Image>
          <span className="font-bold text-5xl">FAQs</span>
        </h1>
        <div>
          <Accordian />
          <Accordian />
          <Accordian />
        </div>
      </section>
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
      ></Image>
      <Image
        src={mobileBg}
        alt="mobile-background"
        className="w-full h-full object-cover md:hidden"
      ></Image>
    </div>
  );
}
