import styled from "styled-components";

export const FormStyle = styled.form`
  margin: 4rem;
`;

export const Title = styled.h2`
  margin: 1rem 0.5rem;
  font-weight: 700;
  font-family: "Lato";
`;

export const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 21px;
  margin: 1.25rem 0;
`;

export const WrapperRadio = styled.div`
  width: 30rem;
  display: flex;
  font-family: "Raleway";
  font-style: normal;
`;

export const ButtonActions = styled.div`
  margin: 4.625rem 0 0 0;
  & > button {
    margin: 0 0.3rem 0 0;
  }
`;
