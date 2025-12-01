import React, { useRef } from "react";
import lang from "../utils/langConstants.js";
import { useSelector } from "react-redux";
import { getOpenAIClient } from "../utils/openai.js";
import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addGptMovieResults } from "../utils/gptSearchSlice.js";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);
  const currentLang = lang[langKey] || lang.en;
  const searchTextRef = useRef();
  const dispatch = useDispatch();

  //search movie in tmdb based on gpt response
  const searchMovieTmdb = async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie, {API_OPTIONS});
    const json = await data.json();
    return json.results;
  }

  const handleGptSearchClick = async () => {
    console.log("GPT Search for:", searchTextRef.current.value);
    const client = getOpenAIClient();
     const gptQuery =
      "Act as a movie recommendation engine and suggest top 5 movies based on the following preferences: " +
      searchTextRef.current.value +
      ". Provide only the movie titles in a comma separated format.";
    const gptResults = await client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if(!gptResults.choices) {
      console.error("No choices returned from GPT");
    }
   
   const gptMovies = gptResults.choices?.[0]?.message.content.split(',');
   const movieData = gptMovies.map((movie)=> searchMovieTmdb(movie.trim()));
   const tmdbResults = await Promise.all(movieData);
   dispatch(addGptMovieResults({movieNames: gptMovies, movieResults: tmdbResults}));
  };
  return (
    <div className="pt-[15%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={currentLang.gptSearchPlaceholder}
          className="p-4 m-4 col-span-9 rounded bg-gray-700 text-white"
          ref={searchTextRef}
        />
        <button
          type="submit"
          className="py-2 px-4 bg-red-700 text-white rounded col-span-3 m-4"
          onClick={handleGptSearchClick}
        >
          {currentLang.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
