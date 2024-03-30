import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const GptSuggestions = () => {
  const gpt=useSelector(store => store.gpt);

  const {movieResults , movieNames}=gpt;


  return (
    <div>
      {movieNames && <div className="p-4 m-4 md:-mt-32 bg-black bg-opacity-80">
        {movieNames?.map((movieName,index)=> <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>)}
      </div>}
    </div>
  )
}

export default GptSuggestions
