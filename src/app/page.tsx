"use client";

import { useQuestions } from "@/hooks/useQuestions";
import { Quiz } from "@/components/quiz";

export default function Home() {
  const { data = [], isLoading, error } = useQuestions();

  return (
    <div className="flex items-center justify-center size-full bg-gradient-to-br from-sky-400 to-blue-900">
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "There was an error fetching the data."
      ) : (
        <Quiz questions={data} />
      )}
    </div>
  )
}
