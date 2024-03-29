import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../Hooks/useNowPlaingMovies"
import MainMovieContainer from './MainMovieContainer';
import SecondaryMovieContainer from './SecondaryMovieContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useUpcomingMovie from '../Hooks/useUpcomingMovie';
import useTopRatedMovie from '../Hooks/useTopRatedMovie';


const Browse = () => {
  
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovie();
  useTopRatedMovie();
  return (
    <div>
      <Header />
      <MainMovieContainer />
      <SecondaryMovieContainer/>
    </div>
  )
}

export default Browse
