import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedShows } from "../utils/moviesSlice";

const useTopRatedShows = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getTopRatedShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedShows(json.results));
  };

  useEffect(() => {
    getTopRatedShows();
  }, []);
};

export default useTopRatedShows;
