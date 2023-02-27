// this page will contain a checklist for every exercise completed, a series of number inputs, a date input that defaults to current date, a button that takes you to the previous log page, and a submit button that takes you to the celebration page.
import React from 'react';
import './InputPage.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function InputPage() {
	// declare constants, import reducers etc.
    const dispatch = useDispatch();
    let currentDate = new Date();
    console.log(currentDate);
    const history = useHistory();
    const handleClick = () => {
        history.push('/LogHistoryPage');
    }
    const handleSubmit = () => {
        history.push('/CelebrationPage');
        dispatch ({
            type: 'INPUT_EXERCISE',
            payload: {
                // exercise1: exercise1,
                // exercise2: exercise2,
                // exercise3: exercise3,
                // exercise4: exercise4,
                // exercise5: exercise5,
                // date: date
            }
        })
    }

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
				<form>
					<label>Exercise 1</label>
					<input type='number' className='exercise1' />
					<label>Exercise 2</label>
					<input type='number' className='exercise2' />
					<label>Exercise 3</label>
					<input type='number' className='exercise3' />
					<label>Exercise 4</label>
					<input type='number' className='exercise4' />
					<label>Exercise 5</label>
					<input type='number' className='exercise5' />
				</form>
			</div>
			<div>
				<h2>Date Input</h2>
				<form>
					<label>Date</label>
					<input type='date' className='date' placeholder= {currentDate} />
                    {/* maybe onfocus, get date on focus */}
				</form>
			</div>
			<div>
				<button onClick={handleClick()}>Previous Logs</button>
				<button onClick={handleSubmit()}>Submit</button>
			</div>
		</main>
	);
}

export default InputPage;
