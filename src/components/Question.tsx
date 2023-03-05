import React from "react";

export const Question: React.FC<{
  question: IQuestion,
  updateQuestions: (id: number) => void;
}> = ({ question, updateQuestions }) => {
  return (
    <div className="question" style={{
      backgroundColor: question.checked ? "var(--verde-escuro)" : "transparent",
    }}
      onClick={() => updateQuestions(question.id)}>
      <p style={{
        color: question.checked ? "var(--verde-claro)" : "var(--verde-escuro)",
        margin: 0
      }}>{question.label}</p>
    </div>
  );
};
