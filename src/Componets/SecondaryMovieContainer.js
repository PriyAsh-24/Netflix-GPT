import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryMovieContainer = () => {
  const movies=useSelector((store)=> store.movies)
  return movies.nowPlayingMovie && (
    <div className='bg-black'>
      <div className='md:-mt-80 relative z=1 pl-5'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie}/>
        <MovieList title={"Top Rated"} movies={movies.topRated}/>
        <MovieList title={"Upcoming"} movies={movies.upcomingMovie}/>
        <MovieList title={"Popular"} movies={movies.popularMovie}/>
      </div>
    </div>
  )
}

export default SecondaryMovieContainer
