import { createContext, useState } from "react";
import initialQuestions from "../assets/initialQuestions.json"

export const QuizContext = createContext<QuestionsContextType | null>(null)

export const QuizProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {

  const [questions, setQuestions] = useState<IQuestion[]>(initialQuestions);

  const updateQuestions = (id: number) => {
    questions.filter((question: IQuestion) => {
      if (question.id === id) {
        question.checked = !question.checked;
        setQuestions([...questions])
      }
      return null;
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