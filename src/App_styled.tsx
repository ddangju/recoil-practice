import { styled } from "styled-components";
import Circle from "./Circle";
// import Animation from "./Ani";
///1.props를 사용하는 방식
// const Box = styled.div`
//   background-color: ${(props: any) => props.bgColor};
//   width: 100px;
//   height: 100px;
// `;
// ///2. Box 컴포넌트를 확장하여 사용하는 방법
// const Circle = styled(Box)`
//   border-radius: 100%;
//   color: ${(props) => props.theme.textColor};
// `;

// ///3. attrs프로퍼티를 사용하여 속성값을 추가하는 방법
// const Input = styled.input.attrs({ required: true, minLength: 10 })`
//   background-color: yellow;
//   width: 50px;
// `;

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
function App() {
  return (
    <div className="App">
      app
      {/* {/* <Circle bgColor="teal"></Circle> */}
      {/* <Circle></Circle> */}
      {/* <Wrapper> */}
      {/* <Box bgColor="teal">box</Box> */}
      {/* 3.prop으로 html tag 보내는 방법 */}
      {/* <Circle as="span">circleddd</Circle> */}
      {/* <Input /> */}
      {/* <Animation></Animation> */}
      {/* </Wrapper> */}
    </div>
  );
}

export default App;
