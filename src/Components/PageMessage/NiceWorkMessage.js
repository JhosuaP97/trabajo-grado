import React from "react";
import selected from "assets/character_images/selected.png";

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
const NiceWork = () => {
  const {
    SELECTED_GRAPHIC,
    changeGraphic,
    selectedSteps,
    resetSelectedSubgroup,
  } = useStudent();
  const { handleMessageActive, nextStep, resetReview } = useProduct();

  const handleChangeGraphic = () => {
    changeGraphic(SELECTED_GRAPHIC.CONSTANT);
    handleMessageActive();
    nextStep(selectedSteps);
    resetReview();
    resetSelectedSubgroup();
  };

  return (
    <SummaryPageContainer>
      <SummaryContainer>
        <SummaryTitle>
          <h2>¡Buen Trabajo!</h2>
        </SummaryTitle>
        <SummaryText>
          <p>
            Ahora debes realizar el mismo procedimiento pero esta vez con una
            cantidad de productos constante.
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
      <SummaryImage url={selected} />
    </SummaryPageContainer>
  );
};

export default NiceWork;
