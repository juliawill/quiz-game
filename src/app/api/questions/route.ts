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