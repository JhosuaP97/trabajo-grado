import React, { Fragment } from "react";

import useGroupForm from "hooks/useGroupForm";

// Styles
import { Row, Title } from "Components/Form/styles";

// Components
import MultiSelectAll from "Components/MultiSelectAll";
import Courses from "Components/Courses";

import { optionsNumGrupos, CORTE2, CORTE3 } from "constants/index";
import GenerateProductGroup from "Components/Groups/GenerateProductGroup";

const PracticeGroup = () => {
  const { Controller, control, modulo, watchGroups, errors } = useGroupForm();

  function AddNewGroups() {
    return [...Array(parseInt(watchGroups?.label || 0)).keys()];
  }

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
              render={({ field }) => (
                <MultiSelectAll
                  isMulti={false}
                  widthSelect={"12rem"}
                  closeMenuOnSelect={true}
                  placeholder="Nº de grupos"
                  options={optionsNumGrupos}
                  error={errors.groups?.numGrupo?.label}
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
