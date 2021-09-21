import styled from "styled-components";
import { Colors, scrollBarStyle } from "styles/GlobalStyles";

export const ExtraInfoContainer = styled.section`
  background-color: ${Colors.white};
  width: 100%;
  margin-top: 15px;
  border-radius: 10px;
  height: 115px;
  overflow-y: auto;
  ${scrollBarStyle}

  p {
    color: ${Colors.default};
    font-size: 18px;
  }
`;

export const InfoContainer = styled.div`
  margin: 0 2rem;
`;

export const TitleInfo = styled.h3`
  margin: 5px 0;
  padding-top: 10px;
`;
