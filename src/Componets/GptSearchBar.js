import { useSelector } from "react-redux"
import lang from "../Utils/LangConstants"


const GptSearchBar = () => {
    const langKey=useSelector((store)=> store.config.lang)
  return (
    <div className="p-[9%] flex justify-center opacity-90">
      <form className="w-6/12 bg-black grid grid-flow-col grid-cols-12">
        <input type="text" 
            placeholder={lang[langKey].gptSearchPlaceholder}
            className="p-4 m-4 col-span-9"
        ></input>
        <button 
        className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-md"
        >{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
