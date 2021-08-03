import React from "react";
import {
  PageContainer,
  Features,
  FeatureContainer,
  ImageContainer,
  TextContainer,
  PageText,
  PageActions,
  ContainerAnswerPractice,
} from "./styles";
import { BatchSize } from "Icons/BatchSize";
import { Severity } from "Icons/Severity";
import { Quality } from "Icons/Quality";
import { Inspection } from "Icons/Inspection";
import Button from "Components/Button";
import TextField from "Components/TextField";
import { Method } from "Icons/Method";

const featureData = [
  {
    id: 1,
    icon: <BatchSize />,
    text: (
      <>
        <p>Tamaño de lote</p>
        <strong>50</strong>
      </>
    ),
  },
  {
    id: 2,
    icon: <Severity />,
    text: (
      <>
        <p>Severidad</p>
        <strong>Reducida</strong>
      </>
    ),
  },
  {
    id: 3,
    icon: <Quality />,
    text: (
      <>
        <p>AQL</p>
        <strong>0.1</strong>
      </>
    ),
  },
  {
    id: 4,
    icon: <Inspection />,
    text: (
      <>
        <p>Nivel de Inspección</p>
        <strong>S1</strong>
      </>
    ),
  },
  {
    id: 5,
    icon: <Method />,
    text: (
      <>
        <p>Método</p>
        <strong>K</strong>
      </>
    ),
  },
];

const LabConditions = () => {
  return (
    <PageContainer>
      <Features>
        {featureData.map(({ id, icon, text }) => (
          <FeatureContainer key={id}>
            <ImageContainer>{icon}</ImageContainer>
            <TextContainer>{text}</TextContainer>
          </FeatureContainer>
        ))}
      </Features>
      <PageText>
        <p>
          Con la información anterior, descarga la tabla de muestreo ANSI y
          luego, uno de los integrantes del grupo debe escribir el tamaño de la
          muestra a evaluar en el campo de texto. (Todos los integrates del
          grupo tendrán la misma información)
        </p>
      </PageText>
      <PageActions>
        <Button styleButton="secondary">Descargar tablas</Button>
        <ContainerAnswerPractice>
          <TextField
            type="number"
            name="tamanioMuestra"
            placeholder="Tamaño de muestra"
          />
          <Button styleButton="primary">Continuar práctica</Button>
        </ContainerAnswerPractice>
      </PageActions>
    </PageContainer>
  );
};

export default LabConditions;
