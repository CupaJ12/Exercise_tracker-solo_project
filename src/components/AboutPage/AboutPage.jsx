import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
	return (
		<div className='container'>
			<div>
				<h3>About Page:</h3>
				<p>
					This app was created by myself, Jaffer Muhawesh, as my solo project
					for Prime Digital Academy. <br></br>The purpose of this app is to
					provide a way for users to track their progress in a variety of
					exercises. The app is designed to be simple and easy to use. The user
					can create an account and then log their progress in the exercises of
					their choice. The user can also view their progress over time and see
					how they are improving.
				</p>
			</div>
		</div>
	);
}

export default AboutPage;
