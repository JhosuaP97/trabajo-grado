import React, { Fragment } from "react";

import useFieldForm from "hooks/useFieldForm";

// Styles
import { Row, Title } from "Components/Form/styles";

// Components
import Courses from "Components/Courses";
import GenerateProductGroup from "Components/Groups/GenerateProductGroup";
import Button from "Components/Button";

import { CORTE2, CORTE3 } from "constants/index";

const PracticeGroup = () => {
  const { control, modulo, useFieldArray } = useFieldForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "groups",
  });

  const limitCreate = fields.length < 6;

  return (
    <>
      {modulo?.label === undefined ? (
        <p>Debes seleccionar un modulo</p>
      ) : (
        <>
          <Title>Crear grupo</Title>
          <Row>
            <Button
              type="button"
              styleButton="primary"
              onClick={() => {
                limitCreate && append({ producto: "" });
              }}
            >
              Crear nuevo grupo
            </Button>

            {modulo?.value === CORTE2 && <Courses course={CORTE2} />}
          </Row>
          <Row>{modulo?.value === CORTE3 && <Courses course={CORTE3} />}</Row>

          {fields?.map((item, index) => {
            return (
              <Fragment key={item.id}>
                <Row group>
                  <>
                    <GenerateProductGroup id={index} />
                    <Button
                      type="button"
                      styleButton="delete"
                      onClick={() => remove(index)}
                    >
                      Eliminar
                    </Button>
                  </>
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
