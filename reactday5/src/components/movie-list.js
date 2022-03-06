import MovieCard from "./movie-card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../store/actions/movies";


function MovieList() {

    const cards = useSelector((state)=> state.movies.movies );
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(getMovies());

    }, []);

    return (
        <>

            {cards.map((card) => {
                return <div className="col m-3" key={card.id}>
                    <MovieCard cardDetails={card}  />
                </div>
            })}
            
        </>
    )
}

export default MovieList;