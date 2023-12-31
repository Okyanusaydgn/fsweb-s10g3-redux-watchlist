import { movies } from "../../movies";

const initialState = [...movies];

export const movieActions = {
    setMovieList: "SET_MOVIE_LIST"
};


export const movieReducer = (state=initialState, action) => {

    switch (action.type) {
        case movieActions.setMovieList:
            return action.payload;
        
        default:
            return state;
    }

}