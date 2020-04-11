import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.result })
            }
        case actionTypes.DELETE_RESULT:
            // const id = action.resultId;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            const updateResult = state.results.filter(result => result.id !== action.resultId) // returns a new array
            return {
                ...state,
                results: updateResult
            }
        default:
    }

    return state
};

export default reducer;