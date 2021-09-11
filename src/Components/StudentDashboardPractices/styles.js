import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";
export const StudentPracticesContainer = styled.main`
  width: 100%;
  display: ${({ practicesStudent }) =>
    practicesStudent.length > 0 ? "grid" : ""};
  gap: 1rem;
  grid-auto-rows: 16rem;
  align-items: center;
  justify-content: center;
  height: 100%;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export const CardContainer = styled.article`
  width: 244px;
  height: 320px;
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

export const BackgrounImage = styled.div`
  width: 100%;
  height: 40%;
  background-color: ${Colors.primary};
  border-radius: 20px 20px 0 0;
  text-align: center;

  svg {
    width: 3.5rem;
    height: 100%;
  }
`;
export const CardInfo = styled.div`
  margin: 0.5rem;

  p {
    margin: 0.5rem 0;
  }
`;

export const StateCard = styled.span`
  color: ${Colors.secondary};
`;

export const ActionButtonContainer = styled.div`
  margin: 1rem 0;
`;
