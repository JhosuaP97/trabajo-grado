import React from "react";
import { BannerContainer, Content } from "./styles";
const Banner = ({ banner }) => {
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
