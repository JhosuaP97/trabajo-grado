import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const CardContainer = styled.article`
  width: 264px;
  height: 260px;
  background-color: ${Colors.white};
  border-radius: 20px;
  border: 2px solid ${Colors.default};
  cursor: pointer;
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

export const Dots = styled.button`
  background: none;
  border: none;
  font-size: 25px;
  color: ${Colors.default};
  cursor: pointer;
`;
