import useGroupForm from "hooks/useGroupForm";
import { WrapperRadio, Row } from "Components/Form/styles";
import RadioButton from "Components/RadioButton";
import MultiSelectAll from "Components/MultiSelectAll";
import { CORTE2, CORTE3, optionsGraficos } from "constants/index";

const Courses = ({ course }) => {
  const { Controller, control, register, errors, getValues } = useGroupForm();

  const Course2 = () => (
    <Row>
      <Controller
        name="field.graficos"
        control={control}
        rules={{
          validate: {
            required: (value) => {
              if (!value && getValues("field.modulo.label") === CORTE2) {
                return "Seleccione un gráfico";
              }
              return true;
            },
          },
        }}
        render={({ field }) => (
          <MultiSelectAll
            isMulti={true}
            widthSelect={"12rem"}
            closeMenuOnSelect={true}
            placeholder="Seleccionar gráficos"
            options={optionsGraficos}
            error={errors.field?.graficos}
            {...field}
          />
        )}
      />
    </Row>
  );

  const Course3 = () => (
    <WrapperRadio>
      <p>Tipo de muestreo:</p>
      <RadioButton
        id="variables"
        value="variable"
        text="Variables"
        error={errors.field?.tipoMuestreo}
        {...register("field.tipoMuestreo", {
          validate: {
            required: (value) => {
              if (!value && getValues("field.modulo.label") === CORTE3) {
                return "Seleccione un tipo de muestreo";
              }
              return true;
            },
          },
        })}
      />
      <RadioButton
        id="atributos"
        value="atributo"
        text="Atributos"
        error={errors.field?.tipoMuestreo}
        {...register("field.tipoMuestreo", {
          validate: {
            required: (value) => {
              if (!value && getValues("field.modulo.label") === CORTE3) {
                return "Seleccione un tipo de muestreo";
              }
              return true;
            },
          },
        })}
      />
    </WrapperRadio>
  );

  return (
    <>
      {course === CORTE2 && Course2()}
      {course === CORTE3 && Course3()}
    </>
  );
};

export default Courses;
