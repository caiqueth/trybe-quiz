import { useContext } from "react"
import { QuizContext } from "../context/QuizContext"

const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context)
    throw Error("QuizContext must be used inside QuizContext provider!");
  return context;
}

export default useQuizContext;