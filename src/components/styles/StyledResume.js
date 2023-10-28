import styled from "styled-components";

export const StyledResume = styled.div`
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
min-height : 100vh;
height : fit-content;
width : 100%;
margin-top : 2rem;
z-index : 1;
text-align : center;
.button-hidden {
    opacity : 0;
    transition : .2s;
    transform : scaleY(0);
}
.button-shown {
    opacity : 1;
    transition : .2s ease-in-out;
    transform : scaleY(100%);
    margin-top : 5rem;
    transition-delay : 1.5s;
}
.text-hidden {
    opacity : 0;
    transition : .2s;
}
.text-shown {
    opacity : 1;
    transition : .2s ease-in-out;
    transition-delay : 1.3s;
}
@media screen and (max-width: 1200px) {
   
}
`