import { createGlobalStyle } from "styled-components";
import Raleway from "fonts/Raleway-Regular.ttf";
import Lato from "fonts/Lato-Bold.ttf";

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

@font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    src: local('Raleway'), local('Raleway-Regular'), url(${Raleway}) format('woff2');
}

@font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    src: local('Lato'), local('Lato-Bold'), url(${Lato}) format('woff2');
}



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
