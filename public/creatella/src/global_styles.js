import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    padding: 20px 40px;
    /* font-family: "Piedra"; */
    font-family: 'Josefin Sans', sans-serif;
    @media screen and (max-width: 800px){
      /* some css */
      padding: 10px
    }

    }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    box-sizing: border-box;
  }
`;
