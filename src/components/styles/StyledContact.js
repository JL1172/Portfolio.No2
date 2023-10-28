import styled from "styled-components";

export const StyledContact = styled.div`
padding-top : 3rem;
display : flex;
justify-content : center;
align-items : center;
min-height : 100vh;
flex-direction : column;
height : fit-content;
width : 100%;
margin-top : 2rem;

#form {
   min-height : 50vh;
   height : fit-content;
   display : flex;
   flex-direction : column;
   justify-content : space-evenly;
   align-items : center;
    .inputName {
        border : none;
        margin-top : 2rem;
        width : 14rem;
        border-bottom : 1px solid rgb(27, 27, 27);
        background-color : transparent;
        color : white;
        &:focus {
            outline : none;
            border : none;
            transition : .2s ease-in-out;
        }
    }
    .inputName::placeholder {
      color : white;
    }
    #socialMediaIcons {
        display : flex;
        justify-content : space-evenly;
        width : 10vw;
        margin-bottom : 3rem;
        .socials {
            width : 2rem;
            height : 2rem;
            color : dodgerblue;
            transition : .2s;
            &:hover {
                transform : scale(105%);
                transition : .2s ease-in-out;
            }
        }
    }
    #submissionButton {
        height : 2rem;
        width : 14rem;
        background-color : dodgerblue;
        transition : .1s ease-in-out;
        &:hover {
            transform : scale(102%);
            transition : .1s ease-in-out;
        }
        &:active {
            transform : scale(105%);
            transition : .1s ease-in-out;
        }
    }
    .mess {
        margin-top : 4rem;
        outline : 1px solid rgb(27, 27, 27);
        border : none;
        margin-bottom : 3rem;
        &:focus {
            outline : none;
        }
    }
}
@media screen and (max-width : 700px) {
    #socialMediaIcons {
        display : flex;
        justify-content : space-evenly;
        width : 50vw !important;
        margin-bottom : 3rem;
    }
}
`