import React from "react";

import { Container, ContainerImage, Info } from "./styles";

const ShowMessageToCreate = ({ img, text }) => {
  return (
    <Container>
      <ContainerImage>
        <img src={img} alt={img} />
      </ContainerImage>
      <Info>
        <h2>{text}</h2>
      </Info>
    </Container>
  );
};

export default ShowMessageToCreate;
