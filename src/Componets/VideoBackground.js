import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../Hooks/useMovieTrailer';


const VideoBackground = ({movieId}) => {
  const movieTrailer=useSelector((store)=> store.movies?.movieTrailer);

  useMovieTrailer(movieId);
  
  return (
    <div className='w-screen '>
      <iframe 
      className='w-screen aspect-video h-5/6'
      src={"https://www.youtube.com/embed/" + movieTrailer?.key +"?&autoplay=1&mute=1" }
      title="YouTube video player" 
      > </iframe>
    </div>
  )
}

export default VideoBackground
