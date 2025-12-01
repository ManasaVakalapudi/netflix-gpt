import { createSlice } from "@reduxjs/toolkit";
import { SUPPORTED_LANGUAGES } from "../utils/constants.js";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        lang: 'en'
    },
    reducers:{
        setLanguage:(state, action) => {
            state.lang = action.payload;
        }
    }
})

export const { setLanguage } = configSlice.actions;
export default configSlice.reducer;