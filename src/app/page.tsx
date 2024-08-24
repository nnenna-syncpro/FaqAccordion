import { BackgroundImage } from "./background-image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative p-4 pb-10 bg-purple-100">
      <BackgroundImage />
      <section className="relative bg-purple-100 mx-auto max-w-max rounded-full my-auto mt-20 md:mt-28 p-3">
        <Link href="/faq" className="">
          FAQs Link
        </Link>
      </section>
    </main>
  );
}
