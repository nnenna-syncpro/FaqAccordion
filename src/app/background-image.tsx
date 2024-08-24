import desktopBg from "@/assets/images/background-pattern-desktop.svg";
import mobileBg from "@/assets/images/background-pattern-mobile.svg";
import Image from "next/image";

export function BackgroundImage() {
  return (
    <div className="w-full h-auto absolute top-0 left-0">
      <Image
        src={desktopBg}
        alt="desktop-background"
        className="w-full h-full object-cover hidden md:block md:h-72"
        priority={true}
      ></Image>
      <Image
        src={mobileBg}
        alt="mobile-background"
        className="w-full h-full object-cover sm:h-72 md:hidden"
      ></Image>
    </div>
  );
}
