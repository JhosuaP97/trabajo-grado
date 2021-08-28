import React, { useState, useEffect } from "react";

import { useForm, Controller, FormProvider } from "react-hook-form";

//Styles
import {
  FormStyle,
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
  CORTE1,
  CORTE2,
  CORTE3,
} from "constants/index";
import {
  registerPracticeModule1,
  registerPracticeModule2,
  registerPracticeModule3,
} from "helpers/form";

const Form = () => {
  // const [show, setShow] = useState(false);

  const methods = useForm();

  const error = methods.formState.errors;
  // const getAllMembers = (option) => {
  //   if (option.action === "select-option" && option.option.id === "*") {
  //     methods.setValue(option.name, participants);
  //   }
  // };

  /* Función que envía todos los datos del formulario */
  const handleSubmit = (data) => {
    const {
      field: {
        modulo: { label },
      },
    } = data;
    if (label === CORTE1) {
      registerPracticeModule1(data);
    }

    if (label === CORTE2) {
      registerPracticeModule2(data);
    }
    if (label === CORTE3) {
      registerPracticeModule3(data);
    }
  };

  return (
    <FormProvider {...methods}>
      <FormStyle
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

          {/* <Controller
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
                  { estudiante: "Todo el grupo", id: "*" },
                  ...participants,
                ]}
                onChange={(e, option) => {
                  field.onChange(e);
                  getAllMembers(option);
                }}
                value={field.value}
                placeholder="Participantes"
                getOptionLabel={(option) => option.estudiante}
                getOptionValue={(option) => option.id}
                error={error.field?.participantes}
                // {...field}
              />
            )}
          /> */}
        </Row>

        {/* Descripción de la práctica */}
        <Row>
          <TextArea
            placeholder="Descripción de la práctica"
            {...methods.register("field.descripcion")}
          />
        </Row>
        {/* Crear grupo */}

        <PracticeGroup />

        <Row>
          <ButtonActions>
            <Button type="button" styleButton="secondary">
              Cancelar
            </Button>
            <Button type="submit" styleButton="primary">
              Publicar
            </Button>
          </ButtonActions>
        </Row>
      </FormStyle>

      {/* <Modal
        isOpen={show}
        close={() => setShow(false)}
        title="¿Está seguro que deseas publicar la práctica? "
        // redirect={() => setShow(false)}
      >
        Al presionar Sí, no podrás realizar cambios sobre la configuración de la
        práctica.
      </Modal> */}
    </FormProvider>
  );
};

export default Form;
