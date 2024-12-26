import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTvShows from "../hooks/useTvShows";
import usePopularShows from "../hooks/usePopularShows";
import useTopRatedShows from "../hooks/useTopRatedShows";
import { useSelector } from "react-redux";
import GeminiSearch from "./GeminiSearch";

const Browse = () => {
  const geminiSearch= useSelector((store) => store.gemini.showGeminiSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
  useTvShows();
  usePopularShows();
  useTopRatedShows();
  return (
    <div>
      <Header />
      {
      geminiSearch ? (
        <GeminiSearch/>
      ) : (
        <>
             <MainContainer />
             <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;