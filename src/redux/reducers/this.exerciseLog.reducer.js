// holds the specific exercise the user wants to edit, collected from the edit button on the logHistoryPage

function thisExerciseLogReducer(state = {}, action) {
	console.log('thisExerciseLogReducer action: ', action);
	if (action.type === 'SET_THIS_EXERCISE_LOG') {
        console.log('we made it to the set this exercise log part of the reducer', action.payload)
		return action.payload;
	} else if (action.type === 'EDIT_REPS_ONCHANGE') {
		console.log('EDIT ENTERED', action.payload);
		return {
			...state,
			[action.payload.property]: action.payload.value,
		};
	}
    console.log('oopsie')
	return state;
}

export default thisExerciseLogReducer;
