import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const GraphicsContainer = styled.section`
  background-color: ${Colors.white};
  width: 100%;
  margin-top: 15px;
  border-radius: 10px;
  height: 115px;

  h3 {
    margin-bottom: 10px;
    padding-top: 10px;
  }

  p {
    color: ${Colors.default};
    font-size: 20px;
  }
`;

export const GraphicsInfo = styled.div`
  margin-left: 2rem;
`;
