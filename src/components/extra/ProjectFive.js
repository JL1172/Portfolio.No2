import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { BiLinkExternal } from "react-icons/bi";
import {  githubPicture, githubURL} from '../../URLS/url-folder';
import { ProjectProvider } from '../../contexts/ProjectContext';

export default function ProjectTwo() {
    const { activeProject } = useContext(ProjectProvider);
    return (
        <Card style={{ backgroundColor: "transparent", outline: "2px solid rgb(27, 27, 27)" }} className="project-cards-shown" id={activeProject ? "activeProject" : "notActiveProject"}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <a style={{display : 'inline'}} title = "github" href={githubURL} target='_blank' rel='noreferrer'><BiLinkExternal style={{ color: "white" }} /></a>
                    </IconButton>
                }
                titleTypographyProps={{ color: "white" }}
                title="Github Profile"
            />
            <CardMedia
                id="imgProject"
                component="img"
                image={githubPicture}
                alt="Github Profile"
            />
            <CardContent>
                <Typography style={{ color: "white", fontSize : "20px", zIndex: "2", backgroundColor: "black"}} variant="body2" color="text.secondary">
                    For the rest of my projects not mentioned here, attached is the link to my github!
                </Typography>
            </CardContent>
        </Card>
    )
}