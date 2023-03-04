import React from "react";
import { Button } from "../components/Button";
import { useHistory } from "react-router-dom";

export const Home: React.FC = (): JSX.Element => {

  const history = useHistory();

  const handleStartTest = () => {
    history.push("/quiz");
  }

  return (
    <div style={{
      textAlign: "center",
      color: "var(--verde-escuro)",
      paddingTop: "50%"
    }}>
      <h1>
        A Trybe é para você?
      </h1>
      <h2>
        Faça o teste e descubra!
      </h2>
      <div>
        <Button onClick={handleStartTest}>
          Iniciar
          <span className="material-symbols-outlined"
            style={{ verticalAlign: "bottom", marginLeft: "4px" }}
          >arrow_forward</span>
        </Button>
      </div>
    </div>
  )
}
