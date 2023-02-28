// this page will contain a checklist for every exercise completed, a series of number inputs, a date input that defaults to current date, a button that takes you to the previous log page, and a submit button that takes you to the celebration page.
import React from 'react';
import './InputPage.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';

function InputPage() {
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
		{ id: '1', value: 'exercise1' },
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

	return (
		<main className='flex-container'>
			<div>
				<h1>Input Page</h1>
			</div>
			<div className='flex-child checklist'>
				<h2>Checklist</h2>
				<ul>
					<li>Exercise 1</li>
					<li>Exercise 2</li>
					<li>Exercise 3</li>
					<li>Exercise 4</li>
					<li>Exercise 5</li>
				</ul>
			</div>
			<div className='flex-child inputs'>
				<h2>Number Inputs</h2>
				{/* new way of displaying exercises below: */}
				{/* checklist below */}
				{listData.map((item, index) => {
					return (
						<div key={item.id} className='checkbox-container'>
							<input
								type='checkbox'
								name='exercises'
								value={item.value}
								onChange={handleSelect}
							/>
							<label>{item.value}</label>
						</div>
					);
				})}

			
				

				;{/* old way of displaying exercises below: */}
				{/* <label>Exercise 1</label>
					<input type='number' className='exercise1' />
					<label>Exercise 2</label>
					<input type='number' className='exercise2' />
					<label>Exercise 3</label>
					<input type='number' className='exercise3' />
					<label>Exercise 4</label>
					<input type='number' className='exercise4' />
					<label>Exercise 5</label>
					<input type='number' className='exercise5' /> */}
				<label>Date</label>
				<input type='date' className='date' />
				<button type='submit' onClick={() => handleSubmitTwo()}>
					Previous Logs
				</button>
			</div>
			<div>
				<h2>Date Input</h2>
			</div>
			<div>
				<button onClick={() => handleSubmit()}>Submit</button>
			</div>
		</main>
	);
}

export default InputPage;
