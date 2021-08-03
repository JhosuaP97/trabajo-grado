import React from "react";
import reviewing from "assets/character_images/reviewing.png";

import Button from "Components/Button";
import {
  SummaryPageContainer,
  SummaryContainer,
  SummaryTitle,
  SummaryText,
  SummaryResult,
  SummaryImage,
  SummaryAction,
} from "./styles";
import StudentTable from "Components/StudentTable";
const SummaryModule1 = () => {
  return (
    <SummaryPageContainer>
      <SummaryContainer>
        <SummaryTitle>
          <h2>¡Buen Trabajo!</h2>
        </SummaryTitle>
        <SummaryText>
          <p>
            Antes de finalizar la práctica no te olvides de aplicar las
            herramientas estadistícas solicitadas por tu profesor.
          </p>
          <br />
          <p>Aquí tienes los datos de tu práctica:</p>
        </SummaryText>
        <SummaryResult>
          <StudentTable />
          <SummaryAction>
            <Button styleButton="primary">Finalizar práctica</Button>
          </SummaryAction>
        </SummaryResult>
      </SummaryContainer>
      <SummaryImage url={reviewing} />
    </SummaryPageContainer>
  );
};

export default SummaryModule1;
