import { styled } from "styled-components";
import Circle from "./Circle";
import { useState } from "react";

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <div className="App">
      <Container>
        <H1>안녕하세요</H1>
      </Container>
    </div>
  );
}

export default App;
