import { createGlobalStyle } from "styled-components";
import "./App.css";
import MainRoutes from "./Components/MainRoutes";
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    /* margin: 0;
    padding: 0; */
    font-family: 'Inter', sans-serif;
  }

  body {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    color: #f8fafc;
    /* min-height: 100vh; */
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <MainRoutes />
    </>
  );
}

export default App;
