import { styled } from "styled-components";

// interface ContainerProps {
//   bgColor: string;
// }
// const Container = styled.div<ContainerProps>`
//   height: 100px;
//   width: 199px;
//   background-color: ${(props) => props.bgColor};
// `;
// interface CircleProps {
//   bgColor: string;
//   test?: string;
// }
// export function Circle({ bgColor }: CircleProps): any {
//   <Container bgColor={bgColor}></Container>;
// }

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

///아래의 두 함수가 무엇이 다른걸까?
// export default function Circle({ bgColor }: CircleProps) {
//   return <Container bgColor={bgColor} />;
// }
export default function Circle({ bgColor, borderColor }: CircleProps) {
  // return <Container bgcolor={bgColor} borderColor={borderColor} />;
  ///props의 타입이 string|undefined로 되어있지만 styledcomponent의 type은 무조건 값이 있어야한다.
  /// 그러기 때문에 아래와 같이 default값을 설정할 수 있다
  ///✔️optional props
  return <Container bgcolor={bgColor} borderColor={borderColor ?? "yellow"} />;
}
