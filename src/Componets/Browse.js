import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../Hooks/useNowPlaingMovies"
import MainMovieContainer from './MainMovieContainer';
import SecondaryMovieContainer from './SecondaryMovieContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useUpcomingMovie from '../Hooks/useUpcomingMovie';
import useTopRatedMovie from '../Hooks/useTopRatedMovie';
import GPTPage from './GPTPage';
import { useSelector } from 'react-redux';


const Browse = () => {
  const togglePage=useSelector((store)=> store.gpt.togglegpt)
  
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovie();
  useTopRatedMovie();
  return (
    <div>
      <Header />
      {togglePage ? (<GPTPage/> 
      ): (
      <>
        <MainMovieContainer />
        <SecondaryMovieContainer/>
      </>
      )}
    </div>
  )
}

export default Browse
