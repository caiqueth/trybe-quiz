import React from "react";

export const Button = ({ children, onClick }: {
  children?: React.ReactNode,
  onClick?: () => void,
}): JSX.Element => {
  return (
    <div style={{
      height: "100px",
      position: "relative",
    }}>
      <div style={{
        margin: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}>
        <button
          onClick={onClick}
          style={{
            backgroundColor: "#1db702",
            border: "none",
            borderRadius: "6px",
            padding: "12px 18px",
            color: "white",
            margin: "auto",
            cursor: "pointer",
            fontSize: "1.25em"
          }}>
          {children}
        </button>
      </div>
    </div>
  )
}
