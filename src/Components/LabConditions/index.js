import React, { useEffect } from "react";
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
import useStudent from "hooks/useStudent";
import useProduct from "hooks/useProduct";
import { useForm } from "react-hook-form";
import { createInspectionProductC3 } from "helpers/form";

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
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const { selectedSteps, getConditions, conditions } = useStudent();

  useEffect(() => {
    if (!conditions.lenght) {
      getConditions();
    }
  }, []);

  const { handleMessageActive, nextStep } = useProduct();
  const handleNextStep = () => {
    handleMessageActive();
    nextStep(selectedSteps);
  };

  const onSubmit = ({ tamanioMuestra }) => {
    let createPractice = { tamanioMuestra, ...conditions };
    createInspectionProductC3(createPractice);
  };
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
        <Button styleButton="secondary" onClick={() => {}}>
          Descargar tablas
        </Button>
        <ContainerAnswerPractice>
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              type="number"
              placeholder="Tamaño de la muestra"
              error={errors?.tamanioMuestra}
              {...register("tamanioMuestra", {
                max: {
                  value: 20,
                  message: "valor no valido",
                },
                valueAsNumber: true,
                required: "Debe esribir el tamaño de la muestra",
              })}
            />

            <Button styleButton="primary" onClick={handleSubmit(onSubmit)}>
              Continuar práctica
            </Button>
          </form>
        </ContainerAnswerPractice>
      </PageActions>
    </PageContainer>
  );
};

export default LabConditions;
