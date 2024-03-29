import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../Hooks/useNowPlaingMovies"
import MainMovieContainer from './MainMovieContainer';
import SecondaryMovieContainer from './SecondaryMovieContainer';


const Browse = () => {
  
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainMovieContainer />
      <SecondaryMovieContainer/>
    </div>
  )
}

export default Browse
