const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// this gets all exercises from the exercise table

// router.get('/', (req, res) => {
// 	let queryText = `SELECT * FROM "exercise"
//   where "user_id" = $1;`;
// 	pool
// 		.query(queryText, [req.user.id])
// 		.then((result) => {
// 			res.send(result.rows);
// 			console.log(result.rows);
// 		})
// 		.catch((error) => {
// 			console.log('Error completing SELECT exercise query', error);
// 			res.sendStatus(500);
// 		});
// });

// delete Route for specific exercise clicked in logPage, connected to delete button and delete saga
router.delete('/:id', (req, res) => {
	let queryText = `DELETE FROM "log" WHERE "id" = $1;`;
	pool
		.query(queryText, [req.params.id])
		.then((result) => {
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
	  where "user_ID" = $1;`;
	pool
		.query(queryText, [req.user.id])
		.then((result) => {
			res.send(result.rows);
			
		})
		.catch((error) => {
			console.log('Error completing SELECT exercise query', error);
			res.sendStatus(500);
		});
});

// post Route for exercise input from inputPage, inputs the logged exercise into the log table. connected to inputExercise saga

// exerciseLog = {
// 	pushupID,
// 	pushupReps: pushups,
// 	situpID,
// 	situpReps: situps,
// 	plankID,
// 	plankReps: planks,

// }
router.post('/', (req, res) => {
	
	let userID = req.user.id;
	let pushupReps = req.body.pushupReps;
	let situpReps = req.body.situpReps;
	let plankReps = req.body.plankReps;
	let date = req.body.date;
	
	let queryText = `INSERT INTO "log" ( "user_ID","exercise_ID", "date", "reps") VALUES ($1, 1, $2, $3), ($1, 2, $2, $4), ($1, 3, $2, $5);`;
	// If you had more than 5 or 10 workout types, async await would be better
	pool
		.query(queryText, [userID, date, pushupReps, situpReps, plankReps])
		.then((result) => {
			res.sendStatus(201);
		})
		.catch((error) => {
			console.log('Error completing POST exercise query', error);
			res.sendStatus(500);
		});
});

router.get('/:date', (req, res) => {
	// TODO: return array of logs by date (this should return an array of three items).
});

//put Route for updating exercise log history from database, connected to updateLog saga

router.put('/', (req, res) => {
	console.log('put router');
	// TODO: Pass the following via req.body
	// logIdPushup, logIdSitup, logIdPlank, date, pushupReps, situpReps, plankReps

	// Using an insert to allow updating multiple rows at once
	let queryText = `
		INSERT INTO "log" ( "id", "date", "reps")
		VALUES ($1, $4, $5),
			   ($2, $4, $6),
			   ($3, $4, $7)
		ON CONFLICT (id)
		DO UPDATE SET date = EXCLUDED.date,
				      reps = EXCLUDED.reps;`;
		// id is the id of the log!
		pool
		.query(queryText, [logIdPushup, logIdSitup, logIdPlank, date, pushupReps, situpReps, plankReps])
		.then((result) => {
			res.sendStatus(201);
		})
		.catch((error) => {
			console.log('Error completing POST exercise query', error);
			res.sendStatus(500);
		});
})

module.exports = router;
