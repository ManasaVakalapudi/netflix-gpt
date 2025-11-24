import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideoId = useSelector((state) => state.movies.trailerVideo?.key);
  const getMovieVideo = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await response.json();
    console.log("Video data fetched:", data);
    const video = data.results.filter((video) => video.type === "Trailer");
    const trailerVideo = video.length ? video[0] : data.results[0];
    dispatch(addTrailerVideo(trailerVideo));
    console.log("videos", video);
  };

  useEffect(() => {
    if (movieId) getMovieVideo();
  }, [movieId]);
  
  return trailerVideoId;
};

export default useTrailerVideo;
