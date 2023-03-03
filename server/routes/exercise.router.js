const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

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

// delete Route for specific exercise clicked from database, connected to delete button and delete saga
router.delete('/:id', (req, res) => {
	let queryText = `DELETE FROM "exercise" WHERE "id" = $1;`;
	pool
		.query(queryText, [req.params.id])
		.then((result) => {
			res.sendStatus(200);
		})
		.catch((error) => {
			console.log('Error completing DELETE exercise query', error);
			res.sendStatus(500);
		});
});



module.exports = router;
