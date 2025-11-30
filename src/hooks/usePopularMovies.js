import React, {useEffect} from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addPopularMovies(data.results));
      console.log("Popular Movies Data:", data);
    } catch (error) {
      console.error("Failed to fetch popular movies", error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useNowPlayingMovies;
