CREATE TABLE IF NOT EXISTS "questions" (
	"id" serial PRIMARY KEY NOT NULL,
	"category" varchar(255) NOT NULL,
	"question" text NOT NULL,
	"options" jsonb NOT NULL,
	"answer" varchar(255) NOT NULL
);
