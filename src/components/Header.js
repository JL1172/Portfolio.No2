import { Link } from "react-router-dom";
import { StyledHeader } from "./styles/StyledHeader";
import { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { GoStack } from "react-icons/go";
import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlineContacts } from "react-icons/md"
import HeaderWords from "./extra/HeaderWords";
import { GlobalContext } from "../contexts/GlobalContext";
import { Fab } from "@mui/material";

const Header = (props) => {
    const { changeVisibility, visible} = useContext(GlobalContext);
    console.log(visible)
    return (
        <StyledHeader>
            <div id="conditional1"  >
                <h3>Jacob's Portfolio</h3>
                <div id="links">
                    <div className="link"><Link className="link one" to="/about"><CgProfile />About /</Link></div>
                    <div className="link"><Link className="link two" to="/projects"><GrProjects />Projects /</Link></div>
                    <div className="link"><Link className="link three" to="/stack"><GoStack />Tech Stack /</Link></div>
                    <div className="link"><Link className="link four" to="/resume"><FaRegNewspaper /> Resume /</Link></div>
                    <div className="link"><Link className="link five" to="/contact"> <MdOutlineContacts /> Contact Me /</Link></div>
                </div>

                <span onClick={changeVisibility} id="icon" className="material-symbols-outlined">
                    {visible ? "close" : "menu"}
                </span>

            </div>
            {visible && <div className = "drawer">
                {visible && <div className="rows"><Fab sx={{height : 80}} className="rows" variant="extended" ><CgProfile style={{width : "1.5rem", height : "1.5rem"}}/>About Me</Fab></div>}
                {visible && <div className="rows"><Fab sx={{height : 80}} className="rows" variant="extended"><GrProjects style={{width : "1.5rem", height : "1.5rem"}}/>Projects</Fab></div>}
                {visible && <div className="rows"><Fab sx={{height : 80}} className="rows" variant="extended"><GoStack style={{width : "1.5rem", height : "1.5rem"}}/>Tech Stack</Fab></div>}
                {visible && <div className="rows"><Fab sx={{height : 80}} className="rows" variant="extended"><FaRegNewspaper style={{width : "1.5rem", height : "1.5rem"}}/>Resume</Fab></div>}
                {visible && <div className="rows"><Fab sx={{height : 80}} className="rows" variant="extended"><MdOutlineContacts style={{width : "1.5rem", height : "1.5rem"}}/>Contact Me</Fab></div>}
            </div>
            }
            {!visible && <div id="content">
                <div id="img">photo</div>
                <HeaderWords />
            </div>}
        </StyledHeader>
    )
}

export default Header;