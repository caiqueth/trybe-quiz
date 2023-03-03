import React from "react";

export const QuestionContainer: React.FC<{
  question: IQuestion,
  updateQuestions: (id: number) => void;
}> = ({ question, updateQuestions }) => {
  return (
    <div style={{
      padding: "10px",
      margin: "10px 4px 10px 4px",
      borderRadius: "8px",
      border: "4px solid var(--verde-escuro)",
      backgroundColor: question.checked ? "var(--verde-escuro)" : "transparent",
      color: question.checked ? "var(--verde-claro)" : "var(--verde-escuro)",
      cursor: "pointer",
      transition: "0.25s ease"
    }}
      onClick={() => updateQuestions(question.id)}>
      {question.label}
    </div>
  );
};
