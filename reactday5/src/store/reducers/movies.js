import { GET_MOVIES, GET_MOVIE } from "../actions/movies";

const INITIAL_STATE = {
    movies: [],
    movie: {}
}

export default function movies(state = INITIAL_STATE, action){


    switch(action.type){
        case GET_MOVIES:
            console.log(action.payload?.results);
            return {
                ...state,
                movies: action.payload.results
            };
        case GET_MOVIE:
            return {
                ...state,
                movie: action.payload
            };
        default:
            return state;
    }
}