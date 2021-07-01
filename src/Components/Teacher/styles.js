import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  width: 100%;
`;

export const TitleHeader = styled.h1`
  margin: 28px 0;
  font-family: Lato;
`;

export const ListGroups = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
`;
