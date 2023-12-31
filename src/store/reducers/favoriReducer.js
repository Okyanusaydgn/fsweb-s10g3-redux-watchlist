
const initialState = [];

export const favoriActions = {
    setFavorites: "SET_FAVORITES",
    addFavorite: "ADD_FAVORITE",
    removeFavorite: "REMOVE_FAVORITE",
}

export const favoriReducer = (state = initialState, action) => {
    switch (action.type) {
        case favoriActions.setFavorites:
            return action.payload;

        case favoriActions.addFavorite:
            return [...state, action.payload];

        case favoriActions.removeFavorite:
            return state.filter((m) => m.id !== action.payload);
        
        default:
            return state;
    }
};