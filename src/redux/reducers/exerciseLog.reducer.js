// this reducer will hold the exercise logs retrieved from the database for the logHistoryPage

const exerciseLogReducer = (state = [], action) => {
	switch (action.type) {
		case 'SET_EXERCISE_LOG':
			return action.payload;
		default:
			return state;
	}
};

export default exerciseLogReducer;
