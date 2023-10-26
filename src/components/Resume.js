import {StyledResume} from "./styles/StyledResume";
export default function resume(props) {
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
    return (
        <StyledResume className="hidden">
            resume
        </StyledResume>
    )
}