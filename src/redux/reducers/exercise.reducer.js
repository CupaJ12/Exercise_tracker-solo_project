// this reducer will hold the exercises the user created in the inputPage

const exerciseReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_EXERCISES':
        return action.payload;
        default:
        return state;
    }
}

export default exerciseReducer;