import { useContext, useEffect, useState } from "react";
import { StyledStack } from "./styles/StyledStack";
import { GlobalContext } from "../contexts/GlobalContext";
import { Card } from "@mui/material";
import { react_svg } from "../URLS/url-folder";
import { BiLogoRedux } from "react-icons/bi"
import { BsFillBootstrapFill } from "react-icons/bs"
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io"
import { SiPrisma } from "react-icons/si";
import {FaNode} from "react-icons/fa";
import {SiJavascript} from "react-icons/si";
import {TbSql} from "react-icons/tb";
import {BsDatabase} from "react-icons/bs";
import {TbApi,TbBrandCypress} from "react-icons/tb";
import { DiPostgresql } from "react-icons/di";
import { SiNestjs } from "react-icons/si";
import {SiJest} from "react-icons/si";
import { SiTypescript } from "react-icons/si";

export default function Stack(props) {
  const { render, changeRender } = useContext(GlobalContext);
  const [vis,setVis] = useState("");
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
          entry.target.classList.add('show-stack');
        } else {
          entry.target.classList.remove("show-stack");
        }
      })
    })
    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-card-icon');
        } else {
          entry.target.classList.remove("show-card-icon");
        }
      })
    })
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
    const hiddenStack = document.querySelectorAll(".hidden-stack");
    hiddenStack.forEach((el)=> observer2.observe(el));
    const hidden_card_icon = document.querySelectorAll(".hidden-card-icon");
    hidden_card_icon.forEach((el) => observer3.observe(el)); 
  }, [changeRender])
  const advancedClick = (text) => {
    if (vis === text) {
      setVis("");
    } else { 
      setVis(text); 
    }
  }
  return (
    <StyledStack id="stack" className={render === "stack" ? "show" : "hidden"}>
      <div id = "stackMe" className={"show-then-hide"}>Tech Stack</div>
      <div id="stackCards" className="hidden-stack">
        <div className="hidden-card-icon"><Card  className={vis === "react" ? "cardsAll blue" : "cardsAll"} id="reactCard" onClick = {()=>advancedClick("react")}>{vis === "react" ? <div className="textContent">React</div> : <img className="iconsCards" id="reactIcon" src={react_svg} alt="react icon" />}</Card></div>
        <div className="hidden-card-icon"><Card  className={vis === "redux" ? "blue cardsAll" : "cardsAll"} id="reduxCard"onClick = {()=>advancedClick("redux")}>{vis === "redux" ? <div className="textContent">Redux</div> :<BiLogoRedux className="iconsCards" id="reduxIcon" />}</Card></div>
        <div className="hidden-card-icon"><Card  className={vis === "bootstrap" ? "blue cardsAll" : "cardsAll"} id="bootstrapCard" onClick = {()=>advancedClick("bootstrap")}>{vis === "bootstrap" ? <div className="textContent">Bootstrap</div>:<BsFillBootstrapFill className="iconsCards" id="bootstrapIcon" />}</Card></div>
        <div className="hidden-card-icon"><Card  className={vis === "html" ? "blue cardsAll" : "cardsAll"} id="htmlCard" onClick = {()=>advancedClick("html")}>{vis === "html" ? <div className="textContent">HTML5</div>:<AiOutlineHtml5 className="iconsCards" id="htmlIcon" />}</Card></div>
        <div className="hidden-card-icon"><Card  className={vis === "css" ? "blue cardsAll" : "cardsAll"} id="cssCard" onClick = {()=>advancedClick("css")}>{vis === "css" ? <div className="textContent">CSS</div>:<IoLogoCss3 className="iconsCards" id="cssIcon" />}</Card></div>
        <div className="hidden-card-icon"><Card  className={vis === "node" ? "blue cardsAll" : "cardsAll"} onClick = {()=>advancedClick("node")}>{vis === "node" ? <div className="textContent">Node.js/<br/>Express</div>:<FaNode className="iconsCards" id = "nodeIcon"/>}</Card></div>
        <div className="hidden-card-icon"> <Card  className={vis === "js" ? "blue cardsAll" : "cardsAll"} onClick = {()=>advancedClick("js")}>{vis === "js" ? <div className="textContent">JS </div>:<SiJavascript className="iconsCards" id = "jsIcon"/>}</Card></div>
        <div className="hidden-card-icon"><Card  className={vis === "sql" ? "blue cardsAll" : "cardsAll"} onClick = {()=>advancedClick("sql")} >{vis === "sql" ? <div className="textContent">SQL</div>:<TbSql className="iconsCards" id = "sqlIcon"/>}</Card></div>
        <div className="hidden-card-icon"><Card  className={vis === "db" ? "blue cardsAll" : "cardsAll"} onClick = {()=>advancedClick("db")} >{vis === "db" ? <div className="textContent">DBMS</div>:<BsDatabase className="iconsCards" id = "dbIcon"/>}</Card></div>
        <div className="hidden-card-icon"><Card  className={vis === "api" ? "blue cardsAll" : "cardsAll"} onClick = {()=>advancedClick("api")} >{vis === "api" ? <div className="textContent">RESTful APIs</div>:<TbApi className="iconsCards" id = "apiIcon"/>}</Card></div>
        <div className="hidden-card-icon"><Card  className={vis === "jest" ? "blue cardsAll" : "cardsAll"} onClick = {()=>advancedClick("jest")} >{vis === "jest" ? <div className="textContent">Jest</div>:<SiJest className="iconsCards" id = "jestIcon"/>}</Card></div>
        <div className="hidden-card-icon"><Card  className={vis === "cy" ? "blue cardsAll" : "cardsAll"} onClick = {()=>advancedClick("cy")} >{vis === "cy" ? <div className="textContent">Cypress</div>:<TbBrandCypress className="iconsCards" id = "cyIcon"/>}</Card></div>
        <div className="hidden-card-icon"><Card  className={vis === "postgres" ? "blue cardsAll" : "cardsAll"} onClick = {()=>advancedClick("postgres")} >{vis === "postgres" ? <div className="textContent">Postgres</div>:<DiPostgresql className="iconsCards" id = "sqlIcon"/>}</Card></div>
        <div className="hidden-card-icon"><Card  className={vis === "Nestjs" ? "blue cardsAll" : "cardsAll"} onClick = {()=>advancedClick("Nestjs")} >{vis === "Nestjs" ? <div className="textContent">Nestjs</div>:<SiNestjs className="iconsCards" id = "dbIcon"/>}</Card></div>
        <div className="hidden-card-icon"><Card  className={vis === "Prisma" ? "blue cardsAll" : "cardsAll"} onClick = {()=>advancedClick("Prisma")} >{vis === "Prisma" ? <div className="textContent">Prisma</div>:<SiPrisma className="iconsCards" id = "dbIcon"/>}</Card></div>
        <div className="hidden-card-icon"><Card  className={vis === "TypeScript" ? "blue cardsAll" : "cardsAll"} onClick = {()=>advancedClick("TypeScript")} >{vis === "TypeScript" ? <div className="textContent">TypeScript</div>:<SiTypescript className="iconsCards" style={{color: "dodgerblue"}}/>}</Card></div>
      </div>
      
    </StyledStack>
  )
}