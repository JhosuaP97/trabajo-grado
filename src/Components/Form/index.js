import React, { Fragment, useState } from "react";
import TextField from "Components/TextField";
import {
  Title,
  Row,
  Field,
  FormStyle,
  WrapperRadio,
  ButtonActions,
} from "./styles";

//Components
import Select from "Components/Select";
import Button from "Components/Button";
import MultiSelectAll from "Components/MultiSelectAll";
import RadioButton from "Components/RadioButton";
import TextArea from "Components/TextArea";
import ProductGroups from "Components/ProductGroups";

//Data
import {
  optionsParticipantes,
  optionsModulos,
  optionsProducto,
  optionsNumGrupos,
} from "constants/index";

import useGroup from "hooks/useGroup";
import useIndividual from "hooks/useIndividual";

const initialStateForm = {
  practica: "",
  modulo: "",
  participantes: [],
  tipoPractica: "",
  descripcion: "",
  numGrupo: 0,
};

const Form = () => {
  const [field, setFields] = useState(initialStateForm);
  const {
    groups,
    AddNewGroup,
    handleChangeGroups,
    handleProductGroups,
  } = useGroup();

  const {
    individual,
    handleChangeIndividual,
    handleProductIndividual,
  } = useIndividual();

  /* Función que recibe un evento, este evento evalua si el name que recibe 
  termina en individual, lo añade al estado individual sino lo añade
  al estado fields. */

  const handleChange = (e) => {
    setFields({
      ...field,
      [e.target.name]: e.target.value,
    });
  };

  function handleChangeMultiSelect(value, e) {
    if (e.name === "participantes") {
      if (e.action === "select-option" && e.option.value === "*") {
        setFields({
          ...field,
          [e.name]: optionsParticipantes,
        });
      } else if (e.action === "clear") {
        setFields({
          ...field,
          [e.name]: [],
        });
      } else if (e.action === "remove-value") {
        setFields({
          ...field,
          [e.name]: value.filter((option) => option.value !== "*"),
        });
      } else {
        setFields({
          ...field,
          [e.name]: value,
        });
      }
    }
  }

  /* Función que recibe un evento que con el valor que le llega añade un nuevo grupo
  al estado groups  */

  const handleAddNewGroup = (e) => {
    handleChange(e);
    AddNewGroup(e);
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

  const generatePractice = (practice) => {
    if (practice === "grupo") {
      return (
        <>
          <Title>Crear grupo</Title>
          <Row>
            <Field>
              <Select
                name="numGrupo"
                placeholder="Nº de grupos"
                options={optionsNumGrupos}
                value={field.numGrupo || ""}
                onChange={handleAddNewGroup}
              />
            </Field>
          </Row>
          {groups && (
            <ProductGroups
              groups={groups}
              optionsProducto={optionsProducto}
              onChange={handleChangeGroups}
              products={handleProductGroups}
              integrantes={field.participantes}
            />
          )}
        </>
      );
    }

    if (practice === "individual") {
      return (
        <>
          <Title>Práctica individual</Title>
          <Row>
            <Field>
              <Select
                name="productoIndividual"
                placeholder="Seleccionar producto"
                options={optionsProducto}
                value={individual.productoIndividual || ""}
                onChange={handleChangeIndividual}
              />
            </Field>
            <Field>
              <TextField
                type="number"
                name="unidadesIndividual"
                placeholder="Unidades"
                value={individual.unidadesIndividual || ""}
                onChange={handleChangeIndividual}
              />
            </Field>
            {individual.productoIndividual &&
              handleProductIndividual(
                individual.productoIndividual,
                individual,
                optionsProducto
              )}
          </Row>
        </>
      );
    }
  };

  return (
    <FormStyle onSubmit={handleSubmit} noValidate>
      <Title>Configurar nueva práctica</Title>
      <Row>
        <Field>
          <TextField
            type="text"
            name="practica"
            placeholder="Nombre de la práctica"
            value={field.practica || ""}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Select
            name="modulo"
            placeholder="Módulo"
            options={optionsModulos}
            value={field.modulo || ""}
            onChange={handleChange}
          />
        </Field>
        <Field select>
          <MultiSelectAll
            name="participantes"
            options={[
              { label: "Todo el grupo", value: "*" },
              ...optionsParticipantes,
            ]}
            value={field.participantes || ""}
            placeholder="Participantes"
            onChange={handleChangeMultiSelect}
          />
        </Field>
      </Row>
      {/* Tipo de práctica */}
      <Row>
        <Field>
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
        </Field>
      </Row>
      {/* Descripción de la práctica */}
      <Row>
        <Field>
          <TextArea
            name="descripcion"
            placeholder="Descripción"
            cols="88"
            rows="7"
            value={field.descripcion || ""}
            onChange={handleChange}
          />
        </Field>
      </Row>
      {/* Crear grupo o práctica individual */}
      {field.tipoPractica && generatePractice(field.tipoPractica)}
      <Row>
        <ButtonActions>
          <Field>
            <Button type="button" textButton="Cancelar" fill="false" />
          </Field>
          <Field>
            <Button type="submit" textButton="Publicar" fill="true" />
          </Field>
        </ButtonActions>
      </Row>
    </FormStyle>
  );
};

export default Form;
