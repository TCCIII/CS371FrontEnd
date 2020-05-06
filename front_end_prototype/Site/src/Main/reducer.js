const initialState = {
    movies: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_MOVIES":
            return {
                ...state,
                movies: action.payload
            }
        default:
            return state
    }
}