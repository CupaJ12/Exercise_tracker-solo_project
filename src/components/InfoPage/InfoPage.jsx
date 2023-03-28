import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
	return (
		<div className='container'>
			<h3>Info Page</h3>
			<p>
				this app was created through the use of the following technologies:
				<ul>
					<li>React</li>
					<li>Redux</li>
					<li>Node</li>
					<li>POSTGRESQL</li>
					<li>Passport</li>
					<li>HTML</li>
					<li>CSS</li>
				</ul>
			</p>
		</div>
	);
}

export default InfoPage;
