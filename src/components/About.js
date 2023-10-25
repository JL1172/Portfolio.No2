import { useEffect } from "react";
import {StyledAbout} from "./styles/StyledAbout";
export default function About(props) {
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
        <StyledAbout className="hidden">
            about me
        </StyledAbout>
    )
}