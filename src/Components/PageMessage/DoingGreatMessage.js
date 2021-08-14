import React from "react";
import thumbsUp from "assets/character_images/thumbsUp.png";

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
import useStudent from "hooks/useStudent";
import useProduct from "hooks/useProduct";
const DoingGreatMessage = () => {
  const {
    SELECTED_GRAPHIC,
    changeGraphic,
    selectedSteps,
    resetSelectedSubgroup,
  } = useStudent();
  const { handleMessageActive, nextStep, resetReview } = useProduct();

  const handleChangeGraphic = () => {
    changeGraphic(SELECTED_GRAPHIC.VARIABLE);
    handleMessageActive();
    nextStep(selectedSteps);
    resetReview();
    resetSelectedSubgroup();
  };
  return (
    <SummaryPageContainer>
      <SummaryContainer>
        <SummaryTitle>
          <h2>¡Lo estas haciendo muy bien!</h2>
        </SummaryTitle>
        <SummaryText>
          <p>Falta poco para terminar, sigue esforzandote.</p>
          <br />
          <p>
            Ahora debes realizar el mismo procedimiento pero esta vez
            considerando las variables para una cantidad de productos constante.
          </p>
          <br />
          <p>Luego tendrás que realizar la gráficas correspondientes.</p>
        </SummaryText>
        <SummaryResult>
          <SummaryAction>
            <Button styleButton="primary" onClick={handleChangeGraphic}>
              Continuar práctica
            </Button>
          </SummaryAction>
        </SummaryResult>
      </SummaryContainer>
      <SummaryImage url={thumbsUp} />
    </SummaryPageContainer>
  );
};

export default DoingGreatMessage;
