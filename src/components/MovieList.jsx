import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("title", title);
  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }
  return (
    <div className="px-6 bg-black text-white">
      <h1 className="font-semibold text-xl p-4">{title}</h1>
      <div className="flex overflow-x-hidden">
        <div className="flex space-x-4 p-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
