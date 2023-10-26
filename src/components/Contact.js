import { useEffect } from "react";
import {StyledContact} from "./styles/StyledContact";
export default function Contact(props) {
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
        <StyledContact className="hidden">
          contact
        </StyledContact>
    )
}