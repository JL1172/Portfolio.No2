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
  const changePage = (e) => {
    if (e.target.innerHTML === `<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>`) {
      setCurrentPage((currentPage)=>currentPage + 1)
    } else if (e.target.innerHTML === `<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>`) {
      if (currentPage > 1) {
        setCurrentPage((currentPage => currentPage - 1))
      }
    } else {
      setCurrentPage(Number(e.target.textContent));
    }
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
