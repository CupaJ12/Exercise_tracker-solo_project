// this component will show all previous exercise logs for the user, with an edit and delete button for each. the logs will display in a table or list format. the edit button will take the user to the input page with the inputs prepopulated with the current info, and the delete button will delete the log from the database. there will be a logout button at the top. the user will be able to click three dots at the bottom to expand the list and view more logs. there will be a button at the bottom that takes the user to the input page to add a new exercise.
import React from 'react';
import './LogHistoryPage.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function LogHistory(props) {
	// declare constants, import reducers etc.
	//
	// logArray is the array of objects that contains all the exercise logs for the user
	const logArray = useSelector((store) => store.exerciseLogReducer);
	const [exercise, setExercise] = useState('');

	console.log('logArray:', logArray);
	//
	// import exerciseReducer to get the exercise names
	const exerciseReducer = useSelector((store) => store.exerciseReducer);
	//
	const logByDate = useSelector((store) => store.logByDateReducer);
	console.log('logByDate:', logByDate);
	const dispatch = useDispatch();
	//
	const history = useHistory();
	//
	const handleClick = () => {
		history.push('/InputPage');
	};
	//
	useEffect(() => {
		dispatch({ type: 'FETCH_EXERCISE_LOG' });
		// dispatch({ type: 'SET_EXERCISE_LOG_BY_DATE' });
		// dispatch({ type: 'FETCH_EXERCISES' });
	}, []);
	// function to run on click of the delete button
	const handleDelete = (log) => {
		dispatch({ type: 'DELETE_EXERCISE_LOG', payload: { id: log.id } });
	};
	// function to run on click of the edit button, prepopulates the input page with the already inputted info stored in the database

	function handleEdit(log) {
		// dispatch({ type: 'EDIT_EXERCISE' });
		// console.log('log:',log);
		// console.log('555555555');

		console.log('in handleEdit', log);
		// dispatch({ type: 'SET_EXERCISE_LOG_BY_DATE', payload: logArray})
		dispatch({ type: 'SET_THIS_EXERCISE_LOG', payload: log });
		// console.log('444444444');
		history.push('/EditPage');
		// console.log('777-3');
		// const pushups = document.getElementsByClassName('pushups')[0];
		// console.log(document.getElementsByClassName('pushups')[0]);

		// console.log('1212');
		// console.log('222222222222');
		// pushups.value = log.reps;
		// console.log('1111111111111');
	}

	if (!logArray) {
		return <p>loading...</p>;
	}

	return (
		<main className='main'>
			<div>
				<h1>Log History💪</h1>
			</div>

			<div className='new_attempt'>
				{logArray.map((exercise) => {
					<div>
						<p>{exercise}</p>
						<p>exercise^</p>
					</div>;
				})}
			</div>
			<div>
				<table>
					<tr>
						<th>Date</th>

						<th>exercise</th>
						<th>reps</th>
						<th>edit</th>
						<th>delete</th>
					</tr>

					{/* grab rep count from the log table which is stored in the exerciseLog reducer imported as logArray*/}
					{logArray.map((log) => {
						return (
							<tr key={log.date}>
								<td>{log.date.slice(0, 10)}</td>

								{log.exercise_ID == 1 && <td>Pushups:</td>}
								{log.exercise_ID == 2 && <td>Situps:</td>}
								{log.exercise_ID == 3 && <td>Planks:</td>}
								<td>{log.reps}</td>
								<td>
									<button onClick={() => handleEdit(log)}>Edit</button>
								</td>
								<td>
									<button onClick={() => handleDelete(log)}>Delete</button>
								</td>
							</tr>
						);
					})}
				</table>
			</div>
			<div>
				<button onClick={() => handleClick()}>Add new exercise</button>
			</div>
			{/* <div className='logContainer'>
				<div className='logContainerTitle'>
					<div className='dateContainer'>
						<p>Date</p>
						<p>1/2/3</p>
					</div>
					<div className='buttonContainer'>
						<button className='editButton'>Edit</button>
						<button className='deleteButton'>Delete</button>
					</div>
				</div>
				<div className='logContainerBody'>
					{logArray.reps > 0 && (
						<div>
							<p>Pushups</p>
							<p>{logArray.reps}</p>
						</div>
					)}
					{logArray.reps > 0 && (
						<div>
							<p>Situps</p>
							<p>{logArray.reps}</p>
						</div>
					)}
					{
						<div>
							<p>Planks</p>
							<p>{logArray.reps}</p>
						</div>
					}
					{logArray.reps > 0 && (
						<div>
							<p>Supermans</p>
							<p>{logArray.reps}</p>
						</div>
					)}
					{logArray.reps > 0 && (
						<div>
							<p>Pullups</p>
							<p>{logArray.reps}</p>
						</div>
					)}
					{true && (
						<div className='jumpingJacksContainer'>
							<p className='exerciseName'>Jumping Jacks</p>
							<p className='exerciseReps'>5🤪</p>
						</div>
					)}
					{true && (
						<div className='jumpingJacksContainer'>
							<p className='exerciseName'>Jumping Jacks</p>
							<p className='exerciseReps'>5</p>
						</div>
					)}
					{true && (
						<div className='jumpingJacksContainer'>
							<p className='exerciseName'>Jumping Jacks</p>
							<p className='exerciseReps'>5</p>
						</div>
					)}
					{true && (
						<div className='jumpingJacksContainer'>
							<p className='exerciseName'>Jumping Jacks</p>
							<p className='exerciseReps'>5</p>
						</div>
					)}
					{true && (
						<div className='jumpingJacksContainer'>
							<p className='exerciseName'>Jumping Jacks</p>
							<p className='exerciseReps'>5</p>
						</div>
					)}
				</div>
			</div> */}
		</main>
	);
}

export default LogHistory;
