import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { generateUniqueId, getRandomUser } from "hooks/useStaticDataMock";
import getQuestions, { FetchQuestionsParams } from "helpers/getQuestions";

export type Question = {
  id: number;
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
  createdBy?: string;
};

export const useQuestion = ({
  amount,
  category,
  difficulty,
  type,
}: FetchQuestionsParams) => {
  const params = {
    amount,
    category,
    difficulty,
    type,
  };

  const { data, isLoading } = useQuery({
    queryKey: ["questions", params],
    queryFn: () => getQuestions(params),
    placeholderData: keepPreviousData,
    staleTime: Infinity,
  });

  const dataUpdated = {
    results: [],
    error: {
      response_code: 0,
    },
    isLoading,
  };

  dataUpdated.results =
    !isLoading && data.results
      ? data.results.map((question: Question) => {
          const updatedQuestion = { ...question };
          updatedQuestion.id = generateUniqueId();
          updatedQuestion.createdBy = getRandomUser();
          return updatedQuestion;
        })
      : [];
  dataUpdated.error = data && data.response_code === 0 ? null : data;

  return { dataUpdated };
};
