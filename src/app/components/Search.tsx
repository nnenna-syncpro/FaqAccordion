import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { ChangeEvent, KeyboardEvent, useState } from "react";

type SearchProps = {
  //callback function to perform search function
  onSearch: (value: string) => void;
};

export default function Search({ onSearch }: SearchProps) {
  //create state for search term
  const [query, setQuery] = useState("");

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //set the search term to the value of input change
    setQuery(event.target.value);
  };

  //check if enter key is pressed
  //   const keyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
  //     //submit search term, make it readily available, and do a callback to check the value of the input is currently
  //     if (event.key === "Enter") {
  //       //call onSearch function and pass search term
  //       onSearch(query);
  //     }
  //   };

  onSearch(query);

  return (
    <section className="relative bg-white mx-auto max-w-sm sm:max-w-4xl rounded-xl mt-10 p-3">
      <input
        className="text-base md:text-lg text-gray-500 focus:outline-none cursor-pointer w-full"
        type="search"
        required
        placeholder="Search..."
        onChange={searchHandler}
        // onKeyDown={keyDownHandler}
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
