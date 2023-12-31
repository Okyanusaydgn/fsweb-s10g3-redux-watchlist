import { combineReducers, legacy_createStore  as createStore } from "redux";
import { movieReducer } from "./reducers/movieReducer";
import { favoriReducer } from "./reducers/favoriReducer";
import logger from "redux-logger";
import { applyMiddleware } from "redux";

const reducers = combineReducers({
    movies: movieReducer,
    favorites: favoriReducer,
})


export const store = createStore(reducers, applyMiddleware(logger)); 