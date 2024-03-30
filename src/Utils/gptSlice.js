import { createSlice } from "@reduxjs/toolkit";

const gpt=createSlice({
    name:"gpt",
    initialState :{
        togglegpt : false,
        movieResults : null,
        movieNames : null,

    },

    reducers: {
        toToggleToGptPage : (state)=>{
            state.togglegpt = !state.togglegpt;
        },
        addGptMovieResult : (state,action) =>{
            const {movieNames,movieResults} = action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        },
    }
})

export const {toToggleToGptPage,addGptMovieResult}=gpt.actions;

export default gpt.reducer;