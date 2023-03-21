// page to congradulate the user for completing their workout, shows the number of workouts completed, and a button that takes you to the previous logs page.
import React from 'react';
import './CelebrationPage.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
function CelebrationPage() {
	// declare constants, import reducers etc.
	const dispatch = useDispatch();
	const history = useHistory();
	const handleClick = () => {
		history.push('/LogHistoryPage');
	};
	return (
		<main>
			<div>
				<h1>Congratulations!</h1>
			</div>
			<div>
				<h2>💪Great job on your workout!💪</h2>
			</div>
			<div>
				<button onClick={() => handleClick()}>Log history</button>
			</div>
		</main>
	);
}

export default CelebrationPage;
