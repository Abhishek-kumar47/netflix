import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularShows } from "../utils/moviesSlice";

const usePopularShows = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getPopularShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularShows(json.results));
  };

  useEffect(() => {
    getPopularShows();
  }, []);
};

export default usePopularShows;
