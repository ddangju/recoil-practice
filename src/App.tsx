import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import ToDoList from "./components/ToDoList";
import { darkTheme } from "./theme";

function App() {
  return (
    <>
      <ToDoList />
    </>
  );
}

export default App;
