import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../components/Button";
import useQuizContext from "../hooks/useQuizContext";
import { QuestionContainer } from "../components/QuestionContainer";


export const Quiz: React.FC = (): JSX.Element => {

  const {questions, updateQuestions} = useQuizContext();

  const history = useHistory();

  const handleGoToResults = () => {
    history.push('/result')
  }

  return (
    <>
      <div style={{
        background: "var(--verde-trybe)",
        color: "var(--verde-claro)",
        fontWeight: 600,
        fontSize: "18px",
        padding: "10px",
        margin: "4px",
        borderRadius: "8px",
        border: "4px solid var(--verde-trybe)"
      }}>
        Marque as afirmações com as quais você se identifica:
      </div>
      <div>
        {questions.map((question) => (
          <div key={question.id}>
            <QuestionContainer question={question} updateQuestions={updateQuestions}/>
          </div>
        ))}
      </div>
      <div>
        <Button onClick={handleGoToResults}>Vamos lá!</Button>
      </div>
    </>
  )
}
