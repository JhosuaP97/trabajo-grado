import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Colors } from "styles/GlobalStyles";
import Button from "Components/Button";

export const Container = styled.main`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ContainerImage = styled.section`
  width: 50%;
  img {
    width: 31.25rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const TitleForm = styled.div`
  text-align: center;
`;
export const FieldForm = styled.div`
  margin: 2rem;
`;

export const ContainerLink = styled.div`
  text-align: center;
`;

export const Link = styled(LinkRouter)`
  color: ${Colors.black};
  width: 100%;
  font-family: Raleway;
  font-weight: bold;
`;

export const Form = styled.form`
  text-align: left;
`;

export const ButtonForm = styled(Button)`
  width: 100%;
`;
