import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList.jsx";

const GptMovieSuggestions = () => {
  const { gptMovieResults, gptMovieNames } = useSelector(
    (store) => store.gptSearch
  );
  if (!gptMovieResults || gptMovieResults.length === 0) {
    return (
      <div className="text-white text-center pt-20">
        No GPT Movie Suggestions Found. Please perform a GPT Search.
      </div>
    );
  }

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-85 rounded">
      <div>
        {gptMovieNames.map((movie, index) => (
          <MovieList
            key={movie}
            title={movie}
            movies={gptMovieResults[gptMovieNames[index]]}
          />
        ))}
      </div>
      <h1>{gptMovieNames[0]}</h1>
      <MovieList title={gptMovieNames[0]} movies={gptMovieResults[0]} />
    </div>
  );
};

export default GptMovieSuggestions;
