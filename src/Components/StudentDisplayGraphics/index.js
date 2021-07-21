import React from "react";
import { GraphicsContainer, GraphicsInfo } from "./styles";
const data = ["Media", "Rango", "Desviación", "p", "c", "NP"];

const StudentDisplayGraphics = ({ graphics = data }) => {
  const graphicsWithCommas = graphics?.join(", ");
  return (
    <GraphicsContainer>
      <GraphicsInfo>
        <h3>Graficos a realizar</h3>
        <p>{graphicsWithCommas}</p>
      </GraphicsInfo>
    </GraphicsContainer>
  );
};

export default StudentDisplayGraphics;
