import styled from "styled-components";

export const FormStyle = styled.form`
  margin: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.h2`
  margin: 1rem 0.5rem;
  font-weight: 700;
  font-family: "Lato";
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.2rem 0;
`;

export const Field = styled.div`
  width: ${({ select }) => (select ? "20rem" : "10rem")};
  margin: 0.3rem 0.5rem;
`;

export const WrapperRadio = styled.div`
  width: 30rem;
  display: flex;
  font-family: "Raleway";
  font-style: normal;
`;

export const ButtonActions = styled.div`
  display: flex;
  margin: 4rem 0 0 0;
`;
