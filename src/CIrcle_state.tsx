import { useState } from "react";
import { styled } from "styled-components";

///styled component에 props로 넘어오는것에 대한 타입
interface ContainerProps {
  bgcolor: string;
  borderColor: string;
}
///부모에서 넘어오는 prop에 대한 타입
interface CircleProps {
  bgColor: string;
  borderColor?: string;
}
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgcolor};
  border: 20px solid ${(props) => props.borderColor};
`;

export default function Circle({ bgColor, borderColor }: CircleProps) {
  const [counter, setCounter] = useState(1);
  return <Container bgcolor={bgColor} borderColor={borderColor ?? "yellow"} />;
}
