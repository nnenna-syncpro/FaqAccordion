// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <section className="relative bg-white mx-auto max-w-sm sm:max-w-4xl rounded-xl mt-10 p-3">
      <input
        className="text-base md:text-lg text-gray-500 focus:outline-none cursor-pointer w-full"
        type="text"
        required
        placeholder="Search..."
      ></input>
      <button type="submit" className="absolute">
        {/* <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500 ml-4 mt-1"/> */}
      </button>
    </section>
  );
}
