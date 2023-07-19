import { styled } from "styled-components";
import Circle from "./Circle";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={value} type="text" placeholder="username" />
        <button>login</button>
      </form>
    </div>
  );
}

export default App;
