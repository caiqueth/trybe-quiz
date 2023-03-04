import React from "react";

export const QuestionContainer: React.FC<{
  question: IQuestion,
  updateQuestions: (id: number) => void;
}> = ({ question, updateQuestions }) => {
  return (
    <div className="question-container" style={{
      backgroundColor: question.checked ? "var(--verde-escuro)" : "transparent",
      color: question.checked ? "var(--verde-claro)" : "var(--verde-escuro)",
    }}
      onClick={() => updateQuestions(question.id)}>
      {question.label}
    </div>
  );
};
