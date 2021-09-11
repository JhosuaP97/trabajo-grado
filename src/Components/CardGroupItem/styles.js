import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const CardContainer = styled.div`
  width: 330px;
  margin: 0.625rem 1rem;
  border: 0.0625rem solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 0.625rem;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    width: 0.625rem;
    height: 100%;
    background: ${Colors.primary};
    border-radius: 0.625rem 0 0 0.625rem;
  }

  @media screen and (max-width: 576px) {
    width: 180px;
  }
`;

export const Info = styled.div`
  margin-left: 1.875rem;
`;

export const CardState = styled.div`
  position: absolute;
  right: 0.625rem;
  bottom: 0.25rem;
  font-size: 0.75rem;
  font-family: Raleway;

  & span {
    margin-left: 0.125rem;
    background-color: ${Colors.primary};
    color: ${Colors.white};
    height: 0.9375rem;
    width: 0.9375rem;
    border-radius: 50%;
    text-align: center;
    display: inline-block;
  }
`;

export const InfoCard = styled.ul`
  border-bottom: 0.0625rem solid #c2c2c2;
  line-height: 0.9375rem;
  padding: 0.9375rem 0;
  justify-content: space-between;
`;

export const ItemCard = styled.li`
  margin-top: 0.625rem;
  font-family: Lato;
  text-transform: capitalize;

  & > span {
    margin-left: 0.3125rem;
    font-family: Raleway;
    font-size: ${({ attributes }) => (attributes ? "12px" : "1rem")};
  }
`;

export const ItemCardRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Lato;

  div:nth-child(2) {
    margin-right: 1rem;
  }
`;

export const MembersCard = styled.div`
  padding: 0.625rem 0;
  font-family: Lato;

  & > p {
    margin: 0.3125rem 0;
    font-family: Raleway;
  }
`;
