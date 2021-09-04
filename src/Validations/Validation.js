import useFieldForm from "hooks/useFieldForm";
import { CORTE1, CORTE2, CORTE3, ATRIBUTO } from "constants/index";

export function Validations() {
  const { getValues, modulo } = useFieldForm();

  const validationField = {
    numGrupo: {
      required: "Selecciona la cantidad de grupos",
    },
    producto: { required: "Selecciona un producto" },
    unidades: {
      max: {
        value: 25,
        message: "Máximo son 25 unidades",
      },
      validate: {
        required: (value) => {
          if (!value && getValues("field.modulo.label") === CORTE1) {
            return "Digite las unidades";
          }
          return true;
        },
      },
    },

    cont: {
      validate: {
        required: (value) => {
          if (
            !value &&
            (modulo.label === CORTE1 ||
              modulo.label === CORTE2 ||
              modulo.label === CORTE3 ||
              getValues("field.tipoMuestreo") !== ATRIBUTO)
          ) {
            return "Selecciona el contenido";
          }
          return true;
        },
      },
    },
    tolerancia: {
      validate: {
        required: (value) => {
          if (
            !value &&
            (modulo.label === CORTE1 ||
              modulo.label === CORTE2 ||
              modulo.label === CORTE3 ||
              getValues("field.tipoMuestreo") !== ATRIBUTO)
          ) {
            return "Digite la tolerancia";
          }
          return true;
        },
      },
    },

    atributos: {
      required: "Selecciona un atributo",
    },
    integrantes: {
      validate: {
        required: (value) => {
          if (!value) {
            return "Selecciona a los integrantes";
          }
          if (value.length > 2) {
            return "Solo deben ser 2 integrantes";
          }
          return true;
        },
      },
    },

    // Corte2
    graficos: {
      required: "Selecciona un gráfico",
    },
    subgrupo: {
      max: {
        value: 10,
        message: "Máximo son 10",
      },
      validate: {
        required: (value) => {
          if (!value && getValues("field.modulo.label") === CORTE2) {
            return "Digite los subgrupos";
          }

          return true;
        },
      },
    },

    tamanioSubgrupo: {
      max: {
        value: 5,
        message: "Máximo son 5 unidades",
      },
      validate: {
        required: (value) => {
          if (!value && getValues("field.modulo.label") === CORTE2) {
            return "Digite tamaño subgrupo";
          }
          return true;
        },
      },
    },
    // Corte 3
    tipoMuestreo: {
      validate: {
        required: (value) => {
          if (!value && getValues("field.modulo.label") === CORTE3) {
            return "Seleccione un tipo de muestreo";
          }
          return true;
        },
      },
    },
    lote: {
      validate: {
        required: (value) => {
          if (!value && getValues("field.modulo.label") === CORTE3) {
            return "Digite tamaño lote";
          }
          return true;
        },
      },
    },
    aql: {
      validate: {
        required: (value) => {
          if (!value && getValues("field.modulo.label") === CORTE3) {
            return "Seleccione un valor";
          }
          return true;
        },
      },
    },
    severidad: {
      validate: {
        required: (value) => {
          if (!value && getValues("field.modulo.label") === CORTE3) {
            return "Seleccione la severidad";
          }
          return true;
        },
      },
    },
    nivelInspeccion: {
      validate: {
        required: (value) => {
          if (!value && getValues("field.modulo.label") === CORTE3) {
            return "Seleccione un nivel";
          }
          return true;
        },
      },
    },
    metodo: {
      required: "Selecciona un método",
    },
  };

  return { validationField };
}
