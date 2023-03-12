// this page will contain a checklist for every exercise completed, a series of number inputs, a date input that defaults to current date, a button that takes you to the previous log page, and a submit button that takes you to the celebration page.
import React from 'react';
import './InputPage.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';

function InputPage() {
	const getExercisesReducer = useSelector(
		(store) => store.exerciseReducer
	);

	useEffect(() => {
		dispatch({ type: 'FETCH_EXERCISES' });
	}, []);
	console.log(getExercisesReducer);
	// declare constants, import reducers etc.
	const dispatch = useDispatch();
	// handle select for the checklist
	const handleSelect = (event) => {
		const value = event.target.value;
		const isChecked = event.target.checked;

		if (isChecked) {
			//Add checked item into checkList
			setCheckedList([...checkedList, value]);
		} else {
			//Remove unchecked item from checkList
			const filteredList = checkedList.filter((item) => item !== value);
			setCheckedList(filteredList);
		}
	};

	const [checkedList, setCheckedList] = useState([]);

	const listData = [
		{ getExercisesReducer },
		{ id: '2', value: 'exercise2' },
		{ id: '3', value: 'exercise3' },
		{ id: '4', value: 'exercise4' },
		{ id: '5', value: 'exercise5' },
		{ id: '6', value: 'exercise6' },
	];

	// let currentDate = new Date();
	// console.log(currentDate);
	// let date = currentDate.getDate();
	const history = useHistory();

	// const handleClick = () => {
	// history.push('/LogHistory');
	// }
	const handleSubmitTwo = () => {
		history.push('/LogHistory');
	};
	const handleSubmit = () => {
		history.push('/CelebrationPage');
		dispatch({
			type: 'INPUT_EXERCISE',
			payload: {
				// exercise1: exercise1,
				// exercise2: exercise2,
				// exercise3: exercise3,
				// exercise4: exercise4,
				// exercise5: exercise5,
				// date: date
			},
		});
	};

	// access the data from the reducer
	// map through the data and display it in the checklist

	return (
		<main className='flex-container'>
			<div className='flex-child checklist'>
				<h2>Checklist</h2>
				{/* mapping through the exercises retrieved from the reducer */}
				{getExercisesReducer.map((item, index) => {
					return (
						<div key={item.id} className='checkbox-container'>
							<input
								type='checkbox'
								name='exercises'
								value={item.value}
								onChange={handleSelect}
							/>
							<label>{item.name}</label>
						</div>
					);
				})}
			</div>
			<div className='flex-child inputs'>
				{/* map through the exercise number inputs the same way i mapped through the above */}

				{getExercisesReducer.map((item, index) => {
					return (
						<div key={item.id} className='numInput-container'>
							<label>{item.name}</label>
							<input type='number' className={item.value} />
							<br></br>
						</div>
					);
				})}
				<label>Date</label>
				<input type='date' className='date' />
				<button type='submit' onClick={() => handleSubmitTwo()}>
					Previous Logs
				</button>
			</div>
			<div>
				<button onClick={() => handleSubmit()}>Submit</button>
			</div>
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
