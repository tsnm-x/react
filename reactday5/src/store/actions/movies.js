import axiosInst from "../../network/axiosConfig";

export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE = "GET_MOVIE"

export const getMovies = () => (dispatch) => {
    return axiosInst
    .get("/popular?api_key=24ff1b5a2c9c6d1a26d71db19bb7ac88")
    .then((res)=>{

        console.log(res);

        dispatch({
            type: GET_MOVIES,
            payload: res.data.results
        });
        
    }).catch((e)=>{
        console.log(e);
    })
}

export const getOneMovie = (id) => (dispatch) =>{
    axiosInst.get(`/${id}?api_key=24ff1b5a2c9c6d1a26d71db19bb7ac88`)
    .then((res)=>{
        console.log(res);
        dispatch({
            type:GET_MOVIE,
            payload: res.data 
        });
    }).catch((e)=> console.log(e));
}