const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
	console.log(req.body);
	res.sendStatus(200);
	let queryText = `SELECT * FROM "exercise"
  where "user"."id" = $1;`;
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
