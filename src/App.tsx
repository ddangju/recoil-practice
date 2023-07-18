import { styled } from "styled-components";
import Circle from "./Circle";

function App() {
  return (
    <div className="App">
      app
      {/* {/* <Circle bgColor="teal"></Circle> */}
      <Circle bgColor="teal" borderColor="black"></Circle>
      <Circle bgColor="teal"></Circle>
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
