import { createGlobalStyle } from "styled-components";
import Study from "./study/study";

const GlobalStyle = createGlobalStyle`
  span {
    color: red;
    font-size: 12px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Study />
    </>
  );
}

export default App;
