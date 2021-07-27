import Button from "Components/Button";
import React from "react";
import { ExtraInfoContainer, InfoContainer, TitleInfo } from "./styles";
const data = ["Media", "Rango", "Desviación", "p", "c", "NP"];

const StudentExtraInfo = ({ infotoShow, graphics = data }) => {
  const graphicsWithCommas = graphics?.join(", ");

  const infoGraphics = () => (
    <>
      <TitleInfo>Graficos a realizar</TitleInfo>
      <p>{graphicsWithCommas}</p>
    </>
  );

  const infoPractice = () => (
    <>
      <TitleInfo>Formato para la práctica</TitleInfo>
      <Button styleButton="secondary">Descargar</Button>
    </>
  );

  return (
    <ExtraInfoContainer>
      <InfoContainer>
        {infotoShow === "graphics" && infoGraphics()}
        {infotoShow === "practice" && infoPractice()}
      </InfoContainer>
    </ExtraInfoContainer>
  );
};

export default StudentExtraInfo;
