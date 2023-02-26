
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- table for exercises: rows: id, name, user_id
CREATE TABLE "exercise" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "user_id" INTEGER REFERENCES "user" ("id")
);
-- table for exercise logs rows: id, user_id, exercise_id, date, reps
CREATE TABLE "log"(
	"id" serial primary key,
	"user_id" int references "user".id,
	"exercise_id" int references "exercise".id,
	"date" date default current_timestamp,
	"reps" int
);