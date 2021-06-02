import React, { useContext } from "react";

//Styles
import { Title, Row, WrapperRadio, ButtonActions } from "./styles";

//Components
import TextField from "Components/TextField";
import SelectStyle from "Components/Select";
import Button from "Components/Button";
import MultiSelectAll from "Components/MultiSelectAll";
import RadioButton from "Components/RadioButton";
import TextArea from "Components/TextArea";
import PracticeGroup from "Components/Practice/PracticeGroup";

//Context
import FieldContext from "Context/Field/FieldContext";
import GroupContext from "Context/Group/GroupContext";
import IndividualContext from "Context/Individual/IndividualContext";

// //helpers
// import { handleChangeMultiSelect } from "helpers";
//Data
import { optionsParticipantes, optionsModulos } from "constants/index";

// import PracticeIndividual from "Components/Practice/PracticeIndividual";

// const initialStateForm = {
//   practica: "",
//   modulo: "",
//   participantes: [],
//   tipoPractica: "",
//   descripcion: "",
//   numGrupo: 0,
// };

// const initialStateIndividual = {
//   productoIndividual: "",
//   unidadesIndividual: 0,
//   contIndividual: 0,
//   toleranciaIndividual: 0,
//   atributos: [],
// };

const Form = () => {
  const fieldContext = useContext(FieldContext);
  const { field, handleChangeField, handleChangeMultiSelectField } =
    fieldContext;
  const groupContext = useContext(GroupContext);
  const { groups, AddNewGroup } = groupContext;

  const individualContext = useContext(IndividualContext);
  const { individual } = individualContext;

  const handleChange = (e) => {
    handleChangeField(e);

    e.target.name === "modulo" && AddNewGroup(e);
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
    <form onSubmit={handleSubmit} noValidate>
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
            handleChangeMultiSelectField(value, e, optionsParticipantes)
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
      {/* {field.tipoPractica === "individual" && (
        <PracticeIndividual
          field={field}
          setFields={setFields}
          handleChange={handleChange}
        />
      )} */}

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
