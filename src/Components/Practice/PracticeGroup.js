import React, { Fragment } from "react";

import useFieldForm from "hooks/useFieldForm";

// Styles
import { Row, Title } from "Components/Form/styles";

// Components
import MultiSelectAll from "Components/MultiSelectAll";
import Courses from "Components/Courses";

import { optionsNumGrupos, CORTE2, CORTE3 } from "constants/index";
import GenerateProductGroup from "Components/Groups/GenerateProductGroup";
import { Validations } from "helpers/Validation";

const PracticeGroup = () => {
  const { Controller, control, modulo, watchGroups, errors, tipoPractica } =
    useFieldForm();

  function AddNewGroups() {
    return [...Array(Number(watchGroups?.label || 0)).keys()];
  }

  const { validationField } = Validations();

  return (
    <>
      {modulo?.label === undefined ? (
        <p>Debes seleccionar un modulo</p>
      ) : (
        <>
          <Title>Crear grupo</Title>
          <Row>
            <Controller
              name="groups.numGrupo"
              control={control}
              rules={validationField.numGrupo}
              shouldUnregister={tipoPractica === "grupo"}
              render={({ field }) => (
                <MultiSelectAll
                  isMulti={false}
                  widthSelect={"12rem"}
                  closeMenuOnSelect={true}
                  placeholder="Nº de grupos"
                  options={optionsNumGrupos}
                  error={errors.groups?.numGrupo}
                  {...field}
                />
              )}
            />

            {modulo?.label === CORTE2 && <Courses course={CORTE2} />}
          </Row>
          <Row>{modulo?.label === CORTE3 && <Courses course={CORTE3} />}</Row>

          {AddNewGroups().map((id) => {
            return (
              <Fragment key={id}>
                <Row group>
                  <GenerateProductGroup id={id} />
                </Row>
              </Fragment>
            );
          })}
        </>
      )}
    </>
  );
};

export default PracticeGroup;
