import MovieCard from "./movie-card";
import { useContext, useEffect } from "react";
import "./movie-list.css"
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../store/actions/movies";
import { LanguageChanger } from "../context/languageChanger";


function MovieList() {
    const {language} = useContext(LanguageChanger);
    const cards = useSelector((state)=> state.movies.movies );
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(language);
        dispatch(getMovies(language));

    }, [language]);

    return (
        <>

            <div className="row row-cols-4 justify-content-evenly">
                {cards.map((card) => {
                    return <div className="col m-3" key={card.id}>
                        <MovieCard cardDetails={card}  />
                    </div>
                })}
            </div>
            
        </>
    )
}

export default MovieList;