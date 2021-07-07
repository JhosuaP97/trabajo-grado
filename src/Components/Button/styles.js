import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const ButtonForm = styled.button`
  font-family: "Lato";
  font-weight: bold;
  background: ${({ fill }) => (fill === "true" ? `${Colors.primary}` : "none")};
  border-radius: 3.75rem;
  border: ${({ fill }) =>
    fill === "true" ? "none" : `2px solid ${Colors.secundary}`};
  color: ${({ fill }) => (fill === "true" ? "#F5F5F5" : `${Colors.secundary}`)};
  cursor: pointer;
  display: inline-block;
  height: 2.5rem;
  outline: none;
  transition: 0.2s;
  font-size: 1.125rem;
  min-width: 10rem;
  padding: 0 0.625rem;

  :hover {
    background-color: ${({ fill }) =>
      fill === "true" ? "#283b4b" : `${Colors.secundary}`};
    color: #fff;
  }
`;
