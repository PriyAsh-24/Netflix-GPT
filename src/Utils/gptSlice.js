import { createSlice } from "@reduxjs/toolkit";

const gpt=createSlice({
    name:"gpt",
    initialState :{
        togglegpt : false,
    },

    reducers: {
        toToggleToGptPage : (state)=>{
            state.togglegpt = !state.togglegpt;
        }
    }
})

export const {toToggleToGptPage}=gpt.actions;

export default gpt.reducer;