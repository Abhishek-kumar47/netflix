import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRated: (state, action) => {
      state.TopRated = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
    addTvShows: (state, action) => {
      state.TvShows = action.payload;
    },
    addPopularShows: (state, action) => {
      state.PopularShows = action.payload;
    },
    addTopRatedShows: (state, action) => {
      state.TopRatedShows = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRated, addUpcomingMovies,addTvShows, addPopularShows, addTopRatedShows} =
  moviesSlice.actions;

export default moviesSlice.reducer;