import React, { useContext, useEffect } from "react";

//Styles
import { Title, Row, WrapperRadio, ButtonActions } from "./styles";

//Components
import TextField from "Components/TextField";
import Button from "Components/Button";
import MultiSelectAll from "Components/MultiSelectAll";
import RadioButton from "Components/RadioButton";
import TextArea from "Components/TextArea";
import PracticeGroup from "Components/Practice/PracticeGroup";
import PracticeIndividual from "Components/Practice/PracticeIndividual";

//Context
import FieldContext from "Context/Field/FieldContext";
import GroupContext from "Context/Group/GroupContext";
import IndividualContext from "Context/Individual/IndividualContext";

//Data
import { optionsParticipantes, optionsModulos } from "constants/index";

const Form = () => {
  const fieldContext = useContext(FieldContext);
  const { field, handleChangeField, handleChangeMultiSelectField } =
    fieldContext;
  const groupContext = useContext(GroupContext);
  const { groups } = groupContext;

  const individualContext = useContext(IndividualContext);
  const { individual, changeModuleIndividual } = individualContext;

  const handleChange = (e) => {
    handleChangeField(e);
  };

  //Cambia el objeto dependiendo del tipo de practica y el corte Seleccionado

  const changeObj = () => {
    changeModuleIndividual(field.modulo.label);
  };

  useEffect(() => {
    if (field.modulo.label !== "") {
      changeObj();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.modulo.label]);

  /* Función que envía todos los datos del formulario */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Formulario",
      field,
      "Grupos",
      groups,
      "Individual",
      individual
    );
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Title>Configurar nueva práctica</Title>
      <Row>
        <TextField
          type="text"
          name="nombrePractica"
          placeholder="Nombre de la práctica"
          value={field.nombrePractica || ""}
          onChange={handleChange}
        />
        <MultiSelectAll
          isMulti={false}
          widthSelect={"7rem"}
          name="modulo"
          options={optionsModulos}
          value={field.modulo || ""}
          placeholder="Módulo"
          onChange={(value, e) =>
            handleChangeMultiSelectField({
              value,
              e,
            })
          }
        />
        <MultiSelectAll
          isMulti={true}
          closeMenuOnSelect={false}
          widthSelect="20rem"
          name="participantes"
          options={[
            { label: "Todo el grupo", value: "*" },
            ...optionsParticipantes,
          ]}
          value={field.participantes || ""}
          placeholder="Participantes"
          onChange={(value, e) =>
            handleChangeMultiSelectField({
              value,
              e,
              options: optionsParticipantes,
            })
          }
        />
      </Row>
      {/* Tipo de práctica */}
      <Row>
        <WrapperRadio>
          <p>Tipo de práctica:</p>
          <RadioButton
            name="tipoPractica"
            id="grupos"
            value="grupo"
            text="Por grupos"
            onChange={handleChange}
            checked={field.tipoPractica === "grupo"}
          />
          <RadioButton
            name="tipoPractica"
            id="individual"
            value="individual"
            text="Individual"
            onChange={handleChange}
            checked={field.tipoPractica === "individual"}
          />
        </WrapperRadio>
      </Row>
      {/* Descripción de la práctica */}
      <Row>
        <TextArea
          name="descripcion"
          placeholder="Descripción"
          value={field.descripcion || ""}
          onChange={handleChange}
        />
      </Row>
      {/* Crear grupo o práctica individual */}
      {field.tipoPractica === "grupo" && <PracticeGroup />}
      {field.tipoPractica === "individual" && <PracticeIndividual />}

      <Row>
        <ButtonActions>
          <Button type="button" textButton="Cancelar" fill="false" />
          <Button type="submit" textButton="Publicar" fill="true" />
        </ButtonActions>
      </Row>
    </form>
  );
};

export default Form;
