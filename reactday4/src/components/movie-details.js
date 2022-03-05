import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInst from "../network/axiosConfig";

function MovieDetails() {
    const [movieDetails, setMovieDetails] = useState({})
    const param = useParams();
    useEffect(() => {
        axiosInst
            .get(`/${param.id}?api_key=24ff1b5a2c9c6d1a26d71db19bb7ac88`)
            .then((res) => {
                console.log(res.data);
                setMovieDetails(res.data)
            })
            .catch(e => { console.log(e) });
    }, [])
    return (
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title my-4">{movieDetails.title}</h1>
                            <p className="card-text h4 mb-5">{movieDetails.overview}</p>
                            <p className="card-text mb-2">{movieDetails.original_title}</p>
                            <p className="card-text mb-2">Rate: {movieDetails.vote_average}</p>
                            <p className="card-text mb-2">Votes: {movieDetails.vote_count}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MovieDetails;