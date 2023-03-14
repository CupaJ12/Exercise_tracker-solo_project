const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// this gets all exercises from the exercise table
router.get('/', (req, res) => {
	let queryText = `SELECT * FROM "exercise"
  where "user_id" = $1;`;
	pool
		.query(queryText, [req.user.id])
		.then((result) => {
			res.send(result.rows);
			console.log(result.rows);
		})
		.catch((error) => {
			console.log('Error completing SELECT exercise query', error);
			res.sendStatus(500);
		});
});

// delete Route for specific exercise clicked in logPage, connected to delete button and delete saga
router.delete('/:id', (req, res) => {
	let queryText = `DELETE FROM "log" WHERE "id" = $1;`;
	pool
		.query(queryText, [req.params.id])
		.then((result) => {
			console.log('delete result', result);
			res.sendStatus(200);
		})
		.catch((error) => {
			console.log('Error completing DELETE exercise query:', error);
			res.sendStatus(500);
		});
});

// get Route for exercise log history from database, connected to logHistory saga
router.get('/logHistory', (req, res) => {
	let queryText = `SELECT * FROM "log"
	  where "user_id" = $1;`;
	pool
		.query(queryText, [req.user.id])
		.then((result) => {
			res.send(result.rows);
			console.log(result.rows);
		})
		.catch((error) => {
			console.log('Error completing SELECT exercise query', error);
			res.sendStatus(500);
		});
});

// post Route for exercise input from inputPage, inputs the logged exercise into the log table. connected to inputExercise saga

// test the below, weird method of += to add to queryText

router.post('/', (req, res) => {
	let queryText = `INSERT INTO "log" ( "user_id","exercise_id", "date", "reps") VALUES ($1, $2, $3, $4);`;
	pool
		.query(queryText, [
			req.user.id,
			req.body.exercise_id,
			req.body.date,
			req.body.reps,
		])
		.then((result) => {
			res.sendStatus(201);
		})
		.catch((error) => {
			console.log('Error completing POST exercise query', error);
			res.sendStatus(500);
		});
});

//


module.exports = router;
