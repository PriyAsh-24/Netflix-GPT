import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovie : null,
        movieTrailer: null,
        popularMovie : null,
        upcomingMovie : null,
        topRatedMovie : null,
    },
    reducers : {
        addNowPlayingMovie :(state,action)=>{
            state.nowPlayingMovie=action.payload;
        },
        addPopularMovie :(state,action)=>{
            state.popularMovie=action.payload;
        },
        addMovieTrailer : (state,action)=>{
            state.movieTrailer=action.payload;
        },
        addUpcomingMovie : (state,action)=>{
            state.upcomingMovie=action.payload;
        },
        addTopRatedMovie : (state,action)=>{
            state.topRated=action.payload;
        }
    }
})

export const{addNowPlayingMovie , addMovieTrailer,addPopularMovie ,addUpcomingMovie,addTopRatedMovie} =movieSlice.actions;
export default movieSlice.reducer