// this page will contain a checklist for every exercise completed, a series of number inputs, a date input that defaults to current date, a button that takes you to the previous log page, and a submit button that takes you to the celebration page.
import React from 'react';
import './InputPage.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';

function InputPage() {
	const getExercisesReducer = useSelector((store) => store.exerciseReducer);
	const [pushups, setPushups] = useState(0);
	const [situps, setSitups] = useState(0);
	const [planks, setPlanks] = useState(0);
	const [date, setDate] = useState('');

	useEffect(() => {
		// TODO: Reference movie saga example for edit
		// dispatch({ type: 'FETCH_EXERCISES' });
		//dispatch to do a get request by date, return an array of 3 exercise logs, use those to prepopulate the input fields
		dispatch({ type: '' });
	}, []);

	
	// declare constants, import reducers etc.
	const dispatch = useDispatch();
	const history = useHistory();

	const handleSubmitTwo = () => {
		history.push('/LogHistory');
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const exerciseLog = {
			pushupReps: pushups,
			situpReps: situps,
			plankReps: planks,
			date,
		}
		dispatch({
			type: 'INPUT_EXERCISE',
			payload: exerciseLog,
		});
	
		history.push('/CelebrationPage');
	};

	return (
		<main className='formPanel'>
			<div className='flex-child inputs'>
				{/* map through the exercise number inputs the same way i mapped through the above */}
				<form onSubmit={handleSubmit}>
				{/* pushups */}
				<div className='numInput-container'>
								<label>pushups</label>
								<input
									type='number'
									className='pushups'
									onChange={(e) => setPushups(e.target.value)}
								/>
								<br></br>
							</div>
							{/* situps */}
							<div className='numInput-container'>
								<label>situps</label>
								<input
									type='number'
									className='situps'
									onChange={(e) => setSitups(e.target.value)}
								/>
								<br></br>
							</div>
							{/* planks */}
							<div  className='numInput-container'>
								<label>planks</label>
								<input
									type='number'
									className='planks'
									onChange={(e) => setPlanks(e.target.value)}
								/>
								<br></br>
							</div>
							<button type='submit' >Submit!</button>
							</form>
				{/* {getExercisesReducer.map((item, index) => {
					return (
						<form onSubmit={(e) => formSubmit()}>
							<select name='exercise' id='exercise' 
							onChange={(e) => selectHandler(e.target.value) }>
								<option value='pushups'>Pushups</option>
								<option value='situps'>Situps</option>
								<option value='planks'>Planks</option>
							</select>
						
							<div key={item.id} className='numInput-container'>
								<label>{item.name}</label>
								<input
									type='number'
									className={item.value}
									onChange={(e) => setPushups(e.target.value)}
								/>
								<br></br>
							</div>
						</form>
					);
				})} */}

				<label>Date</label>
				<input type='date' className='date' onChange= {(e) => setDate(e.target.value)}/>
				{/* make type date^ */}
				<button type='submit' onClick={() => handleSubmitTwo()}>
					Previous Logs
				</button>
			</div>
			{/* <div>
				<button onClick={() => handleSubmit()}>Submit</button>
			</div> */}
		</main>
	);
}

export default InputPage;

// {/* <section className=“movieDetails”>
//                 <h3>Genres:</h3>
//             {/* Map through genres to be rendered on the DOM */}
//                 {genres.map((genre, i) => (
//                     <h3 key={i}>{genre.name}</h3>
//                 ))}
//                 {movies.map((movie) => {
//                     return (
//                         <div key={movie.id} >
//                             <section className=‘details’>
//                                 <h3>{movie.title}</h3>
//                                 <img src={movie.poster} alt={movie.title}/>
//                                 <h4>{movie.description}</h4>
//                             </section>
//                             <SubmitButton />
//                         </div>
//                     );
//                 })}
//             </section> */}
