import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../components/Button";
import useQuizContext from "../hooks/useQuizContext";
import { QuestionContainer } from "../components/QuestionContainer";
import { Checkbox } from "../components/Checkbox";

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
        <Button onClick={handleGoToResults}>Testar</Button>
      </div>
    </>
  )
}
