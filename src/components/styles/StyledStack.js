import styled from "styled-components";

export const StyledStack = styled.div`
display : flex;
justify-content : center;
align-items : center;
flex-direction : column;
min-height : 100vh;
height : fit-content;
width : 100%;
margin-top : 2rem;

.cardsAll {
   margin : 1rem;
   padding : 1rem;
   display : flex;
   justify-content : center;
   align-items  :center;
    min-width : 30vw;
    height : 10rem;
    background-color : transparent;
    outline : 1px solid rgb(27, 27, 27);
    flex-basis : 30vw;

    &:hover { 
      transform : scale(101%);
      box-shadow : 0 0 .2em gray;
      transition : .2s ease-in-out;
    }
}
.iconsCards {
   width : 8rem;
   height : 8rem;
}

 #stackCards {
   flex-wrap : wrap;
   margin-top : 2rem;
    display : flex;
    min-height : 60vw;
    height : fit-content;
    width : 100%;
    justify-content : space-evenly;
}

#reduxCard {
    color : purple;
}

#bootstrapCard {
    color : royalblue;
}

#htmlCard {
    color : dodgerblue;
}

#cssCard {
    color : orange;
}
#nodeIcon {
   color : green;
}
#jsIcon {
   color : yellow;
}
#sqlIcon {
   color : darkorchid;
}
#dbIcon {
   color : white;
}
#apiIcon {
   color : lightblue;
}
#jestIcon {
   color : darkmagenta;
}
#cyIcon {
   color : darkseagreen;
}

.blue {
    background-color : royalblue;
    margin : 1rem;
   padding : 1rem;
   display : flex;
   justify-content : center;
   align-items  :center;
    min-width : 30vw !important;
    height : 10rem;
    outline : 1px solid rgb(27, 27, 27);
    flex-basis : 30vw;
}
.textContent {
    color : white;
    font-size : 20px;
}

.hidden-stack {
    opacity : 0;
    transition : all 1s;
}
.show-stack {
    opacity : 1;
    transition-delay : .7s;
}
#stackMe {
    font-size : 30px;
    margin-top : 3rem;
}


 .hidden-card-icon {
    opacity : 0;
    transform : scale(-10%);
    transition : 1s all;
}
.show-card-icon {
    opacity : 1;
    transform : scale(100%);
    transition : .2s ease-in-out;
    transition-delay : .4s;
    min-width : 30vw;
} 
@media screen and (max-width: 700px) {
   #stackCards {
   flex-wrap : wrap;
   margin-top : 2rem;
   margin-bottom : 6rem;
    display : flex;
    min-height : 60vw;
    height : fit-content;
    width : 100%;
    justify-content : space-evenly;
}

}
.show-card-icon {
    opacity : 1;
    transform : scale(100%);
    transition : .2s ease-in-out;
    transition-delay : .4s;
} 
`