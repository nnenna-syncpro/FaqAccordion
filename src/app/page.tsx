import Image from "next/image";
import desktopBg from "@/assets/images/background-pattern-desktop.svg";

export default function Home() {
  return (
    <main className="min-h-screen relative p-4 pb-10 bg-purple-100">
      Hello World!
      <div className="w-full h-auto absolute top-0 left-0">
        <Image
          src={desktopBg}
          alt="desktop-background"
          className="w-full h-full object-cover"
        ></Image>
      </div>
    </main>
  );
}
