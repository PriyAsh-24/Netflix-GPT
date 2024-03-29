import { IMAGE_CDN_URL } from "../Utils/Constants"

const MovieCard = ({Poster}) => {
  return (
    <div className="w-56 pr-3">
      <img src={IMAGE_CDN_URL + Poster} alt="Poster" ></img>
    </div>
  )
}

export default MovieCard
