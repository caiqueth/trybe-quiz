import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../components/Button";
import useQuizContext from "../hooks/useQuizContext";
import { Question } from "../components/Question";


export const Quiz: React.FC = (): JSX.Element => {

  const { questions, updateQuestions } = useQuizContext();

  const history = useHistory();

  const handleGoToResults = () => {
    history.push('/result')
  }

  return (
    <>
      <div style={{ width: "100%" }}>
        <div className="question" style={{
          background: "var(--verde-trybe)",
          borderRadius: "8px",
          border: "4px solid var(--verde-trybe)"
        }}>
          <div>
            <p style={{
              textAlign: "left",
              color: "white",
              fontWeight: 600,
              margin: 0,
              fontSize: "24px",
            }}>
              Clique nas afirmações com as quais você se identifica:
            </p>
          </div>
        </div>
        {questions.map((question) => (
          <div key={question.id}>
            <Question question={question} updateQuestions={updateQuestions} />
          </div>
        ))}
      </div>
      <div style={{paddingBottom: "16px"}}>
        <Button onClick={handleGoToResults}>Vamos lá!</Button>
      </div>
    </>
  )
}
