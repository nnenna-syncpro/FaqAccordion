import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { ChangeEvent, KeyboardEvent, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type SearchProps = {
  //callback function to perform search function
  onSearch: (value: string) => void;
};

export default function Search({ onSearch }: SearchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchHandler = (value: string) => {
    console.log(value);
  };

  return (
    <section className="relative bg-white mx-auto max-w-sm sm:max-w-4xl rounded-xl mt-10 p-3">
      <input
        className="text-base md:text-lg text-gray-500 focus:outline-none cursor-pointer w-full"
        type="search"
        required
        placeholder="Search..."
        onChange={(e) => searchHandler(e.target.value)}
      ></input>
      <button
        type="submit"
        className="absolute right-1 top-1/2 -translate-y-1/2 p-3 rounded-full"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500" />
      </button>
    </section>
  );
}
