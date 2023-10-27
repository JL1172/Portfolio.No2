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
import { FaNode } from "react-icons/fa";
import { bookStoreIMG, bookStoreURL } from '../../URLS/url-folder';
import { SiAxios, SiStyledcomponents } from "react-icons/si";
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


export default function ProjectThree() {
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
                        <a href={bookStoreURL} target='_blank' rel='noreferrer'><BiLinkExternal /></a>
                    </IconButton>
                }
                titleTypographyProps={{ fontFamily: "inherit", color: "white" }}
                title="Full-Stack Book Store App"
            />
            <CardMedia
                id="imgProject"
                component="img"
                image={bookStoreIMG}
                alt="Full-Stack Book Store App"
            />
            <CardContent>
                <Typography style={{ color: "white", fontFamily: "inherit", zIndex: "2", backgroundColor: "black" }} variant="body2" color="text.secondary">
                    Welcome to the README for the Bookstore Application! This project is a full-stack application that simulates a bookstore specializing in programming and computer science-focused books. It leverages a range of technologies and features to provide a user-friendly experience.
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
                    <Typography style={{ fontFamily: "inherit" }} paragraph><h4 style={{ color: "dodgerblue" }}>Features:</h4></Typography>
                    <Typography style={{ fontFamily: "inherit" }} paragraph>
                        <div style={{ display: "flex", flexDirection: "column", minHeight: "60vh", justifyContent: "space-evenly", zIndex: "2", backgroundColor: "black" }}>
                            <div> * User Authentication: Users can register and log in to access the bookstore's features..</div>
                            <div>
                                * Home Page: The home page displays featured books for the day and offers a visually pleasing UI/UX.
                            </div>
                            <div>
                                * Shopping Cart: Users can add, remove, increment, and decrement items in their shopping cart.
                            </div>
                            <div>
                                * Search Functionality: A search bar with data list recommendations simplifies finding books.
                            </div>
                            <div>
                                * Book Filters: Users can apply filters to narrow down their book choices.
                            </div>
                            <div>
                                * User Profiles: User profiles include analytics on their favorite types of books and a history of their purchases.
                            </div>
                            <div>
                                * JWT Authentication: The application employs JWT (JSON Web Tokens) for secure authentication, ensuring that all API endpoints are password-protected.
                            </div>
                            <div>
                                * Relational Database: All data is persisted in a relational database created from scratch using Knex and SQLite.
                            </div>
                        </div>

                    </Typography>
                    <Typography style={{ fontFamily: "inherit" }} paragraph>
                        <h4 style={{ color: 'dodgerBlue' }}>Technologies Used :</h4>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", minHeight: "50vh" }}>
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