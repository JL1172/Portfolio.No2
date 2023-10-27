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
import {  portfolioIMG, portfolioURL, portfolioWebsiteURL } from '../../URLS/url-folder';
import { SiAxios, SiStyledcomponents } from "react-icons/si";
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
                    <IconButton aria-label="settings" id = "settingButton">
                        <a style={{display : 'inline'}} title = "github" href={portfolioURL} target='_blank' rel='noreferrer'><BiLinkExternal style={{ color: "white" }} /><span style={{color : "white", fontSize : "12px",marginRight : "1rem"}}>Github</span></a>
                        <a style={{display : 'inline'}} title = "website" href={portfolioWebsiteURL} target='_blank' rel='noreferrer'><BiLinkExternal style={{ color: "white" }} /><span style={{color : "white",fontSize : "12px"}}>Website</span></a>
                    </IconButton>
                }
                titleTypographyProps={{ color: "white" }}
                title="Portfolio No.1"
            />
            <CardMedia
                id="imgProject"
                component="img"
                image={portfolioIMG}
                alt="Portfolio No.1"
            />
            <CardContent>
                <Typography style={{ color: "white", fontFamily: "inherit", zIndex: "2", backgroundColor: "black"}} variant="body2" color="text.secondary">
                    Developed a dynamic portfolio showcasing projects, skills, resume, and an “about me” post using React, custom hooks, Redux, Vercel, FormSpree, and Thunk.
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
                    <Typography style={{ display: "flex", flexDirection: "column", paddingTop : "6rem",justifyContent : "space-evenly", zIndex : "2", backgroundColor : "black" }}  paragraph>
                        <h4 style={{ color: 'dodgerBlue' }}>Technologies Used :</h4>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", minHeight: "50vh" }}>
                            <div><BiLogoReact className='projectIcons' />React: The core framework for building the web application.</div>
                            <div><SiAxios className='projectIcons' /> Thunk: Middleware for handling asynchronous API calls.</div>
                            <div><SiStyledcomponents className="projectIcons" /> Styled Components: For styling the components.</div>
                            <div><BiLogoCss3 className='projectIcons' />CSS: Used for additional styling.</div>
                        </div>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}