import { DefaultTheme } from "styled-components/dist/types";

// export const theme: DefaultTheme = {
//   bgColor: "#2f3640",
//   textColor: "#f5f6fa",
//   accentColor: "#44bd32",
//   selectColor: "#ab32bd",
// };

// export const darkTheme: DefaultTheme = {
//   bgColor: "black",
//   textColor: "white",
//   accentColor: "#9c88ff",
//   cardBgColor: "transparent",
// };

// export const lightTheme: DefaultTheme = {
//   bgColor: "whitesmoke",
//   textColor: "white",
//   accentColor: "#9c88ff",
//   cardBgColor: "white",
// };

export const darkTheme = () => ({  
  bgColor: "#2f3640",
  textColor: "white",
  accentColor: "#9c88ff",
  cardBgColor: "transparent",
}) 

export const lightTheme = () =>({
  bgColor: "whitesmoke",
  textColor: "black",
  accentColor: "#9c88ff",
  cardBgColor: "white",
})