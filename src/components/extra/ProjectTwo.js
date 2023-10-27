import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { useContext, useState } from 'react';
import { BiLinkExternal, BiLogoCss3, BiLogoReact } from "react-icons/bi";
import {FaNode} from "react-icons/fa"; 
import { jwtProjectIMG, jwtProjectURl } from '../../URLS/url-folder';
import { SiAxios, SiStyledcomponents } from "react-icons/si";
import {GoDatabase} from "react-icons/go";
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


export default function ProjectTwo() {
    const {activeProject} = useContext(ProjectProvider);
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
        <Card style={{ backgroundColor: "transparent", outline: "2px solid rgb(27, 27, 27)" }} className="project-cards-shown" id = {activeProject ? "activeProject" : "notActiveProject"}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <a href={jwtProjectURl} target='_blank' rel='noreferrer'><BiLinkExternal style = {{color : "white"}} /></a>
                    </IconButton>
                }
                titleTypographyProps={{ color: "white" }}
                title="Full-Stack Auth JWT-TOKEN App"
            />
            <CardMedia
                id="imgProject"
                component="img"
                image={jwtProjectIMG}
                alt="Full-Stack Auth JWT-TOKEN App"
            />
            <CardContent>
                <Typography style={{ color: "white", zIndex : "2", backgroundColor : "black" }} variant="body2" color="text.secondary">
                Welcome to my full-stack application! This project is a complete application that provides both a backend RESTful API and a stylish front-end user interface. The primary goal of this app is to enable user registration and login, granting them access to a personalized interface. Here are some key features and technologies used in this project.
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
                    <Typography s paragraph><h4 style={{color : "dodgerblue"}}>Features:</h4></Typography>
                    <Typography  paragraph>
                        <div  style={{ display: "flex", flexDirection: "column",minHeight : "60vh", justifyContent : "space-evenly", zIndex : "2", backgroundColor : "black" }}>
                            <div> * Authentication and Authorization: We've implemented user authentication and authorization using JWT tokens and bcrypt for secure password hashing. This ensures that only authorized users can access specific parts of the application.</div>
                            <div>
                               * Database Management: We've chosen SQLite3 as our Database Management System (DBMS) to store and manage user data and application information.
                            </div>
                            <div>
                               * Middleware: Throughout the project, we have incorporated middleware for input sanitization, error handling, and route protection on the server side. This ensures data security and robust functionality.
                            </div>
                            <div>
                               * Front-end Styling: The front-end of the application is not just functional but also visually appealing. We've used technologies like styled-components, Material-UI, and Bootstrap to create an attractive and user-friendly interface.
                            </div>
                            <div>
                               * React Router: We've employed React Router to handle client-side routing, allowing users to navigate the application seamlessly.
                            </div>
                        </div>

                    </Typography>
                    <Typography  paragraph>
                        <h4 style={{color :'dodgerBlue'}}>Technologies Used :</h4>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent : "space-evenly", minHeight : "50vh" }}>
                            <div><BiLogoReact className='projectIcons' />React: The core framework for building the web application.</div>
                            <div><SiAxios className='projectIcons' /> Thunk: Middleware for handling asynchronous API calls.</div>
                            <div><SiStyledcomponents className="projectIcons" /> Styled Components: For styling the components.</div>
                            <div><BiLogoCss3 className='projectIcons' />CSS: Used for additional styling.</div>
                            <div><FaNode className="projectIcons" />Node/Express : Used for RESTful API</div>
                            <div><GoDatabase className="projectIcons" />SQLite3 : Used Database Management</div>
                        </div>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}