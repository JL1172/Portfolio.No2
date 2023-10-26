import { useContext, useEffect } from "react";
import {StyledAbout} from "./styles/StyledAbout";
import { GlobalContext } from "../contexts/GlobalContext";
export default function About(props) {
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
        <StyledAbout id = "about" className={render === "about" ? "show" : "hidden"}>
          <h3>About Me</h3>
          <div id = "outerContainer">
          <div id = "container1">I am a dedicated student currently enrolled at Bloom Institute of Technology, specializing in Full-stack web development. Additionally, I am pursuing a Bachelor's degree in Accounting with a focus on public accounting at GCU.</div>
          <div id = "container2">My passion lies in the dynamic field of software engineering. Beyond the technical expertise it demands, I relish the opportunity to roll up my sleeves and actively contribute to projects that have the power to impact the world, whether that be on a grand scale or a more intimate level. I take great pride in my ability to collaborate seamlessly within a team, and my intrinsic motivation drives me to consistently surpass expectations and deliver exceptional results.</div>
          <div id = "container3">The realm of software engineering and development truly fuels my enthusiasm. I am deeply committed to this ever-evolving world of web development, where each day presents fresh challenges and opportunities for growth. I find immense satisfaction in not only meeting customer needs but exceeding their expectations, all while cherishing the continuous learning journey that this field provides.</div>
          </div>
        </StyledAbout>
    )
}