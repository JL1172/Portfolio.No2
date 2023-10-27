import styled from "styled-components";

export const StyledStack = styled.div`
display : flex;
justify-content : center;
align-items : center;
flex-direction : column;
min-height : 100vh;
height : fit-content;
width : 100%;
margin-top : 10rem;

.cardsAll {
   margin : 1rem;
   padding : 1rem;
   display : flex;
   justify-content : center;
   align-items  :center;
    min-width : 8rem;
    height : 10rem;
    background-color : transparent;
    outline : 1px solid rgb(27, 27, 27);
    flex-basis : 20vw;
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
    display : flex;
    flex-direction : column;
    align-items : center;
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
    transition-delay : 1s;
}
#stackMe {
    font-size : 20px;
    margin-top : 3rem;
}

@media screen and (max-width: 700px) {
   #stackCards {
   flex-wrap : wrap;
   margin-top : 4rem;
   margin-bottom : 6rem;
    display : flex;
    min-height : 60vw;
    height : fit-content;
    width : 100%;
    justify-content : space-evenly;
}

}
`