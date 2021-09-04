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
  :hover {
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
      0 2px 6px 2px rgb(60 64 67 / 15%);
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
`;

export const TitleCard = styled.h1`
  font-size: 1.25rem;
`;

export const Dots = styled.button`
  background: none;
  border: none;
  font-size: 25px;
  color: ${Colors.default};
  cursor: pointer;
`;
