import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${Colors.white};
  margin: 1rem;
  padding: 2rem 2rem 2rem 0;
  border-radius: 0.5rem;
  border: 1px solid blue;
  max-width: 1400px;
`;

export const ConfigPractice = styled.div`
  flex: 20;
`;

export const Data = styled.div`
  display: flex;
  flex: 50;
  flex-direction: column;
  margin: 0 20px;
`;
