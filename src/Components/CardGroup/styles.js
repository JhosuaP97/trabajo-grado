import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const WrapperCardGroup = styled.div`
  width: 100%;
  border: 2px solid ${Colors.primary};
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const CardGroupHeader = styled.div`
  background-color: ${Colors.primary};
  display: flex;
  justify-content: space-between;
  color: ${Colors.white};
  padding: 10px 0;
  border-radius: 5px 5px 0 0;
  width: 100%;

  & h2 {
    margin: 0 0 0 10px;
  }

  & svg {
    margin: 0 10px 0 0;
  }
`;

export const CardGroupList = styled.div`
  display: grid;
  grid-gap: 2px;
  grid-auto-rows: auto;
  grid-auto-flow: dense;

  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  justify-content: center;
`;
