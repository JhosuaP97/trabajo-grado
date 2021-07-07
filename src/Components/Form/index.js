import React, { useState } from "react";

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
import Modal from "Components/Modal";
import { useHistory } from "react-router-dom";

//Data
import {
  optionsParticipantes,
  optionsModulos,
  GRUPO,
  INDIVIDUAL,
} from "constants/index";

const Form = () => {
  const [show, setShow] = useState(false);
  let history = useHistory();
  const methods = useForm({
    // defaultValues: {
    //   field: {
    //     nombrePractica: "practica1",
    //     tipoPractica: "grupo",
    //     participantes: { value: 1, label: "Andres Botero" },
    //     modulo: {
    //       label: "Corte 1",
    //       value: "corte1",
    //     },
    //   },
    //   groups: {
    //     numGrupo: { label: "1", value: 1 },
    //     group: [
    //       {
    //         tolerancia: "323232",
    //         unidades: "32232",
    //         producto: { value: "refrescos", label: "Refrescos" },
    //         integrantes: [{ value: 1, label: "Andres Botero" }],
    //         cont: { value: "355", label: "355" },
    //         atributos: { value: "tapaFloja", label: "Tapa floja" },
    //       },
    //     ],
    //   },
    // },
  });

  const error = methods.formState.errors;
  const getAllMembers = (option) => {
    if (option.action === "select-option" && option.option.value === "*") {
      methods.setValue(option.name, optionsParticipantes);
    }
  };

  /* Función que envía todos los datos del formulario */
  const handleSubmit = (data) => {
    setShow(true);
    if (methods.formState.isSubmitSuccessful) {
      console.log("Resultados", data);
    }
  };
  console.log(methods.formState.isSubmitSuccessful);

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
                name={field.name}
                options={[
                  { label: "Todo el grupo", value: "*" },
                  ...optionsParticipantes,
                ]}
                onChange={(e, option) => {
                  field.onChange(e);
                  getAllMembers(option);
                }}
                value={field.value}
                placeholder="Participantes"
                error={error.field?.participantes}
                // {...field}
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

      <Modal
        isOpen={show}
        close={() => setShow(false)}
        title="¿Está seguro que deseas publicar la práctica? "
        // redirect={() => setShow(false)}
      >
        Al presionar Sí, no podrás realizar cambios sobre la configuración de la
        práctica.
      </Modal>
    </FormProvider>
  );
};

export default Form;
