import { useEffect } from "react";
import {StyledStack} from "./styles/StyledStack";
export default function Stack(props) {
  useEffect(()=> {
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
        <StyledStack className="hidden">
            stack
        </StyledStack>
    )
}