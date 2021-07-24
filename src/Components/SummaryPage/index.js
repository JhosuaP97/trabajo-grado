import React from "react";
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
import { SUMMARYPAGE } from "constants/index";
import carryBox from "assets/character_images/carryingBox2.png";
import PageModulo3 from "Components/PageModulo3";
const SummaryPage = () => {
  const stylePages = "firstStyle";
  // const changeSummary = SUMMARYPAGE[stylePages];
  return (
    <SummaryPageContainer>
      <SummaryContainer>
        <SummaryTitle>
          <h2>Condiciones para realizar el muestreo</h2>
        </SummaryTitle>
        <SummaryText>
          <p>
            Se ha definido que para realizar el proceso de muestreo en nuestros
            productos debes de considerar la siguiente información:
          </p>
        </SummaryText>
        <SummaryResult>
          <PageModulo3 />
          {/* {stylePages === "firstStyle" && <StudentTable />} */}
          {/* <SummaryAction>
            <Button styleButton="primary">Finalizar práctica</Button>
          </SummaryAction> */}
        </SummaryResult>
      </SummaryContainer>
      <SummaryImage url={carryBox} />
    </SummaryPageContainer>
  );
};

export default SummaryPage;
