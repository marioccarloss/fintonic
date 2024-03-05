export type FetchQuestionsParams = {
  amount?: number;
  category?: string;
  difficulty?: string;
  type?: string;
};

const fetchQuestions = async ({
  amount,
  category,
  difficulty,
  type,
}: FetchQuestionsParams) => {
  let url = `${import.meta.env.VITE_API_URL}?`;

  if (amount) {
    url += `amount=${amount}&`;
  }
  if (category) {
    url += `category=${encodeURIComponent(category)}&`;
  }
  if (difficulty) {
    url += `difficulty=${encodeURIComponent(difficulty)}&`;
  }
  if (type) {
    url += `type=${encodeURIComponent(type)}&`;
  }

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchQuestions;
