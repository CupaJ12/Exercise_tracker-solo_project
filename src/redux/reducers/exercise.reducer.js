// this reducer will hold the exercises the user created in the inputPage
import { combineReducers } from 'redux';


const exerciseReducer = (state = [], action) => {
    switch (action.type) {
        case 'INPUT_EXERCISE':
        return action.payload;
        default:
        return state;
    }
}

export default combineReducers({
    exerciseReducer
});