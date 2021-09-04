import React from "react";
import { BannerContainer, Content } from "./styles";
const Banner = () => {
  const banner = {
    title: "Curso 51",
    practice: "Siete herramientas",
    module: "Corte 1",
    description:
      "Observa cada uno de los productos y anota suscaracterísticas en el formato",
    date: "1/08/2021",
  };
  const { title, practice, module, description, date } = banner;
  return (
    <BannerContainer>
      <Content>
        <h1>{title}</h1>
        <h3>{practice}</h3>
        <p>Modulo: {module}</p>
        <small>Descripción: {description}</small>
        <br />
        <small>Fecha de publicación: {date}</small>
      </Content>
    </BannerContainer>
  );
};

export default Banner;
