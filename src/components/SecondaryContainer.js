import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-52 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated Movies"} movies={movies.TopRated} />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies}/>
          <MovieList title={"TV Shows"} movies={movies.TvShows} />
          <MovieList title={"Popular Shows"} movies={movies.PopularShows} />
          <MovieList title={"Top Rated Shows"} movies={movies.TopRatedShows} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;