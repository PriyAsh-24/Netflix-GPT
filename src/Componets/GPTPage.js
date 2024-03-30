import { BG_IMAGE } from "../Utils/Constants"
import GptSearchBar from "./GptSearchBar"
import GptSuggestions from "./GptSuggestions"

const GPTPage = () => {
  return (
    <div>
        <div className="absolute -z-10">
            <img className=""
            src={BG_IMAGE} 
            alt="BG">
            </img>
        </div>
      <GptSearchBar/>
      <GptSuggestions/>
    </div>
  )
}

export default GPTPage
