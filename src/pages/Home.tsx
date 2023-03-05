import React from "react";
import { Button } from "../components/Button";
import { useHistory } from "react-router-dom";
import logo from "../assets/logo.svg"

export const Home: React.FC = (): JSX.Element => {

  const history = useHistory();

  const handleStartTest = () => {
    history.push("/quiz");
  }

  return (
    <>
      <div style={{padding: "20px 80px 0 80px"}}>
        <h1>
          A Trybe é para você?
        </h1>
        <h2>
          Faça o teste e descubra!
        </h2>
      </div>
      <div>
        <Button onClick={handleStartTest}>
          Iniciar
          <span className="material-symbols-outlined"
            style={{ verticalAlign: "middle", marginLeft: "4px" }}
          >arrow_forward</span>
        </Button>
      </div>
      <div style={{marginBottom: "26px"}}>
        <img src={logo} alt="" height={"32px"}></img>
      </div>
    </>
  )
}
