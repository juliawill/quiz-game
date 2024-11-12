// import { Pool } from "pg"; // PostgreSQL client

// Create a connection pool to PostgreSQL
/*
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT) || 5432,
});
*/

export type Question = {
    id: number;
    question: string;
    category: QuestionCategory;
    options: string[];
    answer: string;
}

export type QuestionCategory = "Geography" | "Math";

export const GET = (request: Request) => {
    const questions: Question[] = [
        {
            id: 1,
            category: "Geography",
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Lisbon"],
            answer: "Paris"
        },
        {
            id: 2,
            category: "Math",
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: "4"
        },
    
     // postgresql
     // sql drizzle
     
    ];

    return Response.json(questions);
}