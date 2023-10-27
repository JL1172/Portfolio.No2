import { useContext, useEffect, useState } from "react";
import { StyledProject } from "./styles/StyledProjects"
import { GlobalContext } from "../contexts/GlobalContext";
import { Pagination } from "@mui/material";
import ProjectOne from "./extra/ProjectOne";
import ProjectTwo from "./extra/ProjectTwo";
import ProjectThree from "./extra/ProjectThree";
import ProjectFour from "./extra/ProjectFour"; 
import ProjectFive from "./extra/ProjectFive";
import { ProjectProvider } from "../contexts/ProjectContext";

export default function Projects(props) {
  const { render, changeRender } = useContext(GlobalContext);
  const [activeProject,setActiveProject] = useState(1); 
  const [outOfFocus,setOutOfFocus] = useState(true); 
  const changeProjectPage = (value) => {
    setActiveProject(value); 
  }
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
          entry.target.classList.add('project-title-hidden');
        } else {
          entry.target.classList.remove("project-title-hidden");
        }
      })
    })
    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("pagination-shown")
        } else {
          entry.target.classList.remove("pagination-shown");
        }
      })
    } )
    const observer4 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('project-cards-shown');
        } else {
          entry.target.classList.remove("project-cards-shown");
        }
      })
    })
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
    const project_title_hidden = document.querySelectorAll(".project-title-shown");
    if (outOfFocus) {
      project_title_hidden.forEach(el => observer2.observe(el))
      setOutOfFocus(false);
    }
    const project_cards_hidden = document.querySelectorAll(".project-cards-hidden");
    project_cards_hidden.forEach(el => observer4.observe(el))
    const paginationHidden = document.querySelectorAll(".pagination-hidden");
    paginationHidden.forEach(el=> observer3.observe(el))
  }, [changeRender,outOfFocus])
  return (
    <ProjectProvider.Provider value = {{activeProject}}>
    <StyledProject id="projects" className={render === "projects" ? "show" : "hidden"}>
      <div className="project-title-shown" >Projects</div>
      {activeProject === 1 && <ProjectOne />}
      {activeProject === 2 && <ProjectTwo />}
      {activeProject === 3 && <ProjectThree />}
      {activeProject === 4 && <ProjectFour />}
      {activeProject === 5 && <ProjectFive />}
      <Pagination onChange={(e)=> changeProjectPage(Number(e.target.textContent))} page={activeProject} className="pagination-hidden" count={5} shape="rounded" variant="outlined" />
    </StyledProject>
    </ProjectProvider.Provider>
  )
}