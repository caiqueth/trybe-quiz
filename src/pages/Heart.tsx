import styled, { keyframes } from "styled-components";
import heart_filled from "../assets/heart_filled.svg";

const normalize = (x: number) => {
  const ret = ((x - 10) / (150-10))
  console.log(ret)
  return ret
}

const fill = (toTop = -50) => keyframes`{
  from {
    top: 250px;
    transform: translateX(-50%) rotate(0deg);
  }
  to {
    top: ${toTop}px;
    transform: translateX(-50%) rotate(360deg);
  }
}`

const HeartDiv = styled.div<{value: number}>`{
  width: 160px;
  height: 160px;
  line-height: 160px;
  text-align: center;
  color: ${props => props.value > 60 ? "var(--verde-claro)" : "var(--verde-escuro)"};
  font-size: 34px;
  font-weight: 600;
  font-family: RoobertSemiBold;
  text-transform: uppercase;
  mask-image: url(${heart_filled});
  overflow: hidden;
  position: relative;
}
&::before {
  content: "";
  position: absolute;
  width: 400px;
  height: 400px;
  background: var(--verde-trybe);
  left: 50%;
  top: ${props => (120 - normalize(props.value)*160)}px;
  animation: ${props => fill(120 - normalize(props.value)*160)} 2s ease-in-out 1;
  animation-delay: 0s;
  transform: translateX(-50%);
  border-radius: 40%;
  z-index: -1;
}`

export const Heart: React.FC<{ value: number, grade: number }> = ({ value, grade }) => {

  return (
    <div className="heart-container">
      <HeartDiv value={grade}>
        {value}%
        <div className="heart-outline"></div>
      </HeartDiv>
    </div>
  )
}
