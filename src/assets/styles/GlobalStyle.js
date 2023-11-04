import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        @media screen and (min-width: 320px){
            font-size:small;
        }
        @media screen and (min-width: 768px){
            font-size:medium;
        }
        @media screen and (min-width: 1024px){
            font-size:large;
        }
    }

    body{
        background-color: ${colors.mainWhite};
    }

    ul,ol{
        list-style-type: none;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

`;
