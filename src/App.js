import { StyledApp } from "./components/styles/StyledApp";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove("show");
        }
      })
    })
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  },[])
  return (
    <StyledApp>
      <Header />
      <About />
      <Projects />
      <Stack />
      <Resume />
      <Contact />
    </StyledApp>
  );
}

export default App;
