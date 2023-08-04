import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";





const GlobalStyle = createGlobalStyle`

${reset}
  * {
    box-sizing: border-box; 

  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    line-height: 1;
  }
  a {
    text-decoration:none;
    color:inherit;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
    </>
  );
}

export default App;
