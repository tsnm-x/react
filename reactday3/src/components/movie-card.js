import { Link } from "react-router-dom";

function MovieCard(props) {
    const {cardDetails} = props;
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
                </div>
            </div>
        </>
    )
}

export default MovieCard;