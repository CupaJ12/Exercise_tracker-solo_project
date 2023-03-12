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
			res.sendStatus(200);
		})
		.catch((error) => {
			console.log('Error completing DELETE exercise query', error);
			res.sendStatus(500);
		});
	console.log('delete route hit');
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

module.exports = router;
