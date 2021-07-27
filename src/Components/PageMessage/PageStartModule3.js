import React from "react";
import {
  SummaryPageContainer,
  SummaryContainer,
  SummaryTitle,
  SummaryText,
  SummaryResult,
  SummaryImage,
} from "./styles";
import carryBox from "assets/character_images/carryingBox2.png";
import PageModulo3 from "Components/PageModulo3";
const PageStartModule3 = () => {
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
        </SummaryResult>
      </SummaryContainer>
      <SummaryImage url={carryBox} />
    </SummaryPageContainer>
  );
};

export default PageStartModule3;
