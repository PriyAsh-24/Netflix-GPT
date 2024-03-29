import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../Utils/movieSlic";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants"

const useMovieTrailer = (movieId)=>{
    const dispatch=useDispatch();

  const getVideoTrailer=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId +'/videos?language=en-US', API_OPTIONS)

    const json=await data.json();
    // console.log(json.results);

    const filterData=json.results.filter((video) => video.type==="Trailer");
    const trailer=filterData.length? filterData[0] : json.results[0];
    // console.log(trailer)
    dispatch(addMovieTrailer(trailer));


  }

  useEffect(()=>{
    getVideoTrailer();
  },[])
}

export default useMovieTrailer