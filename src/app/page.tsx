import Image from "next/image";
import desktopBg from "@/assets/images/background-pattern-desktop.svg";
import mobileBg from "@/assets/images/background-pattern-mobile.svg";

export default function Home() {
  return (
    <main className="min-h-screen relative p-4 pb-10 bg-purple-100">
      Hello World!
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
    </main>
  );
}
