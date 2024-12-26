import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
    name: "gemini",
    initialState: {
        showGeminiSearch : false,
        geminiMovies : null
    },
    reducers: {
        toggleGeminiSearchView : (state) => {
            state.showGeminiSearch = !state.showGeminiSearch;
        },
        addGeminiMovies: (state, action) => {
            state.geminiMovies = action.payload;
        },
        deleteMovies: (state, action) => {
            state.geminiMovies = null;
        }
    },
})

export const { toggleGeminiSearchView, addGeminiMovies, deleteMovies } = geminiSlice.actions;

export default geminiSlice.reducer;