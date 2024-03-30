import { API_OPTIONS } from '../Utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovie} from "../Utils/movieSlic"
import { useEffect } from 'react';

const useTopRatedMovie=()=>{
    const dispatch=useDispatch();
    const topRatedMovies=useSelector(store=> store.movies.topRatedMovie)

  const getTopRatedMovie=async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)

    const json= await data.json();
    // console.log(json.results);

    dispatch(addTopRatedMovie(json.results))
  }

  useEffect(() => {!topRatedMovies && getTopRatedMovie()},[])
}

export default useTopRatedMovie