import React from "react";

export const Checkbox = ({ onClick, checked, title }: {
  onClick: any,
  checked?: boolean,
  title: string
}): JSX.Element => {
  return (
    <div style={{
        backgroundColor: checked ? "var(--verde-escuro)" : "transparent",
        border: "none",
        borderRadius: "6px",
        padding: "8px",
        color: checked ? "var(--verde-claro)" : "var(--verde-escuro)",
      }}>
      {title}
    </div>
  )
}
