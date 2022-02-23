import { createSlice } from "@reduxjs/toolkit";

const initialThemeStates = {
    darkMode: false
}

export const useThemeReducer = createSlice({
    name: 'useThemeReducer',
    initialState:{
        initialThemeStates
    },
    reducers:{
        toggleDarkMode: (state, action)=>{

        }
    }
});

export const {toggleDarkMode} = useThemeReducer.actions;

export default useThemeReducer.reducer;