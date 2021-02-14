import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const ButtonForm = styled.button`
  background: ${({ fill }) => (fill === "true" ? `${Colors.primary}` : "none")};
  border-radius: 3.75rem;
  border: ${({ fill }) =>
    fill === "true" ? "none" : `2px solid ${Colors.secundary}`};
  color: ${({ fill }) => (fill === "true" ? "#F5F5F5" : `${Colors.secundary}`)};
  cursor: pointer;
  display: inline-block;
  font-family: "Lato";
  height: 2.5rem;
  outline: none;
  transition: 0.2s;
  width: 10rem;

  :hover {
    background-color: ${({ fill }) =>
      fill === "true" ? "#283b4b" : `${Colors.secundary}`};
    color: #fff;
  }
`;