import React, { useEffect } from "react";
import {
  PageContainer,
  Features,
  FeatureContainer,
  ImageContainer,
  TextContainer,
  PageActions,
  ContainerAnswerPractice,
  RowForm,
} from "./styles";

import Button from "Components/Button";
import TextField from "Components/TextField";
import { createInspectionProductC3 } from "helpers/form";
import { ICONS_MODULE_3 } from "constants/index";
import useStudent from "hooks/useStudent";
import useProduct from "hooks/useProduct";
import { useForm } from "react-hook-form";
import useAuth from "hooks/useAuth";

const LabConditions = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const { user } = useAuth();
  const { getConditions, conditions, idPractica } = useStudent();

  useEffect(() => {
    if (!conditions.lenght) {
      getConditions(idPractica, user?.estudiante.idEstudiante);
    }
  }, [idPractica, user?.estudiante.idEstudiante]);

  const { handleMessageActive, nextStep } = useProduct();
  const handleNextStep = () => {
    // handleMessageActive();
    // nextStep(selectedSteps);
  };

  const featureData = [
    {
      id: 1,
      icon: ICONS_MODULE_3.lote,
      text: (
        <>
          <p>Tamaño de lote</p>
          <strong>{conditions.tamanioLote}</strong>
        </>
      ),
    },
    {
      id: 2,
      icon: ICONS_MODULE_3.severidad,
      text: (
        <>
          <p>Severidad</p>
          <strong>{conditions.severidad}</strong>
        </>
      ),
    },
    {
      id: 3,
      icon: ICONS_MODULE_3.aql,
      text: (
        <>
          <p>AQL</p>
          <strong>{conditions.aql}</strong>
        </>
      ),
    },
    {
      id: 4,
      icon: ICONS_MODULE_3.inspeccion,
      text: (
        <>
          <p>Nivel de Inspección</p>
          <strong>{conditions.nivelInspeccion}</strong>
        </>
      ),
    },
    {
      ...(conditions.metodos && {
        id: 5,
        icon: ICONS_MODULE_3.metodo,
        text: (
          <>
            <p>Método</p>
            <strong>{conditions.metodos}</strong>
          </>
        ),
      }),
    },
  ];

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

      <p>
        Con la información anterior, descarga la tabla de muestreo ANSI y luego,
        uno de los integrantes del grupo debe escribir el tamaño de la muestra a
        evaluar en el campo de texto. (Todos los integrates del grupo tendrán la
        misma información)
      </p>

      <PageActions>
        <Button type="button" styleButton="secondary" onClick={() => {}}>
          Descargar tablas
        </Button>
        <ContainerAnswerPractice>
          <form onSubmit={handleSubmit} noValidate>
            <RowForm>
              <TextField
                type="number"
                placeholder="Tamaño de la muestra"
                error={errors?.tamanioMuestra}
                {...register("tamanioMuestra", {
                  min: {
                    value: 1,
                    message: `Debe ser mínimo 1`,
                  },
                  max: {
                    value: conditions.tamanioLote,
                    message: `Debe ser máximo ${conditions.tamanioLote}`,
                  },
                  valueAsNumber: true,
                  required: "Debe esribir el tamaño de la muestra",
                })}
              />

              <Button
                type="submit"
                styleButton="primary"
                onClick={handleSubmit(onSubmit)}
              >
                Continuar práctica
              </Button>
            </RowForm>
          </form>
        </ContainerAnswerPractice>
      </PageActions>
    </PageContainer>
  );
};

export default LabConditions;
