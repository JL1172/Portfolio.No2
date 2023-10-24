import { Route, Routes } from "react-router-dom";
import { StyledApp } from "./components/styles/StyledApp";
import Header from "./components/header/Header";

function App() {
  return (
    <StyledApp>
      <Header />
      <Routes>
        <Route />
      </Routes>
    </StyledApp>
  );
}

export default App;
