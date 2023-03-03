import heart from "./heart.svg";

export const Heart: React.FC<{ value: number }> = ({ value }) => {

  return (
    <div style={{ display: "block", height: "300px" }}>
      <div style={{ textAlign: "center", color: "var(--verde-escuro)", position: "relative"}}>
        {/* <div className="heart" /> */}
        <img src={heart} alt="Heart" />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", }}>
          <h1>{value}%</h1>
        </div>
      </div>
    </div>
  )
}
