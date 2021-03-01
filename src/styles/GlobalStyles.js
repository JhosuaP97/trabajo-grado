import { createGlobalStyle } from "styled-components";

export const fonts = {
  base:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
};

export const Colors = {
  default: "#aaa",
  primary: "#1D2B37",
  secundary: "#e87140",
  white: "#fff",
  focus: "#222",
};

export const GlobalStyles = createGlobalStyle`


html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  body {
   
    font-family:${fonts.base}

  }
  #root{
    width: 100%;
    height:100%;
  }  
`;
