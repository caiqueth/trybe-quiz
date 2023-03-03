import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../components/Button";
import useQuizContext from "../hooks/useQuizContext";
import { Heart } from "./Heart";

export const Result: React.FC = (): JSX.Element => {

  const { questions } = useQuizContext();
  const history = useHistory();

  const percent = Math.floor(questions.filter((q) => q.checked).length / questions.length * 100)

  const handleGotoHome = () => {
    history.push("/");
  }

  const handleSubscribe = () => {
    window.location.replace("https://app.betrybe.com/registration");
  }

  let text = "";
  let title = "";

  switch (true) {
    case percent >= 75:
      title = "Deu Match!";
      text = "Você está no caminho certo!";
      break;
    case percent >= 50:
      title = "Quase lá!"
      text = "Foi quase, mas ainda não é certeza de que esse é o caminho certo pra você.";
      break;
    case percent >= 30:
      title = "Falta algo."
      text = "Parece que você precisa pesquisar um pouco mais sobre nosso conteúdo.";
      break;
    case percent >= 0:
      title = "Ops!"
      text = "Talvez a Trybe não seja pra você.";
      break;
  }

  return (
    <>
      <div style={{
        textAlign: "center"
      }}>
        <Heart value={percent} />
        <h1>
          {title}
        </h1>
        <h3>Você marcou {percent}% das afirmações</h3>
        <p>{text}</p>
      </div>
      <div>
        {percent >= 75
          ? <Button onClick={handleSubscribe}>Inscreva-se!</Button>
          : <Button onClick={handleGotoHome}>🠈 Voltar</Button>
        }
      </div>
    </>
  )
}
