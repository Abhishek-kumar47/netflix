import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import geminiSlice from "./GeminiSlice";
import configReducer from "./configSlice";
const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gemini: geminiSlice,
        config: configReducer,
    }, // Add your reducers here
});
export default appStore;