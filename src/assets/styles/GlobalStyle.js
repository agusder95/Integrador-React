import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     *{
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          scroll-behavior: smooth;
     }

     ul,li{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

`;