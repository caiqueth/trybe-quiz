import React from "react";

export const Container: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: "var(--verde-claro)",
      display: "block",
      height: "auto",
      minHeight: "600px",
      maxHeight: "600px",
      overflow: "auto",
      width: "400px",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "20px",
      borderRadius: "8px",
      transition: "0.25s ease",
      alignContent: "center",
      alignItems: "center"
    }}>
      {children}
    </div>
  );
};
