import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { lightTheme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

// const darkTheme = {
//   textColor: "whitesmoke",
//   backgroundColor: "#111",
// };

// const lightTheme = {
//   textColor: "#111",
//   backgroundColor: "whitesmoke",
// };
root.render(
  <ThemeProvider theme={lightTheme}>
    <App />
  </ThemeProvider>
);
