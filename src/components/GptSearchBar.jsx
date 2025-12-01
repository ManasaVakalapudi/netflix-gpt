import React from "react";
import lang from '../utils/langConstants.js';
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);
  const currentLang = lang[langKey] || lang.en;
  return (
    <div className="pt-[5%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={currentLang.gptSearchPlaceholder}
          className="p-4 m-4 col-span-9 rounded bg-gray-700 text-white"
        />
        <button
          type="submit"
          className="py-2 px-4 bg-red-700 text-white rounded col-span-3 m-4"
        >
         {currentLang.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
