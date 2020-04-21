import * as actionTypes from './actionTypes';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

export const incrementFive = (val) => {
    return {
        type: actionTypes.INCREMENT_FIVE,
        value: val
    };
};

export const subtractFive = (val) => {
    return {
        type: actionTypes.SUBTRACT_FIVE,
        value: val
    };
};