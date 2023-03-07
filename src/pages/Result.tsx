import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../components/Button";
import useQuizContext from "../hooks/useQuizContext";
import { Heart } from "./Heart";
import logo from "../assets/logo.svg"

export const Result: React.FC = (): JSX.Element => {

  const { questions } = useQuizContext();
  const history = useHistory();

  const grade = Math.floor(questions.filter((q) => q.checked).length / questions.length * 100)
  const [movingGrade, setMovingGrade] = useState(0);

  const handleGotoHome = () => {
    history.push("/");
  }

  const handleSubscribe = () => {
    window.location.replace("https://app.betrybe.com/registration");
  }

  useEffect(() => {
    const animateValue = (duration = 1000) => {
      const start = 0;
      const end = grade;
      if (end === 0) return;
      let range = end - start;
      let current = start;
      let increment = 1;
      let stepTime = Math.abs(Math.floor(duration / range));
      let timer = setInterval(() => {
        current += increment;
        setMovingGrade(current);
        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    }
    
    animateValue()
  }, [grade])

  let text = "";
  let title = "";

  switch (true) {
    case grade >= 75:
      title = "Deu match!";
      text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.";
      break;
    case grade >= 50:
      title = "Lorem ipsum I"
      text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.";
      break;
    case grade >= 30:
      title = "Lorem ipsum II"
      text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.";
      break;
    case grade >= 0:
      title = "Lorem ipsum III"
      text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.";
      break;
  }

  return (
    <>
      <div style={{marginTop: "26px"}}>
        <Heart value={movingGrade} grade={grade} />
        <h1>
          {title}
        </h1>
        <p>Você marcou {grade}% das afirmações.</p>
        <p>{text}</p>
      </div>
      <div>
        {grade >= 75
          ? <Button onClick={handleSubscribe}>Inscreva-se!</Button>
          : <Button onClick={handleGotoHome}>
            <span className="material-symbols-outlined"
              style={{ fontSize: "34px", verticalAlign: "middle", marginRight: "4px" }}
            >arrow_back</span>
            Voltar
          </Button>
        }
      </div>
      <div style={{ margin: "26px 0 26px 0" }}>
        <img src={logo} alt="" height={"32px"}></img>
      </div>
    </>
  )
}

