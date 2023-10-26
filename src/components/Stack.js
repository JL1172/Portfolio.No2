import { useContext, useEffect } from "react";
import {StyledStack} from "./styles/StyledStack";
import { GlobalContext } from "../contexts/GlobalContext";
export default function Stack(props) {
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
        <StyledStack id = "stack" className={render === "stack" ? "show" : "hidden"}>
            <h3>Stack</h3>
        </StyledStack>
    )
}