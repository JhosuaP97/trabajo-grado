import { CORTE1, CORTE2 } from "constants/index";
import * as yup from "yup";

const validationGroups = {
  groups: yup.object().shape({
    numGrupo: yup.object({
      label: yup.string().required("Selecciona la cantidad de grupos"),
    }),
    modulo: yup.object({
      label: yup.string().required("Selecciona un módulo"),
    }),

    graficos: yup.array().when("modulo", {
      is: ({ label }) => label === CORTE2,
      then: yup
        .array()
        .min(1, "Selecciona un gráfico")
        .of(
          yup.object().shape({
            label: yup.string().required("Debes seleccionar un gráfico"),
            value: yup.string().required("Debes seleccionar un gráfico"),
          })
        )
        .required("Debes seleccionar un gráfico"),
      otherwise: yup.array().notRequired(),
    }),

    group: yup.array().of(
      yup.object().shape({
        producto: yup.object({
          label: yup.string().required("Selecciona un producto"),
          value: yup.string().required(),
        }),

        unidades: yup
          .number()

          .typeError("Digite las unidades")
          .test("modulo", "debe ser algo", function () {
            // console.log(this.options.from[1].value.modulo.label);
            const isModuleSelected = this.options.from[1].value.modulo.label;

            if (isModuleSelected === CORTE1) {
              return yup.number().required();
            }
          }),
        // unidades: yup
        //   .number()
        //   .typeError("Digite las unidades")
        //   .positive("Debe ser valores positivos")
        //   .required("Digite las unidades "),
        cont: yup.object({
          label: yup.string().required("Selecciona el contenido"),
          value: yup.string().required(),
        }),
        tolerancia: yup
          .number()
          .typeError("Digite la tolerancia")
          .required("Digite la tolerancia "),
        atributos: yup
          .array()
          .min(1, "Selecciona un atributo")
          .of(
            yup.object().shape({
              label: yup.string().required(),
              value: yup.string().required(),
            })
          )
          .required("Selecciona un atributo"),
        integrantes: yup
          .array()
          .min(1, "Selecciona un integrante")
          .of(
            yup.object({
              label: yup.string().required(),
              value: yup.number().required(),
            })
          )
          .required("Selecciona un integrante"),

        subgrupo: yup.number().when("modulo", {
          is: (value) => console.log(value),
          then: yup.number().required(),
        }),
      })
    ),
  }),
};

const validationField = {
  field: yup.object().shape({
    nombrePractica: yup.string().required("Escriba el nombre de la práctica"),
    tipoPractica: yup
      .string()
      .required("Debe elegir un tipo de práctica")
      .nullable(),
    participantes: yup
      .array()
      .min(1, "Selecciona un participante")
      .of(
        yup.object({
          label: yup.string().required("sdadsadsads"),
          value: yup.number().required("sdasadsa"),
        })
      )
      .required("Debes seleccionar un participante"),
  }),
};

export const validationSchema = yup.object().shape({
  field: validationField.field,
  groups: validationGroups.groups,
});
