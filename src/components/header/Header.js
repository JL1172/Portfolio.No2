import { Link } from "react-router-dom";
import { StyledHeader } from "../styles/StyledHeader";
import { useState } from "react";
import {CgProfile} from "react-icons/cg";
import {GrProjects} from "react-icons/gr";
import {GoStack} from "react-icons/go";
import {FaRegNewspaper} from "react-icons/fa";
import {MdOutlineContacts} from "react-icons/md"

const Header = (props) => {
    const [visible, setVisible] = useState(false);
    const changeVisibility = () => {
        setVisible(!visible);
    }
    return (
        <StyledHeader>
            <div id="conditional1"  >
                <h3>Jacob's Portfolio</h3>
                <div id = "links">
                <div className="link"><Link className="link one" to = "/about"><CgProfile/>About /</Link></div>
                    <div className="link"><Link className="link two" to = "/projects"><GrProjects />Projects /</Link></div>
                    <div className="link"><Link className="link three" to = "/stack"><GoStack/>Tech Stack /</Link></div>
                    <div className="link"><Link className="link four" to = "/resume"><FaRegNewspaper /> Resume /</Link></div>
                    <div className="link"><Link className="link five" to = "/contact"> <MdOutlineContacts /> Contact Me /</Link></div>
                </div>

                <span  onClick={changeVisibility} id="icon" className="material-symbols-outlined">
                    {visible ? "close" : "menu"}
                </span>
            </div>
            {visible && <div id="drawer">
            <div className="link"><Link className="link one" to = "/about"><CgProfile/>About</Link></div>
                    <div className="link"><Link className="link two" to = "/projects"><GrProjects />Projects</Link></div>
                    <div className="link"><Link className="link three" to = "/stack"><GoStack/>Tech Stack</Link></div>
                    <div className="link"><Link className="link four" to = "/resume"><FaRegNewspaper /> Resume</Link></div>
                    <div className="link"><Link className="link five" to = "/contact"> <MdOutlineContacts /> Contact Me</Link></div>
                </div>
                }
            {!visible && <div id="content">
                <h1>Hello, I am Jacob,
                </h1>
                <h1>nice to meet you.</h1>
            </div>}
        </StyledHeader>
    )
}

export default Header;