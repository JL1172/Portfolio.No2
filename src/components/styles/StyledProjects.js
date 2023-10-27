import styled from "styled-components";

export const StyledProject = styled.div`
display : flex;
justify-content : center;
flex-direction : column;
align-items : center;
min-height : 100vh;
height : fit-content;
width : 100%;
margin-top : 2rem;
padding-bottom : 4rem;

/* hidden */
.project-title-shown {
    opacity : 1;
    color : white;
    position : absolute;
    transition : 1s;
}
.project-title-hidden {
    opacity : 0 ;
    color : black !important;
    transition : 1s;
    z-index : -5;
    transition-delay : 1s;
    font-size : 20px;
}
.project-cards-hidden {
    opacity : 0;
    transition : 1s ease-in-out;
}
.project-cards-shown {
    margin-top : 5rem;
    opacity : 1;
    flex-wrap : wrap;
    min-height : 40vh;
    height : fit-content;
    width : 50vw;

    transition-delay : 1.5s;
    z-index : 2;
    background-color : (34, 34, 34);
    padding : 1rem;
    transition-property : box-shadow .2s ease-in-out;
    &:hover {
        transition : .2s ease-in-out;
        box-shadow : 0 0 1em darkgray;
    }
}
.pagination-hidden {
    opacity : 1;
    transition : 1s;
    padding : .2rem;
}
.pagination-shown {
    opacity : 1;
    margin-top : 3rem;
    margin-bottom : 3rem;
    border-radius : 1rem;
    padding : .2rem;
    background-color : whitesmoke;
    transition : .2s;
    transition-delay : 1.2s;
    &:hover {
        box-shadow  : 0 0 .6em darkgray;
        transition : .2s ease-in-out;
    }
}
/* hidden */
#imgProject {
    height : 40vh;
}
#contentCard {
    color : white;
}
.projectIcons {
    width : 1.5rem;
    height : 1.5rem;
    color : dodgerblue;
}
#settingButton {
    display : inline;
    width : 15vw;
}
/* project one  */
@media screen and ( max-width : 1200px) {
    .project-cards-shown {
    opacity : 1;
    flex-wrap : wrap;
    width : 90vw;
    min-height : 50vh;
    height : fit-content;
    transition-delay : 1.5s;
    z-index : 2;
    padding : 1rem;
}
    #settingButton {
        width : 50vw;
    }
}
@media screen and (max-width : 700px) {
    .project-cards-shown {
    opacity : 1;
    flex-wrap : wrap;
    width : 98vw;
    min-height : 50vh;
    height : fit-content;
    transition-delay : 1.5s;
    z-index : 2;
    padding : 1rem;
}
#imgProject {
    height : 20vh;
}
#settingButton {
    width : 50vw;
    display : flex;
}
}
`