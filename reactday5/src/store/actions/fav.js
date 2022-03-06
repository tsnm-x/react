export const SET_FAVORITES = "SET_FAVORITES";

export function setFavoriteItems(payload){
    
    console.log('hello');
    return {
        type: SET_FAVORITES,
        payload
    }
}
