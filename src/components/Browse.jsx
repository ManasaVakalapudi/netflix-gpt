import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchContainer from "./GptSearchContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);
  return (
    <div>
       <Header />
      {showGptSearch ? (
        <GptSearchContainer />
      ) : (
        <>
         
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/*
        Main Container
          - VideoBackground
          - VideoTitle
        
        Secondary Container
          - MovieList * n
            - cards * n
        */}
    </div>
  );
};

export default Browse;
