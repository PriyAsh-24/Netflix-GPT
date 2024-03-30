import { useDispatch, useSelector } from "react-redux"
import lang from "../Utils/LangConstants"
import { useRef } from "react"
import openai from "../Utils/openAi";
import { API_OPTIONS } from "../Utils/Constants";
import { addGptMovieResult } from "../Utils/gptSlice";


const GptSearchBar = () => {
    const langKey=useSelector((store)=> store.config.lang)
    const searchText=useRef(null)
    const dispatch=useDispatch();

    const searchMovieTMDB =async  (movie)=>{
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS)

      const json=await data.json();

      return json.results;
    }

    const handleGptSearchClick=async ()=>{
      console.log(searchText.current.value)

      //Make a API call to open Ai to get Movie Results

      const gptQuery="Act as a Movie Recomendation system and suggest some movies for the query :" + searchText.current.value +" . only give me names of 5 movies , comma seperated like the example result given ahead . Example Result : Gadar, Sholay , Don, Golmaal, Koi Mil Gaya "

      // const gptResults = await openai.chat.completions.create({
      //   messages: [{ role: 'user', content: gptQuery }],
      //   model: 'gpt-3.5-turbo',
      // });

      // console.log(gptResults.choices?.[0]?.message?.content); // this will give us a string

      // const gptMovies=gptResults.choices?.[0]?.message?.content.split(", ");

      const dummyString ="Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaron, Padosan"

      const gptMovies=dummyString.split(", ");

      const promiseArray = gptMovies.map((movie)=> searchMovieTMDB(movie));

      const tmdbResults= await Promise.all(promiseArray);

      console.log(tmdbResults);

      dispatch(addGptMovieResult({movieNames : gptMovies, movieResults: tmdbResults}))
}

  return (
    <div className="p-[9%] flex justify-center opacity-90">
      <form className="w-6/12 bg-black grid grid-flow-col grid-cols-12" onSubmit={(e)=>{e.preventDefault();}} >
        <input 
            ref={searchText}
            type="text" 
            placeholder={lang[langKey].gptSearchPlaceholder}
            className="p-4 m-4 col-span-9"
        ></input>
        <button 
        className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-md"
        onClick={handleGptSearchClick}
        >{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
