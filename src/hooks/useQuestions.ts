import { Question } from "@/app/api/questions/route";
import { useQuery } from "@tanstack/react-query";

export function useQuestions() {
    return useQuery({
        queryKey: ["questions"],
        queryFn: async () => {
            const response = await fetch("http://localhost:3000/api/questions");
            const data = await response.json() as Question[];
            return data;
        }
    })
}