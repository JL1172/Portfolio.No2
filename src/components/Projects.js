import { useEffect } from "react";
import {StyledProject} from "./styles/StyledProjects"
export default function Projects(props) {
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
        <StyledProject className="hidden">
            projects
        </StyledProject>
    )
}