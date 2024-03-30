import { BG_IMAGE } from "../Utils/Constants"
import GptSearchBar from "./GptSearchBar"
import GptSuggestions from "./GptSuggestions"

const GPTPage = () => {
  return (
    <div>
        <div className="fixed -z-10">
            <img className="h-screen object-cover md:h-auto sm:h-screen"
            src={BG_IMAGE} 
            alt="BG">
            </img>
        </div>
      <div className="">
          <GptSearchBar/>
          <GptSuggestions/>
      </div>
    </div>
  )
}

export default GPTPage
