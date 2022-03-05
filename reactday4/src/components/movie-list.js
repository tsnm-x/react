import MovieCard from "./movie-card";
import { useState, useEffect } from "react";
import axiosInst from '../network/axiosConfig';


function MovieList() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        axiosInst
            .get("/popular?api_key=24ff1b5a2c9c6d1a26d71db19bb7ac88")
            .then((res) => {
                console.log(res.data);
                setCards(res.data.results);
            })
            .catch(e => { console.log(e) })
    }, [])

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