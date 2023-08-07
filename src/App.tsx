import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { darkTheme, lightTheme } from "./theme";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./store/atoms";

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
  // const [isDark, setIsDark] = useState(true);

  // const toggleDark = () => {
  //   setIsDark((current) => !current)
  // };
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>    
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {/* <button onClick={toggleDark}>Toggle Mode app</button> */}

      <Outlet/>
      {/* <Outlet context={{toggleDark, isDark}}/> */}
      <GlobalStyle/>
    </ThemeProvider>
    </>    
  );
}

export default App;
