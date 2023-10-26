import styled, { keyframes } from "styled-components";

const kf = keyframes`
0% {
   transform : scale(125%); 
}
100% {
   opacity : 1;
}
`


export const StyledExtra = styled.div`
display : flex;
flex-direction : column;
align-items  :center;
#relative {
    position : relative;
}
.words {
    display : flex;
    align-items : baseline;
    height : 40vh;
    margin-top : 11rem;
    padding-left : 2rem;
    font-size : 140%;
    flex-direction : column;
    position : relative;
}
.word {
    display : flex;
    margin-right : .5rem;
    flex-basis  :6rem;
}
div:nth-child(1) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    color : black;
}
div:nth-child(2) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 50ms;
    color : black;
}
div:nth-child(3) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 100ms;
    color : black;
}
div:nth-child(4) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 150ms;
    color : black;
}
div:nth-child(5) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 200ms;
    color : black;
}
div:nth-child(6) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 250ms;
    color : black;
}
div:nth-child(7) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay :300ms;
    color : black;
}
div:nth-child(8) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 350ms;
    color : black;
}
div:nth-child(9) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 400ms;
    color : black;
}
div:nth-child(10) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 450ms;
    color : black;
}
div:nth-child(11) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 500ms;
    color : black;
}
div:nth-child(12) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 550ms;
    color : black;
}
div:nth-child(13) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 600ms;
    color : black;
}

#second {
    div:nth-child(1) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
        color : black;animation-delay : 650ms;


}
div:nth-child(2) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 700ms;
    color : black;
}
div:nth-child(3) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 750ms;
    color : black;
}
div:nth-child(4) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 800ms;
    color : black;
}
div:nth-child(5) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 850ms;
    color : black;
}
div:nth-child(6) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 900ms;
    color : black;
}
div:nth-child(7) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay :950ms;
    color : black;
}
div:nth-child(8) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1000ms;
    color : black;
}
div:nth-child(9) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1050ms;
    color : black;
}
div:nth-child(10) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1100ms;
    color : black;
}
div:nth-child(11) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1150ms;
    color : black;
}
div:nth-child(12) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1200ms;
    color : black;
}
#one {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1250ms;
    color : black;
}
#two {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1300ms;
}
#three {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1350ms;
}
#four {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1400ms;
}
#five {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1450ms;
}
#six{
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1500ms;
}
#seven {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1550ms;
}
#eight {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1600ms;
}
#nine {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1650ms;
    
}
}

@media screen and (max-width : 700px) {
    .words {
    display : flex;
    align-items : baseline;
    height : 40vh;
    margin-top : 5rem;
    font-size : 140%;
    flex-direction : column;
    }
}
`