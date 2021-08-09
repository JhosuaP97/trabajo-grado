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
import useModal from "hooks/useModal";
import Modal from "Components/Modal";
const SummaryModule1 = ({ step }) => {
  const { isOpen, handleModalState } = useModal();
  return (
    <>
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
              <Button styleButton="primary" onClick={handleModalState}>
                Finalizar práctica
              </Button>
            </SummaryAction>
          </SummaryResult>
        </SummaryContainer>
        <SummaryImage url={reviewing} />
      </SummaryPageContainer>
      <Modal
        isOpen={isOpen}
        close={handleModalState}
        title="Antes de finalizar... "
        textCancelButton="Regresar a la tabla"
        redirect={step}
      >
        Recuerda utilizar la informacion recolectada para realizar las
        herramientas estadísticas solicitadas por tu docente en la guía de la
        práctica.
      </Modal>
    </>
  );
};

export default SummaryModule1;
