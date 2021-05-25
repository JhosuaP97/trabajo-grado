import React, { useContext, useState } from "react";
import TextField from "Components/TextField";
import { Title, Row, FormStyle, WrapperRadio, ButtonActions } from "./styles";

//Components
import SelectStyle from "Components/Select";
import Button from "Components/Button";
import MultiSelectAll from "Components/MultiSelectAll";
import RadioButton from "Components/RadioButton";
import TextArea from "Components/TextArea";
import PracticeGroup from "Components/Practice/PracticeGroup";

//Context
import GroupContext from "Context/Group/GroupContext";
import IndividualContext from "Context/Individual/IndividualContext";

import { handleChangeMultiSelect } from "helpers";
//Data
import { optionsParticipantes, optionsModulos } from "constants/index";

import PracticeIndividual from "Components/Practice/PracticeIndividual";

const initialStateForm = {
  practica: "",
  modulo: "",
  participantes: [],
  tipoPractica: "",
  descripcion: "",
  numGrupo: 0,
};

// const initialStateIndividual = {
//   productoIndividual: "",
//   unidadesIndividual: 0,
//   contIndividual: 0,
//   toleranciaIndividual: 0,
//   atributos: [],
// };

const Form = () => {
  const [field, setFields] = useState(initialStateForm);
  const groupContext = useContext(GroupContext);
  const { groups } = groupContext;

  const individualContext = useContext(IndividualContext);
  const { individual } = individualContext;

  /* Función que recibe un evento, este evento evalua si el name que recibe 
  termina en individual, lo añade al estado individual sino lo añade
  al estado fields. */

  const handleChange = (e) => {
    setFields({
      ...field,
      [e.target.name]: e.target.value,
    });
  };

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
    <FormStyle onSubmit={handleSubmit} noValidate>
      <Title>Configurar nueva práctica</Title>
      <Row>
        <TextField
          type="text"
          name="practica"
          placeholder="Nombre de la práctica"
          value={field.practica || ""}
          onChange={handleChange}
        />
        <SelectStyle
          name="modulo"
          width={"7rem"}
          placeholder="Módulo"
          options={optionsModulos}
          value={field.modulo || ""}
          onChange={handleChange}
        />
        <MultiSelectAll
          name="participantes"
          options={[
            { label: "Todo el grupo", value: "*" },
            ...optionsParticipantes,
          ]}
          value={field.participantes || ""}
          placeholder="Participantes"
          onChange={(value, e) =>
            handleChangeMultiSelect({
              value: value,
              event: e,
              options: optionsParticipantes,
              componentName: "participantes",
              setState: setFields,
              state: field,
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
      {field.tipoPractica === "grupo" && (
        <PracticeGroup
          field={field}
          setFields={setFields}
          handleChange={handleChange}
        />
      )}
      {field.tipoPractica === "individual" && (
        <PracticeIndividual
          field={field}
          setFields={setFields}
          handleChange={handleChange}
        />
      )}

      <Row>
        <ButtonActions>
          <Button type="button" textButton="Cancelar" fill="false" />
          <Button type="submit" textButton="Publicar" fill="true" />
        </ButtonActions>
      </Row>
    </FormStyle>
  );
};

export default Form;
