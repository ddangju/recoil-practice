import styled, { keyframes } from "styled-components";

///기본 애니메이션 설정하는 방법
const animation = keyframes`
  from{
    transform:rotate(0deg)
  }
  to{
    transform:rotate(360deg)
  }
`;
const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: blue;
  animation: ${animation} 5s linear infinite;
`;

///컴포넌트 내부에서 요소 지정하여 스타일주는 방법
const animation2 = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    transform:rotate(360deg);
    border-radius: 100px;
  }
  100%{
    transform:rotate(0deg);
    border-radius: 0px;
  }
`;
const Emoji = styled.span`
  font-size: 50px;
`;
const Box2 = styled.div`
  height: 100px;
  width: 100px;
  background-color: blue;
  animation: ${animation} 5s linear infinite;
  span {
    /* font-size: 50px; */
    &:hover {
      font-size: 100px;
    }
  }
  /* Emoji컴포넌트를 타겟팅하기 */
  //span테그로 만들었지만 as="p" 테그로 전달
  ${Emoji}:hover {
    font-size: 100px;
  }
`;

export default function Ani() {
  return (
    <>
      <Box />
      <Box2>
        <span>😄</span>
        <Emoji as="p">😄</Emoji>
      </Box2>
    </>
  );
}
