import { StyledHeader } from "./styles/StyledHeader";
import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { GoStack } from "react-icons/go";
import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlineContacts } from "react-icons/md"
import HeaderWords from "./extra/HeaderWords";
import { GlobalContext } from "../contexts/GlobalContext";
import { Fab, Pagination } from "@mui/material";

const Header = (props) => {
    const { changeVisibility, visible, changeRender, currentPage, changePage, render } = useContext(GlobalContext);
    const specialRender = (text,e) => {
        changeVisibility();
        changeRender(text,e)
    }
    
    return (
        <StyledHeader id = "home">
            <div id="conditional1"  >
                <h3><a href = "#home">Jacob's Portfolio</a></h3>
                <div id="links">
                    <div className="link"><a onClick={(e) => changeRender("about", e)} className="link one" href="#about"><CgProfile />About /</a></div>
                    <div className="link"><a onClick={(e) => changeRender("projects", e)} className="link two" href="#projects"><GrProjects />Projects /</a></div>
                    <div className="link"><a onClick={(e) => changeRender("stack", e)} className="link three" href="#stack"><GoStack />Tech Stack /</a></div>
                    <div className="link"><a onClick={(e) => changeRender("resume", e)} className="link four" href="#resume"><FaRegNewspaper /> Resume /</a></div>
                    <div className="link"><a onClick={(e) => changeRender("contact", e)} className="link five" href="#contact"> <MdOutlineContacts /> Contact Me /</a></div>
                </div>

                <span onClick={changeVisibility} id="icon" className="material-symbols-outlined">
                    {visible ? "close" : "menu"}
                </span>

            </div>
            {visible && <div className="drawer">
                {visible && <div className="rows"><Fab sx={{ height: 80 }} className="rows" variant="extended" ><a onClick={(e) => specialRender("about", e)} href="#about"><CgProfile style={{ width: "1.5rem", height: "1.5rem" }} />About Me</a></Fab></div>}
                {visible && <div className="rows"><Fab sx={{ height: 80 }} className="rows" variant="extended"><a onClick={(e) => specialRender("projects", e)} href="#projects"><GrProjects style={{ width: "1.5rem", height: "1.5rem" }} />Projects</a></Fab></div>}
                {visible && <div className="rows"><Fab sx={{ height: 80 }} className="rows" variant="extended"><a onClick={(e) => specialRender("stack", e)} href="#stack"><GoStack style={{ width: "1.5rem", height: "1.5rem" }} />Tech Stack</a></Fab></div>}
                {visible && <div className="rows"><Fab sx={{ height: 80 }} className="rows" variant="extended"><a onClick={(e) => specialRender("resume", e)} href="#resume"><FaRegNewspaper style={{ width: "1.5rem", height: "1.5rem" }} />Resume</a></Fab></div>}
                {visible && <div className="rows"><Fab sx={{ height: 80 }} className="rows" variant="extended"><a onClick={(e) => specialRender("contact", e)} href="#contact"><MdOutlineContacts style={{ width: "1.5rem", height: "1.5rem" }} />Contact Me</a></Fab></div>}
            </div>
            }
            {!visible && <div id="content">
                <div id="img">photo</div>
                <HeaderWords />
                <Pagination className= "hidden-page" id = "pageCount" count={3}  page = {currentPage} onChange={(e)=>changePage(e)} variant="outlined"  />
            </div>}
        </StyledHeader>
    )
}

export default Header;