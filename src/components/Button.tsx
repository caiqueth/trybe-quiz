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
        <button onClick={onClick}>
          {children}
        </button>
      </div>
    </div>
  )
}
