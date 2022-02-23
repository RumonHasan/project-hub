import { createSlice } from "@reduxjs/toolkit";

const initialProjectStates = {
    projectArray:[]
};

export const useReducer = createSlice({
    name: 'projectReducer',
    initialState:{
        initialProjectStates
    },
    reducers:{
        defaultProjectArray: (state, action)=>{

        }
    }
});

export const {defaultProjectArray} = useReducer.actions;

export default useReducer.reducer;