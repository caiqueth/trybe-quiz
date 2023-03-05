import React from "react";

export const Container: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div className="main-container">
      <div className="inside-container">
        {children}
      </div>
    </div>
  );
};
