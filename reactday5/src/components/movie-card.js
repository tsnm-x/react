import { Link } from "react-router-dom";
import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { setFavoriteItems } from "../store/actions/fav";
import { useEffect } from "react";

function MovieCard(props) {
    
    const {cardDetails} = props;

    const [isSelected, setIsSelected] = useState(false);

    let favSet = useSelector((state) => state.fav.favs );
    const dispatch = useDispatch();

    const finder = favSet ? favSet.find((item) => item.id === cardDetails.id) : undefined;

    useEffect(()=>{

        if(finder){
            setIsSelected(true);
        }
    }, [])


    const addFavItem = () => {
        if (finder){
            setIsSelected(false);
            favSet = favSet.filter((item) => item.id !== cardDetails.id);
            dispatch(setFavoriteItems(favSet));
        } else {
            setIsSelected(true);
            favSet.push(cardDetails);
            dispatch(setFavoriteItems(favSet));

        }
        
    }

    return (
        <>
            <div className="card" style={{width: "21rem"}}>
                <img src={`https://image.tmdb.org/t/p/w500/${cardDetails.poster_path}`} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{ cardDetails.title }</h5>
                    <p className="card-text">{ cardDetails.original_title }</p>
                    <p className="card-text">{ cardDetails.overview }</p>
                    <p className="card-text">Rate: { cardDetails.vote_average }</p>
                    <Link to={`/movie-details/${cardDetails.id}`} className="btn btn-outline-primary mx-2">View Details</Link>
                    <button type="button" onClick={() => addFavItem()} className={`btn btn-outline-warning ${isSelected ? 'active' : ''}`}><i className={`bi bi-star ${isSelected ? 'text-light' : 'text-warning'}`}></i></button>
                </div>
            </div>
        </>
    )
}

export default MovieCard;