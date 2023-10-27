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
import { useEffect, useState } from 'react';
import { BiLineChart, BiLinkExternal, BiLogoBootstrap, BiLogoCss3, BiLogoReact, BiLogoRedux } from "react-icons/bi";
import { stockMarketIMG, stockMarketUrl } from '../../URLS/url-folder';
import { SiAxios, SiStyledcomponents } from "react-icons/si";

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


export default function ProjectOne() {
    useEffect(() => {
        const observer4 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('project-cards-shown');
                } else {
                    entry.target.classList.remove("project-cards-shown");
                }
            })
        })
        const project_cards_hidden = document.querySelectorAll(".project-cards-hidden");
        project_cards_hidden.forEach(el => observer4.observe(el))
    }, [])
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card style={{ backgroundColor: "black", outline: "2px solid rgb(27, 27, 27)" }} className="project-cards-hidden">
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <a href={stockMarketUrl} target='_blank' rel='noreferrer'><BiLinkExternal style = {{color : "white"}} /></a>
                    </IconButton>
                }
                titleTypographyProps={{  color: "white" }}
                title="Stock Market Trading App"
            />
            <CardMedia
                id="imgProject"
                component="img"
                image={stockMarketIMG}
                alt="Stock Market App"
            />
            <CardContent>
                <Typography style={{ color: "white", zIndex : "2", backgroundColor : "black" }} variant="body2" color="text.secondary">
                    Welcome to the Stock Market Trading Simulator, a web application that allows you to practice trading with real-time data from Finnhub's APIs and Coingecko's API.
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
                    <Typography  paragraph><h4 style={{color : "dodgerblue"}}>Features:</h4></Typography>
                    <Typography paragraph>
                        <div  style={{ display: "flex", flexDirection: "column",minHeight : "60vh", justifyContent : "space-evenly", zIndex : "2", backgroundColor : "black" }}>
                            <div> * Fetches real-time data from Finnhub's and Coingecko's APIs.</div>
                            <div>
                               * Dynamic Account Balance
                            </div>
                            <div>
                               * Your account balance is dynamic and adjusts with every buy or sell action.
                            </div>
                            <div>
                               * Total Equity Balance
                            </div>
                            <div>
                               * Keep track of your total equity balance, which reflects the current value of your portfolio.
                            </div>
                            <div>
                               * Net Loss or Net Gain
                            </div>
                            <div>
                               * Monitor your overall net loss or net gain balance.
                            </div>
                            <div>
                               * Stock Lookup
                            </div>
                            <div>
                               * Search for stocks and view essential information, including high, low, current value, closing price, previous closing price, and percent change.
                            </div>
                            <div>
                               * Add stocks to your watchlist and track their growth or loss with trendlines. For more specific information, toggle a switch.
                            </div>
                            <div>
                               * Watchlist
                            </div>
                            <div>
                               * Buy shares, and they will be added to your portfolio. Watch your dynamic values update as you make transactions.
                            </div>
                            <div>
                               * Profit and Loss Tracking
                            </div>
                            <div>
                               * Easily navigate to see a breakdown of your profit or loss with just one click.
                            </div>
                        </div>

                    </Typography>
                    <Typography paragraph>
                        <h4 style={{color :'dodgerBlue'}}>Technologies Used :</h4>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent : "space-evenly", minHeight : "50vh" }}>
                            <div><BiLogoReact className='projectIcons' />React: The core framework for building the web application.</div>
                            <div><BiLogoRedux className='projectIcons' />React-Redux: For state management and data persistence.</div>
                            <div><SiAxios className='projectIcons' /> Thunk: Middleware for handling asynchronous API calls.</div>
                            <div><BiLineChart className='projectIcons' />Recharts: Used for displaying chart information.</div>
                            <div><SiStyledcomponents className="projectIcons" /> Styled Components: For styling the components.</div>
                            <div><BiLogoBootstrap className='projectIcons' />Reactstrap: Provides pre-built React components for UI elements.</div>
                            <div><BiLogoCss3 className='projectIcons' />CSS: Used for additional styling.</div>
                        </div>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}