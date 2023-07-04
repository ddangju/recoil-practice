import { styled } from "styled-components";

const Father = styled.div`
  background-color: red;
`;
const Box = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
function App() {
  return (
    <div className="App">
      <Father>
        <Box></Box>
        <div>hidddddd</div>
      </Father>
    </div>
  );
}

export default App;
