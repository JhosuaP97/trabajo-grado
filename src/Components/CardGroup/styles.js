import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const CardContainer = styled.div`
  max-width: 380px;
  width: 100%;
  border: 2px solid ${Colors.primary};
  border-radius: 10px;
`;

export const CardHeader = styled.div`
  background-color: ${Colors.primary};
  display: flex;
  justify-content: space-between;
  color: ${Colors.white};
  padding: 10px 0;
  border-radius: 5px 5px 0 0;

  & h2 {
    margin: 0 0 0 10px;
  }

  & svg {
    margin: 0 10px 0 0;
  }
`;

export const CardContent = styled.div`
  width: 95%;
  margin: 10px auto;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 10px;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    width: 10px;
    height: 100%;
    background: ${Colors.primary};
    border-radius: 10px 0 0 10px;
  }
`;

export const Info = styled.div`
  margin-left: 30px;
`;

export const CardState = styled.div`
  position: absolute;
  right: 10px;
  bottom: 4px;
  font-size: 12px;
  font-family: Raleway;

  & span {
    margin-left: 2px;
    background-color: ${Colors.primary};
    color: ${Colors.white};
    height: 15px;
    width: 15px;
    border-radius: 50%;
    text-align: center;
    display: inline-block;
  }
`;

export const InfoCard = styled.ul`
  border-bottom: 1px solid #c2c2c2;
  line-height: 15px;
  padding: 0.9375rem 0;
`;

export const ItemCard = styled.li`
  margin-top: 10px;
  font-family: Lato;

  & > span {
    margin-left: 0.3125rem;
    font-family: Raleway;
  }
`;

export const MembersCard = styled.div`
  padding: 10px 0;
  font-family: Lato;

  & > p {
    margin: 5px 0;
    font-family: Raleway;
  }
`;
