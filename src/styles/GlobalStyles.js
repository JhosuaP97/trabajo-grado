import { createGlobalStyle } from "styled-components";

export const fonts = {
  base: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
};

export const Colors = {
  default: "#c2c2c2",
  primary: "#1D2B37",
  secondary: "#e87140",
  white: "#fff",
  black: "#232127",
  focus: "#222",
  error: "#EF3E3E",
  selectedItem: "#68CC58",
  rejectItem: "#FF6464",
};

export const GlobalStyles = createGlobalStyle`


html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  ul, li, h1, h2, h3,h4, p, button {
    margin: 0;
    padding: 0;
    
  }

  h1,h2,h3,h4,button{
    font-weight: 700;
  font-family: "Lato";
  }

  li,span,p{
    font-family: Raleway;
  }

  ul {
    list-style: none;
  }

  

  body {
    font-feature-settings: 'pnum' on, 'lnum' on;
    font-family:${fonts.base};
  }
  #root{
    width: 100%;
    height:100%;
  }  
`;
