import React from "react";

export const Button = ({ children, onClick }: {
  children?: React.ReactNode,
  onClick?: () => void,
}): JSX.Element => {
  return (
    <div style={{
      margin: "10px",
    }}>
      <button onClick={onClick}>
        {children}
      </button>
    </div>
  )
}
