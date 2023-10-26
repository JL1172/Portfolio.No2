import { useContext, useEffect } from "react";
import {StyledResume} from "./styles/StyledResume";
import { GlobalContext } from "../contexts/GlobalContext";
export default function Resume(props) {
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
        <StyledResume id ="resume" className={render === "resume" ? "show" : "hidden"}>
            resume
        </StyledResume>
    )
}