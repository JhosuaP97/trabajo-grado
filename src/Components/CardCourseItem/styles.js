import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const CardContainer = styled.article`
  width: 244px;
  height: 220px;
  background-color: ${Colors.white};
  border-radius: 20px;
  border: 2px solid ${Colors.default};
  cursor: pointer;
  margin-top: 1rem;
  position: relative;
  :hover {
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
      0 2px 6px 2px rgb(60 64 67 / 15%);
  }
`;

export const MenuContainer = styled.ul`
  position: absolute;
  right: 1.25rem;
  left: 50%;
  bottom: 0;
  border: 2px solid ${Colors.default};
  border-radius: 10px;
  background-color: ${Colors.white};
`;

export const MenuItem = styled.li`
  &:nth-child(2) button {
    border: 1px solid ${Colors.error};
    background-color: ${Colors.white};
    color: ${Colors.error};
    :hover {
      background-color: ${Colors.error};
      color: ${Colors.white};
    }
  }
`;

export const ButtonItem = styled.button`
  width: 100%;
  border: none;
  padding: 0 0.625rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  border-radius: 3.75rem;
  cursor: pointer;
  background-color: ${Colors.primary};
  color: ${Colors.white};
  transition: 0.1s ease-out;
  transition-property: color background;
  padding: 0.2rem;

  :hover {
    background-color: "#283b4b";
    color: ${Colors.white};
  }
`;

export const BackgrounImage = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${Colors.primary};
  border-radius: 20px 20px 0 0;
`;
export const CardInfo = styled.div`
  margin: 0.5rem;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const Dots = styled.button`
  background: none;
  border: none;
  padding: 0 0 0 6rem;
  text-align: right;
  position: absolute;
  right: 0;
  font-size: 25px;
  color: ${Colors.default};
  cursor: pointer;
  :hover {
    color: ${Colors.primary};
  }
`;
