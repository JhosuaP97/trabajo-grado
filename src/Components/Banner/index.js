import React from "react";
import { BannerContainer, Content } from "./styles";
const Banner = () => {
  return (
    <BannerContainer>
      <Content>
        <h1>Curso 51</h1>
        <h3>Siete erramientas</h3>
        <p>Modulo: Corte 1</p>
        <small>
          Descripción: Observa cada uno de los productos y anota sus
          características en el formato.
        </small>
      </Content>
    </BannerContainer>
  );
};

export default Banner;
