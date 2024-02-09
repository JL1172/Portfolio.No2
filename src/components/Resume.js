import { useContext, useEffect } from "react";
import { StyledResume } from "./styles/StyledResume";
import { GlobalContext } from "../contexts/GlobalContext";
import { resumeURL } from "../URLS/url-folder";
import { Button } from "@mui/material";

export default function Resume(props) {
  const { render, changeRender } = useContext(GlobalContext);
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
    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("button-shown");
        } else {
          entry.target.classList.remove("button-shown")
        }
      })
    })
    const observer3 = new IntersectionObserver(entries=> {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("text-shown");
        } else {
          entry.target.classList.remove("text-shown");
        }
      })
    })
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
    const resumeShown = document.querySelectorAll(".button-hidden");
    resumeShown.forEach(el => observer2.observe(el));
    const text_hidden = document.querySelectorAll(".text-hidden");
    text_hidden.forEach(el=> observer3.observe(el));
  }, [changeRender])
  return (
    <StyledResume id="resume" className={render === "resume" ? "show" : "hidden"}>
      <h2 className="text-hidden">Below is a link to my CV, I look forward to meeting you</h2>
      <Button className="button-hidden" id = "downloadButton" variant="contained" href={resumeURL}>
        Download My CV
      </Button>
    </StyledResume>
  )
}