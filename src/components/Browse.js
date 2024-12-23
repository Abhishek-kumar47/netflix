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

const Browse = () => {
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
      <MainContainer />
      <SecondaryContainer />
      {/* 
          MainContainer
            - VideoBackground
            - VideoTitle
          SecondaryContainer
            - MovieList * n
              - cards * n
      */}
    </div>
  );
};
export default Browse;