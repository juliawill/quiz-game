"use client";

import { type Question } from "@/app/api/questions/route"
import { ComponentPropsWithoutRef, useEffect, useState } from "react";

export interface QuizProps {
    questions: Question[];
    duration?: number;
}

export function Quiz({ questions, duration = 15 }: QuizProps) {
    const [complete, setComplete] = useState(false);
    const [points, setPoints] = useState(0);
    const [questionIdx, setQuestionIdx] = useState(0);

    const question = questions?.[questionIdx];

    const handleTimeout = () => {
        setComplete(true);
    }

    const handleSubmitAnswer = (answer: string) => {
        if (question.answer === answer) {
            setPoints(points + 1);
        }

        if (questionIdx < questions.length) {
            setQuestionIdx(questionIdx + 1);
        } else {
            setComplete(true);
        }
    }

    const handleReset = () => {
        setComplete(false);
        setPoints(0);
        setQuestionIdx(0);
    }

    return (
        <div className="space-y-3">
            <h1 className="text-center text-4xl font-bold">Quiz Game</h1>
            {(complete || !question) ? (
                <QuizScore points={points} totalQuestions={questions.length} reset={handleReset} />
            ) : (<Question
                question={question}
                duration={duration}
                onTimeout={handleTimeout}
                onSubmitAnswer={handleSubmitAnswer}
            />)}
        </div>
    )
}

function Question({ question, duration, onTimeout, onSubmitAnswer }: { question: Question; duration: number; onTimeout: () => void; onSubmitAnswer: (answer: string) => void; }) {
    const [timer, setTimer] = useState(duration);

    useEffect(() => {
        setTimeout(onTimeout, duration * 1000);
    }, [duration]);

    useEffect(() => {
        const t = setInterval(() => {
            setTimer(timer - 1);
        }, 1000);

        return () => clearInterval(t);
    }, [timer]);

    return (
        <div className="space-y-3">
            <div>
                <p className="text-center">{question.question}</p>
                <p className="text-center"><span className="font-bold">{timer}</span> seconds remaining</p>
            </div>
            {question.options.map(option => (
                <Button
                    key={option}
                    onClick={() => onSubmitAnswer(option)}
                >
                    {option}
                </Button>
            ))}
        </div>
    )
}

function QuizScore({ points, totalQuestions, reset }: { points: number; totalQuestions: number; reset: () => void; }) {
    return (
        <div className="text-center space-y-3">
            <p>Your Score: <span className="font-bold">{points}</span> out of {totalQuestions}</p>
            <Button onClick={reset}>Reset</Button>
        </div>
    )
}

function Button({ className, ...props }: ComponentPropsWithoutRef<"button">) {
    return (
        <button
            className={`flex w-full flex-col bg-white rounded-lg shadow-lg transition-colors border border-slate-200 h-12 text-center justify-center items-center px-3 hover:bg-slate-300 text-black flex-1 ${className}`}
            {...props}
        />
    )
}