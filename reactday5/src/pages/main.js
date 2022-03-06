import MovieList from "../components/movie-list";

export default function MainPage(){
    return (
        <div className="row row-cols-4 justify-content-evenly">
            <MovieList/>
        </div>
    )
}