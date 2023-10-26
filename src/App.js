import { StyledApp } from "./components/styles/StyledApp";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import {  useState } from "react";
import { GlobalContext } from "./contexts/GlobalContext";

function App() {
  const [render,setRender] = useState(""); 
  const [visible, setVisible] = useState(false);
  const [toolTip, setToolTip] = useState("");
  const changeRender = (val) => {
    setRender(val);
  }
  const toolTipVisibilty = (value) => {
      setToolTip(value)
  }
  const changeVisibility = () => {
    setVisible(!visible);
  }
  return (
    <GlobalContext.Provider value={{ visible, changeVisibility, toolTip, toolTipVisibilty, changeRender, render }}>
      <StyledApp>
        <Header />
        <About />
        <Projects />
        <Stack />
        <Resume />
        <Contact />
      </StyledApp>
    </GlobalContext.Provider>
  );
}

export default App;
