//reducer to hold the logs for a specific date

const logByDateReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_EXERCISE_LOG_BY_DATE':
            return  action.payload;
        default:
            return state;
    }
}

export default logByDateReducer;

// { ...state},