import MovieCard from "./MovieCard"

const MovieList = ({title,movies}) => {
    // console.log(movies);
  return (
    <div className=" p-4 " >
        <h1 className="text-white py-5 text-3xl">{title}</h1>
        <div className="flex overflow-x-scroll example">
            <div className="flex">
                {movies?.map((movie)=> <MovieCard  key={movie.id} Poster={movie.poster_path} />)}
            </div>
        </div>
    </div>
  )
}

export default MovieList
