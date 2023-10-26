import { useContext, useEffect } from "react";
import {StyledProject} from "./styles/StyledProjects"
import { GlobalContext } from "../contexts/GlobalContext";
export default function Projects(props) {
  const {render,changeRender} = useContext(GlobalContext);
  useEffect(()=> {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove("show");
            changeRender("")
          }
        })
      })
      const hiddenElements = document.querySelectorAll(".hidden");
      hiddenElements.forEach((el) => observer.observe(el));
  },[changeRender])
    return (
        <StyledProject id = "projects" className={render === "projects" ? "show" : "hidden"}>
            projects
        </StyledProject>
    )
}