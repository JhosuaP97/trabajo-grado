import React, { Fragment } from "react";
import useGroupForm from "hooks/useGroupForm";
// Components
import TextField from "Components/TextField";
import MultiSelectAll from "Components/MultiSelectAll";
import CoursesGroup from "./CoursesGroup";

// Data
import {
  ATRIBUTO,
  CORTE1,
  CORTE2,
  CORTE3,
  optionsProducto,
} from "constants/index";

const SelectedProductGroup = ({ selectedProduct, id }) => {
  const {
    Controller,
    register,
    control,
    participantes,
    tipoMuestreo,
    modulo,
    errors,
    getValues,
  } = useGroupForm();

  return optionsProducto
    .filter((product) => product.label === selectedProduct)
    .map((productSelected) => {
      // TODO: Filtrar el nombre de integrantes para que no se repitan.
      // function selectedMembers(members) {
      //   return members !== undefined && members.map((member) => member?.label);
      // }

      return (
        <Fragment key={id}>
          {(modulo?.label === CORTE1 ||
            modulo?.label === CORTE2 ||
            (modulo?.label === CORTE3 && tipoMuestreo !== ATRIBUTO)) && (
            <>
              <Controller
                name={`groups.group[${id}].cont`}
                control={control}
                rules={{
                  validate: {
                    required: (value) => {
                      if (
                        !value &&
                        getValues("field.tipoMuestreo") !== ATRIBUTO
                      ) {
                        return "Selecciona el contenido";
                      }
                      return true;
                    },
                  },
                }}
                render={({ field }) => (
                  <MultiSelectAll
                    widthSelect={"8rem"}
                    placeholder={productSelected.placeholder}
                    options={productSelected.contOptions}
                    {...field}
                    error={errors.groups?.group[id]?.cont}
                  />
                )}
              />

              <TextField
                type="number"
                width={"7rem"}
                placeholder="Tolerancia"
                error={errors.groups?.group[id]?.tolerancia}
                {...register(`groups.group[${id}].tolerancia`, {
                  validate: {
                    required: (value) => {
                      if (
                        !value &&
                        getValues("field.tipoMuestreo") !== ATRIBUTO
                      ) {
                        return "Digite la tolerancia";
                      }
                      return true;
                    },
                  },
                })}
              />
            </>
          )}

          {modulo?.label === CORTE3 && (
            <CoursesGroup coursesGroup={CORTE3} id={id} />
          )}

          {(modulo?.label === CORTE1 ||
            modulo?.label === CORTE2 ||
            (modulo?.label === CORTE3 && tipoMuestreo === ATRIBUTO)) && (
            <Controller
              name={`groups.group[${id}].atributos`}
              control={control}
              rules={{
                validate: {
                  required: (value) => {
                    if (
                      !value &&
                      (modulo?.label === CORTE1 ||
                        modulo?.label === CORTE2 ||
                        (modulo?.label === CORTE3 &&
                          getValues("field.tipoMuestreo") === ATRIBUTO))
                    ) {
                      return "Seleccione un atributo";
                    }
                    return true;
                  },
                },
              }}
              render={({ field }) => (
                <MultiSelectAll
                  widthSelect={"17rem"}
                  isMulti={true}
                  closeMenuOnSelect={false}
                  options={productSelected.attributes}
                  getOptionLabel={(option) => option.label}
                  getOptionValue={(option) => option.value}
                  placeholder="Atributos"
                  error={errors.groups?.group[id]?.atributos}
                  {...field}
                />
              )}
            />
          )}
          <Controller
            name={`groups.group[${id}].integrantes`}
            control={control}
            rules={{ required: "Selecciona un integrante" }}
            render={({ field }) => (
              <MultiSelectAll
                widthSelect={"20rem"}
                isMulti={true}
                closeMenuOnSelect={false}
                options={participantes}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
                placeholder="Integrantes"
                error={errors.groups?.group[id]?.integrantes}
                {...field}
              />
            )}
          />
        </Fragment>
      );
    });
};

export default SelectedProductGroup;
