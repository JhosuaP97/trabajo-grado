import React from "react";
import { useHistory } from "react-router-dom";
import {
  CardContainer,
  BackgrounImage,
  CardInfo,
  TitleCard,
  Dots,
} from "./styles";
const CardPractice = ({ practica, idCurso }) => {
  const { idCorteP, idPractica, nombrePractica } = practica;
  let history = useHistory();

  const handleHistoryPractice = () => {
    history.push(`${idCurso}/practice${idCorteP}/${idPractica}`);
  };

  return (
    <CardContainer onClick={handleHistoryPractice}>
      <BackgrounImage />
      <CardInfo>
        <TitleCard>{nombrePractica}</TitleCard>
        <Dots>&#10247;</Dots>
      </CardInfo>
    </CardContainer>
  );
};

export default CardPractice;
