import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: 'gptSearch',
    initialState: {
        showGptSearch: false,
        gptMovieNames: null,
        gptMovieResults: null
    },
    reducers :{
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResults: (state, action) => {
           const {movieNames, movieResults} = action.payload;
           state.gptMovieResults = movieResults;
           state.gptMovieNames = movieNames;
        }
    }
});

export const { toggleGptSearchView, addGptMovieResults } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;