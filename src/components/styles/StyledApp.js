import styled from "styled-components";
import '@fontsource/roboto/400.css';



export const StyledApp = styled.div`
font-family: 'Playfair Display', serif !important;
min-height : 600vh;
height : fit-content;
background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%);
 background-blend-mode: screen;
 display : flex;
 justify-content : space-evenly;
 flex-direction : column;
 .hidden {
    opacity : 0 !important;
    filter : blur(5px);
    transform : scaleY(0%);
    transition : all .5s;
 }
 .show {
    opacity : 1 !important;
    transform-origin : bottom;
    background-color : black;
    color : white;
    filter : blur(0);
    transform : scaleY(100%) !important; 
 }
`