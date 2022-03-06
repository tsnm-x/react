import { GET_MOVIES, GET_MOVIE } from "../actions/movies";

const INITIAL_STATE = {
    movies: [],
    movie: {}
}

export default function movies(state = INITIAL_STATE, action){

    // console.log(action.payload);

    switch(action.type){
        case GET_MOVIES:
            return {
                ...state,
                movies: [action.payload]
            }
        case GET_MOVIE:
            return {
                ...state,
                movie: action.payload
            }
        default:
            return state;
    }
}