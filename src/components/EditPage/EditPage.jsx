import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

function EditPage() {
    
	const dispatch = useDispatch();
	const history = useHistory();
	const thisLog = useSelector((store) => store.thisExerciseLogReducer);
	console.log('thisLog:', thisLog);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit', thisLog);
        dispatch({ type: 'EDIT_THIS_EXERCISE_LOG', payload: thisLog });


        history.push('/LogHistoryPage');

    }
    const changeReps = (e) => {
     console.log('updated reps:', e.target.value);
     dispatch({ type: 'EDIT_REPS_ONCHANGE', payload: {property: 'reps', value: e.target.value} });

    }

	return (
		<main className='flex-container'>
			<div className='flex-child inputs'>
				{/* map through the exercise number inputs the same way i mapped through the above */}
				<form onSubmit={handleSubmit}>
					{/* pushups */}
					<div className='numInput-container'>
						<label>Reps:</label>
						<input
                            defaultValue={thisLog.reps}
							type='number'
							className='exercise'
							onChange={(e) => changeReps(e)}
						/>
						<br></br>
					</div>
					<p>Date: {thisLog.date}</p>
					<button type='submit'>Submit!</button>
				</form>
			</div>
		</main>
	);
}

export default EditPage;
