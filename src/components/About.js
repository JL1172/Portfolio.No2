import { useContext, useEffect } from "react";
import { StyledAbout } from "./styles/StyledAbout";
import { GlobalContext } from "../contexts/GlobalContext";
// import ExtraAbout from "./extra/ExtraAbout";
import { Pagination } from "@mui/material";

export default function About(props) {
  const { render, changeRender, currentPage, changePage } = useContext(GlobalContext);
  useEffect(() => {
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
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('shown-text');
        } else {
          entry.target.classList.remove("shown-text");
        }
      })
    })
    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`span-seen`);
        } else {
          entry.target.classList.remove(`span-seen`);
        }
      })
    })
    const observer5 = new IntersectionObserver(elements => {
      elements.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('seen-page')
        } else {
          e.target.classList.remove("seen-page");
        }
      })
    })
    const hiddenPagination = document.querySelectorAll(".hidden-page");
    hiddenPagination.forEach(el => observer5.observe(el));

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
    const hiddenTextsElements = document.querySelectorAll(".hidden-text");
    hiddenTextsElements.forEach((element) => observer2.observe(element))
    const hiddenSpans = document.querySelectorAll(".span");
    hiddenSpans.forEach((element) => observer3.observe(element));
  }, [changeRender])
  return (
    <StyledAbout id="about" className={render === "about" ? "show" : "hidden"}>
      <div id="aboutMe">About Me</div>
      <div id="outerContainer" className="hidden-text">
        <h2>A little about me...</h2>
        <div className={currentPage === 1 ? "active" : "not-active"} id="container1">I am a <span className="span">dedicated</span> software developer with an education from Bloom Institute of Technology, specializing in <span className="span ">Full-stack web development</span>. Additionally, I am pursuing a Bachelor's degree in <span className="span ">Accounting</span> with a focus on public accounting at GCU.</div>
        <div className={currentPage === 2 ? "active" : "not-active"} id="container2">My passion lies in the dynamic field of <span className="span ">software engineering</span>. Beyond the technical expertise it demands, I relish the opportunity to roll up my sleeves and actively contribute to projects that have the power to <span className="span ">impact</span> the world, whether that be on a grand scale or a more intimate level. I take great pride in my ability to collaborate seamlessly within a team, and my intrinsic motivation drives me to consistently surpass expectations and deliver exceptional results.</div>
        <div className={currentPage === 3 ? "active" : "not-active"} id="container3">The realm of software engineering and development truly fuels my enthusiasm. I am deeply <span className="span ">committed</span> to this ever-evolving world of web development, where each day presents fresh challenges and opportunities for growth. I find immense satisfaction in not only meeting customer needs but <span className="span ">exceeding</span> their expectations, all while cherishing the continuous learning journey that this field provides.</div>
        <Pagination className= "hidden-page" id="pageCount" count={3} page={currentPage} onChange={changePage} defaultPage={1} variant="outlined" />
      </div>
    </StyledAbout >
  )
}