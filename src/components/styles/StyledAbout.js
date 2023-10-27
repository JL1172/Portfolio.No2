import styled from "styled-components";


export const StyledAbout = styled.div`
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
min-height : 100vh;
height : fit-content;
width : 100%;
#aboutMe {
    position : absolute;
    font-size : 20px;
}
#outerContainer {
    display : flex;
    flex-direction : column;
    justify-content  : space-evenly;
    align-items : center;
    min-height : 50vh;
    line-height : 2rem;
}
#container1 {
    position : relative;
    width : 60vw;
    text-indent : 1.5rem;
}

#container2 {
    position : relative;
    width : 60vw;
    text-indent : 1.5rem;
}

#container3 {
    position : relative;
    width : 60vw;
    text-indent : 1.5rem;
}

.span {
   color : black;
   opacity : 0;
}
.span-seen {
    opacity : 1;
    background-color : white;
    transition : .5s ease-in-out;
    transition-delay : 1.5s;
}
#pageCount {
    display: none;
}
@media screen and (max-width : 700px) {
    #outerContainer {
    h2 {
        margin-bottom : 2rem;
    }
    padding-top : 1rem;
    padding-bottom : 3rem;
    display : flex;
    justify-content : center;
    align-items : center;
    }
    .active {
        display : block;
        width : 80vw;
    }
    .not-active {
        display : none;
    }
}

@media screen and (max-width : 700px) {

    #pageCount {
        margin-top : 3rem;
        display: block;
        z-index: 2;
        border-radius: 1rem;
        padding : .5rem;
        margin-bottom : 1rem;
        color : white;
        background-color : darkgray;
    }
    #pageCount:hover {
        box-shadow: 0 0 1em gray;
        transition: .1s ease-in-out;
    }
}
.hidden-page {
    opacity : 0;
 }
 .seen-page {
    opacity : 1;
    transition : .4s ease-in-out;
    transition-delay : 1s;
 }
 .span {
   color : black;
   background-color : white;
   opacity : 0;
}
.span-seen {
    opacity : 1;
    background-color : white;
    transition : .1s;
    transition-delay : 0s;
}

`