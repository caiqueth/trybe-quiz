import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../components/Button";
import useQuizContext from "../hooks/useQuizContext";
import { Heart } from "./Heart";

export const Result: React.FC = (): JSX.Element => {

  const { questions } = useQuizContext();
  const history = useHistory();

  const grade = Math.floor(questions.filter((q) => q.checked).length / questions.length * 100)
  const [percent, setPercent] = useState(0);

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
        setPercent(current);
        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    }

    animateValue();
  }, [grade])

  let text = "";
  let title = "";

  switch (true) {
    case grade >= 75:
      title = "Deu match!";
      text = "Você está no caminho certo!";
      break;
    case grade >= 50:
      title = "Quase lá!"
      text = "Foi quase, mas ainda não é certeza de que esse é o caminho certo pra você.";
      break;
    case grade >= 30:
      title = "Falta algo."
      text = "Parece que você precisa pesquisar um pouco mais sobre nosso conteúdo.";
      break;
    case grade >= 0:
      title = "Ops!"
      text = "Talvez a Trybe não seja pra você.";
      break;
  }

  return (
    <>
      <div style={{
        textAlign: "center",
      }}>
        <Heart value={percent} />
        <h1 style={{ marginTop: 0 }}>
          {title}
        </h1>
        <h3>Você marcou {grade}% das afirmações</h3>
        <p>{text}</p>
      </div>
      <div>
        {grade >= 75
          ? <Button onClick={handleSubscribe}>Inscreva-se!</Button>
          : <Button onClick={handleGotoHome}>🠈 Voltar</Button>
        }
      </div>
    </>
  )
}
