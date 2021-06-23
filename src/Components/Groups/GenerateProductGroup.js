import React, { Fragment } from "react";

// hooks
import useGroupForm from "hooks/useGroupForm";

// Components
import MultiSelectAll from "Components/MultiSelectAll";
import SelectedProductGroup from "Components/Groups/SelectedProductGroup";
import CoursesGroup from "./CoursesGroup";

// Data
import { CORTE1, CORTE2, optionsNameProduct } from "constants/index";

const GenerateProductGroup = ({ id }) => {
  const { Controller, watch, modulo, errors } = useGroupForm();
  const selectedProduct = watch(`groups.group[${id}].producto`);

  return (
    <Fragment key={id}>
      <Controller
        name={`groups.group[${id}].producto`}
        render={({ field }) => (
          <MultiSelectAll
            isMulti={false}
            widthSelect={"10rem"}
            options={optionsNameProduct}
            placeholder="Seleccionar producto"
            error={errors.groups?.group[id]?.producto?.label}
            {...field}
          />
        )}
      />

      {/* Muestra los campos que se requiere para crear la práctica  */}
      {modulo?.label === CORTE1 && (
        <CoursesGroup coursesGroup={CORTE1} id={id} />
      )}

      {modulo?.label === CORTE2 && (
        <CoursesGroup coursesGroup={CORTE2} id={id} />
      )}

      {selectedProduct?.label && (
        <SelectedProductGroup selectedProduct={selectedProduct.label} id={id} />
      )}
    </Fragment>
  );
};

export default GenerateProductGroup;
