import React from "react";

import { useForm, Controller, FormProvider } from "react-hook-form";

//Styles
import {
  Title,
  Row,
  WrapperRadio,
  ButtonActions,
  ErrorMessage,
} from "./styles";

//Components
import TextField from "Components/TextField";
import Button from "Components/Button";
import MultiSelectAll from "Components/MultiSelectAll";
import RadioButton from "Components/RadioButton";
import TextArea from "Components/TextArea";
import PracticeGroup from "Components/Practice/PracticeGroup";
import PracticeIndividual from "Components/Practice/PracticeIndividual";

//Data
import {
  optionsParticipantes,
  optionsModulos,
  GRUPO,
  INDIVIDUAL,
} from "constants/index";

const Form = () => {
  const methods = useForm({
    // mode: "onChange",
    // reValidateMode: "onChange",
    defaultValues: {
      field: {
        nombrePractica: "practica1",
        tipoPractica: "grupo",
      },
      groups: {
        modulo: {
          label: "Corte 1",
        },
      },
    },
  });

  const error = methods.formState.errors;

  console.log(error);

  /* Función que envía todos los datos del formulario */
  const handleSubmit = (data) => {
    console.log("Resultados", data);
  };

  const tipoPractica = methods.watch("field.tipoPractica");

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleSubmit)}
        onReset={methods.reset}
        noValidate
      >
        <Title>Configurar nueva práctica</Title>
        <Row>
          <TextField
            type="text"
            placeholder="Nombre de la práctica"
            error={error.field?.nombrePractica}
            {...methods.register("field.nombrePractica", {
              required: "Escriba el nombre de la práctica",
            })}
          />
          <Controller
            name="field.modulo"
            control={methods.control}
            rules={{ required: "Selecciona un módulo" }}
            render={({ field }) => (
              <MultiSelectAll
                isMulti={false}
                widthSelect={"9rem"}
                options={optionsModulos}
                placeholder="Módulo"
                error={error.field?.modulo}
                {...field}
              />
            )}
          />

          <Controller
            name="field.participantes"
            control={methods.control}
            rules={{ required: "Seleccione un participante" }}
            render={({ field }) => (
              <MultiSelectAll
                isMulti={true}
                closeMenuOnSelect={false}
                widthSelect={"20rem"}
                options={[
                  { label: "Todo el grupo", value: "*" },
                  ...optionsParticipantes,
                ]}
                placeholder="Participantes"
                error={error.field?.participantes}
                {...field}
              />
            )}
          />
        </Row>
        {/* Tipo de práctica */}
        <Row>
          <WrapperRadio>
            <p>Tipo de práctica:</p>

            <RadioButton
              id="grupos"
              value="grupo"
              text="Por grupos"
              error={error.field?.tipoPractica}
              {...methods.register("field.tipoPractica", {
                required: "Selecciona un tipo de práctica",
              })}
            />
            <RadioButton
              id="individual"
              value="individual"
              text="Individual"
              error={error.field?.tipoPractica}
              {...methods.register("field.tipoPractica", {
                required: "Selecciona un tipo de práctica",
              })}
            />

            {error.field?.tipoPractica && (
              <ErrorMessage>{error.field.tipoPractica.message}</ErrorMessage>
            )}
          </WrapperRadio>
        </Row>
        {/* Descripción de la práctica */}
        <Row>
          <TextArea
            placeholder="Descripción"
            {...methods.register("field.descripcion")}
          />
        </Row>
        {/* Crear grupo o práctica individual */}

        {tipoPractica === GRUPO && <PracticeGroup />}
        {tipoPractica === INDIVIDUAL && <PracticeIndividual />}

        <Row>
          <ButtonActions>
            <Button type="button" textButton="Cancelar" fill="false" />
            <Button type="submit" textButton="Publicar" fill="true" />
          </ButtonActions>
        </Row>
      </form>
    </FormProvider>
  );
};

export default Form;
