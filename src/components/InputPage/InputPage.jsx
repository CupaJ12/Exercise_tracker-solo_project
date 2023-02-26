// this page will contain a checklist for every exercise completed, a series of number inputs, a date input that defaults to current date, a button that takes you to the previous log page, and a submit button that takes you to the celebration page.
import React from 'react';
import './InputPage.css';

function InputPage() {
	// declare constants, import reducers etc.
 let date = new Date();
	return (
		<main>
			<div>
				<h1>Input Page</h1>
			</div>
			<div>
				<h2>Checklist</h2>
				<ul>
					<li>Exercise 1</li>
					<li>Exercise 2</li>
					<li>Exercise 3</li>
					<li>Exercise 4</li>
					<li>Exercise 5</li>
				</ul>
			</div>
			<div>
				<h2>Number Inputs</h2>
				<form>
					<label>Exercise 1</label>
					<input type='number' name='exercise1' />
					<label>Exercise 2</label>
					<input type='number' name='exercise2' />
					<label>Exercise 3</label>
					<input type='number' name='exercise3' />
					<label>Exercise 4</label>
					<input type='number' name='exercise4' />
					<label>Exercise 5</label>
					<input type='number' name='exercise5' />
				</form>
			</div>
			<div>
				<h2>Date Input</h2>
				<form>
					<label>Date</label>
					<input type='date' name='date' default= {date} />
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
