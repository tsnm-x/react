import MovieCard from "./movie-card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getOneMovie } from "../store/actions/movies";
import { setFavoriteItems } from "../store/actions/fav";


function MovieList() {

    const cards = useSelector((state)=> state);
    console.log(cards);
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(setFavoriteItems());

    }, []);




    return (
        <>
            <div className="row row-cols-4 justify-content-evenly">
                {/* {cards.map((card) => {
                    return <div className="col m-3" key={card.id}>
                        <MovieCard cardDetails={card}  />
                    </div>
                })} */}
                <div>{cards}</div>
            </div>
        </>
    )
}

export default MovieList;