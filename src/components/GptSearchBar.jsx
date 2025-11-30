import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[5%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder="What would you like to watch?"
          className="p-4 m-4 col-span-9 rounded bg-gray-700 text-white"
        />
        <button
          type="submit"
          className="py-2 px-4 bg-red-700 text-white rounded col-span-3 m-4"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
