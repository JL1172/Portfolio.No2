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
import { expenseTrackerUrl, expenseTrackerVideo } from '../../URLS/url-folder';
import { SiRedux } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
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


export default function ProjectSix() {
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
                        <a href={expenseTrackerUrl} target='_blank' rel='noreferrer'><BiLinkExternal style={{ color: "white" }} /></a>
                    </IconButton>
                }
                titleTypographyProps={{ color: "white" }}
                title="Expense Tracker"
            />
            <iframe title = 'expense tracker' id = "imgProject" src={expenseTrackerVideo} frameborder="0" style={{width: '100%', height: '30rem'}} >Video loading...</iframe> 
            <CardContent>
                <Typography style={{ color: "white", zIndex: "2", backgroundColor: "black" }} variant="body2" color="text.secondary">
                    Expense Tracker is a web application built using React, Express, Bcrypt, Jsonwebtoken, Styled Components, Postgres, Knex, PgAdmin4, Tailwind CSS, and Material-UI. It serves as an efficient tool for tracking and managing expenses, providing features for authentication, authorization, access controls, and a RESTful API for communication between the front end and the relational database.
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
                            <div> * Authentication and Authorization: implemented user authentication and authorization using JWT tokens and bcrypt for secure password hashing. This ensures that only authorized users can access specific parts of the application.</div>
                            <div>
                                * Authorization: Role-based access controls for different user roles.
                            </div>
                            <div>
                                * Application Controls: Efficient controls for managing expenses and categories.
                            </div>
                            <div>
                                * Restricted Routes: Certain routes are restricted based on user roles.
                            </div>
                            <div>
                                * REST API: A comprehensive RESTful API for communication between the front end and the database.
                            </div>
                        </div>

                    </Typography>
                    <Typography paragraph>
                        <h4 style={{ color: 'dodgerBlue' }}>Technologies Used :</h4>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", minHeight: "50vh" }}>
                            <div><BiLogoReact className='projectIcons' />React: The core framework for building the web application.</div>
                            <div><SiRedux className='projectIcons' /> Redux/Thunk: State Management and Middleware for handling asynchronous API calls.</div>
                            <div><SiStyledcomponents className="projectIcons" /> Styled Components: For styling the components.</div>
                            <div><SiTailwindcss className="projectIcons" /> Tailwind: used for the register, login, and landing page.</div>
                            <div><BiLogoCss3 className='projectIcons' />CSS: Used for additional styling.</div>
                            <div><FaNode className="projectIcons" />Node/Express : Used for RESTful API</div>
                            <div><DiPostgresql className="projectIcons" />Postgres : Used Database Management</div>
                            <div><SiJsonwebtokens className="projectIcons" />Jsonwebtoken : Used for authorization</div>
                        </div>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}