import { API_OPTIONS } from '../Utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUpcomingMovie} from "../Utils/movieSlic"
import { useEffect } from 'react';

const useUpcomingMovie=()=>{
    const dispatch=useDispatch();
    const upcomingMovie=useSelector(store=> store.movies.upcomingMovie)

  const getUpcomingMovie=async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)

    const json= await data.json();
    // console.log(json.results);

    dispatch(addUpcomingMovie(json.results))
  }

  useEffect(() => {!upcomingMovie && getUpcomingMovie()},[])
}

export default useUpcomingMovie