import { StyledApp } from "./components/styles/StyledApp";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import { GlobalContext } from "./contexts/GlobalContext";

function App() {
  const [render,setRender] = useState(""); 
  const [visible, setVisible] = useState(false);
  const [toolTip, setToolTip] = useState("");
  const [currentPage,setCurrentPage] = useState(1);
  const changePage = (e,value) => {
    setCurrentPage(Number(value))
  }
  const changeRender = (val) => {
    setRender(val);
  }
  const toolTipVisibilty = (value) => {
      setToolTip(value)
  }
  const changeVisibility = () => {
    setVisible(!visible);
  }
  useEffect(()=>{
    const observer = new IntersectionObserver(elements => {
      elements.forEach(e => {
        if (e.isIntersecting){
          e.target.classList.add('seen-page')
        } else {
          e.target.classList.remove("seen-page");
        }
      })
    })
    const hiddenPagination = document.querySelectorAll(".hidden-page");
    hiddenPagination.forEach(el => observer.observe(el)); 
  },[])
  return (
    <GlobalContext.Provider value={{ visible, changeVisibility, toolTip, toolTipVisibilty, changeRender, render, currentPage, changePage }}>
      <StyledApp>
        <Header />
        <About />
        <Stack />
        <Projects />
        <Resume />
        <Contact />
      </StyledApp>
    </GlobalContext.Provider>
  );
}

export default App;
