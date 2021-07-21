import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const BackgrounContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.default};
`;

export const MainStudent = styled.div`
  display: flex;
  height: 80%;
`;

export const ConfigPractice = styled.div`
  margin-right: 1.25rem;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 562px;
  width: 15rem;
  justify-content: space-between;
`;

export const Data = styled.div`
  display: flex;
  background-color: ${Colors.white};
  margin: 0 20px;
  border-radius: 0.5rem;
  max-height: 562px;
`;

export const Info = styled.div`
  width: 18.75rem;
`;

export const ProductsDisplay = styled.div`
  width: 37.5rem;
  margin: 0 20px;
`;
