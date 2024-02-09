import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { useContext, useState } from "react";
import { BiLinkExternal, BiLogoCss3, BiLogoReact, BiLogoPostgresql} from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import {
 restApi
} from "../../URLS/url-folder";
import { SiAxios, SiStyledcomponents } from "react-icons/si";
import { ProjectProvider } from "../../contexts/ProjectContext";
import nodeImg from "../imgs/node-space-img.png";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
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
    <Card
      style={{
        backgroundColor: "transparent",
        outline: "2px solid rgb(27, 27, 27)",
      }}
      className="project-cards-shown"
      id={activeProject ? "activeProject" : "notActiveProject"}
    >
      <CardHeader
        action={
          <IconButton aria-label="settings" id="settingButton">
            <a
              style={{ display: "inline" }}
              title="github"
              href={restApi}
              target="_blank"
              rel="noreferrer"
            >
              <BiLinkExternal style={{ color: "white" }} />
              <span
                style={{
                  color: "white",
                  fontSize: "12px",
                  marginRight: "1rem",
                }}
              >
                API
              </span>
            </a>
          </IconButton>
        }
        titleTypographyProps={{ color: "white" }}
        title="Node-Space"
      />
      <CardMedia
        id="imgProject"
        component="img"
        image={nodeImg}
        alt="Node-Space"
      />
      <CardContent>
        <Typography
          style={{ color: "white", zIndex: "2", backgroundColor: "black" }}
          variant="body2"
          color="text.secondary"
        >
          Node-Space is an online platform that allows developers to create
          creator accounts, write their own blogs, have their own following, and
          release their own courses.
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
          <Typography
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "6rem",
              justifyContent: "space-evenly",
              zIndex: "2",
              backgroundColor: "black",
            }}
            paragraph
          >
            <h4 style={{ color: "dodgerBlue" }}>Technologies Used :</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                minHeight: "50vh",
              }}
            >
              <div>
                <BiLogoReact className="projectIcons" />
                React: The core framework for building the web application.
              </div>
              <div>
                <SiAxios className="projectIcons" /> Thunk: Middleware for
                handling asynchronous API calls.
              </div>
              <div>
                <SiStyledcomponents className="projectIcons" /> Styled
                Components: For styling the components.
              </div>
              <div>
                <BiLogoCss3 className="projectIcons" />
                CSS: Used for additional styling.
              </div>
              <div>
                <SiNestjs className="projectIcons" />
                Nestjs: engineered the RESTful API with Nestjs.
              </div>
              <div>
                <BiLogoPostgresql className="projectIcons" />
                Postgres: Utilized postgres to implement a relational database.
              </div>
              <div>
                <SiPrisma className="projectIcons" />
                Prisma: Utilized the Prisma(ORM) to design the relational database.
              </div>
            </div>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
