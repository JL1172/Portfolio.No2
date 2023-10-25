import styled, { keyframes } from "styled-components";

const kf = keyframes`
0% {

}
100% {
    transform : scaleY(100%);
}
`



export const StyledHeader = styled.div`

min-height : 110vh;
height : fit-content;
width : 100%;



display : flex;
flex-direction : column;

#links {
    display : flex;
    justify-content : space-evenly;
    width : 100vw;
    a {
        text-decoration : none;
        color : inherit;
        font-weight : bolder;
        font-size : 16px;
        &:hover {
            color : rgb(68, 65, 65);
            transition : .2s ease-in-out;
        }
    }
    .link {
        position : relative;
        display : flex;
        justify-content : center;
        align-items : center;

    }


    .one::before {
        content : "";
        position : absolute;
        border : 1px solid rgb(68, 65, 65);
        top : 1.6rem;
        left : 1.7rem;
        transition : .1s ease-in-out;
        opacity : 0;
    }
    .one:hover::before {
        transform : scaleX(3200%);
        opacity : 1;
        transition : .19s ease-in-out;
    }


    .two::before {
        content : "";
        position : absolute;
        top : 1.6rem;
        left : 2.2rem;
        opacity : 0;
        border : 1px solid rgb(68, 65, 65);
    }
    .two:hover::before {
        opacity : 1;
        transform : scaleX(3900%);
        opacity : 1;
        transition : .19s ease-in-out;
    }


    .three::before {
        content : "";
        position : absolute;
        top : 1.6rem;
        left : 3rem;
        border : 1px solid rgb(68, 65, 65);
        opacity : 0;
    }
    .three:hover::before {
        transform : scaleX(4800%);
        transition : .19s ease-in-out; 
        opacity : 1;
    }


    .four::before {
        content : "";
        position : absolute;
        top : 1.6rem;
        left : 2.3rem;
        border : 1px solid rgb(68, 65, 65);
        opacity : 0;
    }
    .four:hover::before {
        transform : scaleX(4000%); 
        transition : .19s ease-in-out; 
        opacity : 1;
    }

    .five::before {
        content : "";
        position : absolute;
        top : 1.6rem;
        left : 3.2rem;
        opacity : 0;
        border : 1px solid rgb(68, 65, 65);
    }
    .five:hover::before {
        transform : scaleX(5000%);
        opacity : 1;
        transition : .19s ease-in-out; 
    }
}



#conditional1 {
    width : 100%;
    display : flex;
    justify-content  :space-between;
    align-items  :center;
    border-bottom : 1px solid #EADFDF;

    #icon {
        display : none;
    }
    h3 {
    margin-left : 1rem;
    }
}

#links {
    .tabs {
        color : black;
        width : 25%;
        &:hover {
            color : gray;
            transition : .2s ease-in-out; 
        }
    }

}





#content {

    width : 100%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    color : black;
    margin-top : 2rem;
}

@media screen and (min-width: 701px)  and (max-width : 1000px) {
    a {
        font-size : 14px !important;
    }

    #links {
        width : 100vw;
    }
}
@media screen and (max-width: 700px){

    
#content {

width : 100%;
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
color : black;
margin-top : 2rem;
h1 {
    font-size : 18px;
}
}

    #links {
        display : none;
    }



    #icon {
        display : flex !important;
        color : black;
        width : 3rem;
        height : 3rem;
        margin-right : 1rem;
        margin-top : 1rem;
        cursor: pointer;
    }



    #drawer {
        width : 100%;
        background-color: #EADFDF;
        display : flex;
        justify-content : space-evenly;
        flex-direction : column;
        align-items : center;
        transform-origin : top;
        transform : scaleY(0%); 
        animation : ${kf} .2s ease-in-out forwards;
        height : 100vh;
        .link {
            background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%);
            background-blend-mode: screen;
            width : 80vw;
            border-radius : 5px;
            height : 10vh;
            display : flex;
            justify-content : space-evenly;
            align-items : center;
            text-decoration : none;
            color : black;
            font-size : 25px;
            font-weight : bolder;
            border-bottom : 1px solid #EADFDF;
            transition : .1s ease-in-out; 
            &:hover {
                background-color : #ECE2DF;
                transition : .1s ease-in-out; 
            }
        }
    }
}
`