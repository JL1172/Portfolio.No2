import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { useContext, useState } from 'react';
import { BiLinkExternal, BiLogoCss3, BiLogoReact } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
import { npmManagerUrl, npmManagerVideo } from '../../URLS/url-folder';
import { IoLogoElectron } from "react-icons/io5";
import { SiStyledcomponents } from "react-icons/si";
import { GoDatabase } from "react-icons/go";
import { ProjectProvider } from '../../contexts/ProjectContext';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


export default function ProjectSeven() {
    const { activeProject } = useContext(ProjectProvider);
    // useEffect(() => {
    //     const observer4 = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add('project-cards-shown');
    //             } else {
    //                 entry.target.classList.remove("project-cards-shown");
    //             }
    //         })
    //     })
    //     const project_cards_hidden = document.querySelectorAll(".project-cards-hidden");
    //     project_cards_hidden.forEach(el => observer4.observe(el))
    // }, [])
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card style={{ backgroundColor: "transparent", outline: "2px solid rgb(27, 27, 27)" }} className="project-cards-shown" id={activeProject ? "activeProject" : "notActiveProject"}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <a href={npmManagerUrl} target='_blank' rel='noreferrer'><BiLinkExternal style={{ color: "white" }} /></a>
                    </IconButton>
                }
                titleTypographyProps={{ color: "white" }}
                title="Npm Manger/CRA Bundler"
            />
            {/* <CardMedia
                id="imgProject"
                component="img"
                image={jwtProjectIMG}
                alt="Npm Manger/CRA Bundler"
            /> */}
             <iframe title = 'expense tracker' id = "imgProject" src={npmManagerVideo} frameborder="0" style={{width: '100%', height: '30rem'}} ></iframe> 
            <CardContent>
                <Typography style={{ color: "white", zIndex: "2", backgroundColor: "black" }} variant="body2" color="text.secondary">
                    •	Developed an Electron application to automate the dynamic startup of Node.js applications located in different directories, significantly improving development efficiency: used child-process module in node.
                    •	Engineered a feature, that, with simple configuration, and one-click of a button, instantiates a CRA and downloads the checked NPM packages in a chosen directory, which streamlines project configuration and setup
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    style={{ color: "white" }}
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent id="contentCard">
                    <Typography s paragraph><h4 style={{ color: "dodgerblue" }}>Features:</h4></Typography>
                    <Typography paragraph>
                        <div style={{ display: "flex", flexDirection: "column", minHeight: "60vh", justifyContent: "space-evenly", zIndex: "2", backgroundColor: "black" }}>
                            <div> * Engineered a feature, that, with simple configuration, and one-click of a button, instantiates a CRA and downloads the checked NPM packages in a chosen directory, which streamlines project configuration and setup.</div>
                            <div>
                                * Database Management: We've chosen SQLite3 as our Database Management System (DBMS) to store and manage user data and application information.
                            </div>
                            <div>
                                * Developed an Electron application to automate the dynamic startup of Node.js applications located in different directories, significantly improving development efficiency: used child-process module in node..
                            </div>
                            <div>
                                * Front-end Styling: The front-end of the application is not just functional but also visually appealing. We've used technologies like styled-components, Material-UI, and Bootstrap to create an attractive and user-friendly interface.
                            </div>
                        </div>

                    </Typography>
                    <Typography paragraph>
                        <h4 style={{ color: 'dodgerBlue' }}>Technologies Used :</h4>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", minHeight: "50vh" }}>
                            <div><BiLogoReact className='projectIcons' />React: The core framework for building the web application.</div>
                            <div><IoLogoElectron className='projectIcons' /> Electron: software for configuring this application to be a desktop application.</div>
                            <div><SiStyledcomponents className="projectIcons" /> Styled Components: For styling the components.</div>
                            <div><BiLogoCss3 className='projectIcons' />CSS: Used for additional styling.</div>
                            <div><FaNode className="projectIcons" />Node/Express : Used for RESTful API, and utilized node's child process module for system execution</div>
                            <div><GoDatabase className="projectIcons" />SQLite3 : Used Database Management</div>
                        </div>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}