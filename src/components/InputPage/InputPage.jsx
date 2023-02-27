// this page will contain a checklist for every exercise completed, a series of number inputs, a date input that defaults to current date, a button that takes you to the previous log page, and a submit button that takes you to the celebration page.
import React from 'react';
import './InputPage.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function InputPage() {
	// declare constants, import reducers etc.
    let currentDate = new Date();
	return (
		<main class='flex-container'>
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
				<button>Previous Logs</button>
				<button>Submit</button>
			</div>
		</main>
	);
}

export default InputPage;
