import { createContext, useState } from "react";

export const QuizContext = createContext<QuestionsContextType | null>(null)

export const QuizProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {

  const [questions, setQuestions] = useState<IQuestion[]>([
    { "id": 1, "label": "Afirmação 1", "checked": false },
    { "id": 2, "label": "Afirmação 2", "checked": false },
    { "id": 3, "label": "Afirmação 3", "checked": false },
    { "id": 4, "label": "Afirmação 4", "checked": false },
    { "id": 5, "label": "Afirmação 5", "checked": false },
    { "id": 6, "label": "Afirmação 6", "checked": false },
    { "id": 7, "label": "Afirmação 7", "checked": false },
    { "id": 8, "label": "Afirmação 8", "checked": false },
    { "id": 9, "label": "Afirmação 9", "checked": false },
    { "id": 10, "label": "Afirmação 10", "checked": false },
    { "id": 11, "label": "Afirmação 11", "checked": false },
    { "id": 12, "label": "Afirmação 12", "checked": false },
    { "id": 13, "label": "Afirmação 13", "checked": false },
    { "id": 14, "label": "Afirmação 14", "checked": false },
    { "id": 15, "label": "Afirmação 15", "checked": false },
    { "id": 16, "label": "Afirmação 16", "checked": false },
    { "id": 17, "label": "Afirmação 17", "checked": false },
    { "id": 18, "label": "Afirmação 18", "checked": false },
    { "id": 19, "label": "Afirmação 19", "checked": false },
    { "id": 20, "label": "Afirmação 20", "checked": false },
  ]);

  const updateQuestions = (id: number) => {
    questions.filter((question: IQuestion) => {
      if (question.id === id) {
        question.checked = !question.checked;
        setQuestions([...questions])
      }
    })
  }

  return (
    <QuizContext.Provider value={{ questions, updateQuestions }}>
      {children}
    </QuizContext.Provider>
  )

};

type QuestionsContextType = {
  questions: IQuestion[];
  updateQuestions: (id: number) => void;
}

export default QuizProvider;