import useFieldForm from "hooks/useFieldForm";
import { CORTE1, CORTE2, CORTE3, ATRIBUTO } from "constants/index";

export function Validations() {
  const { getValues, modulo, tipoPractica } = useFieldForm();

  const validationField = {
    numGrupo: {
      required: "Selecciona la cantidad de grupos",
    },
    producto: { required: "Selecciona un producto" },
    unidades: {
      ...(tipoPractica === "grupo"
        ? { shouldUnregister: tipoPractica === "grupo" }
        : { shouldUnregister: tipoPractica === "individual" }),

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
      ...(tipoPractica === "grupo"
        ? { shouldUnregister: tipoPractica === "grupo" }
        : { shouldUnregister: tipoPractica === "individual" }),
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
    },
    integrantes: {
      required: "Selecciona un integrante",
    },

    // Corte2
    graficos: {
      validate: {
        required: (value) => {
          if (!value && getValues("field.modulo.label") === CORTE2) {
            return "Seleccione un gráfico";
          }
          return true;
        },
      },
    },
    subgrupo: {
      ...(tipoPractica === "grupo"
        ? { shouldUnregister: tipoPractica === "grupo" }
        : { shouldUnregister: tipoPractica === "individual" }),
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
      ...(tipoPractica === "grupo"
        ? { shouldUnregister: tipoPractica === "grupo" }
        : { shouldUnregister: tipoPractica === "individual" }),
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
      ...(tipoPractica === "grupo"
        ? { shouldUnregister: tipoPractica === "grupo" }
        : { shouldUnregister: tipoPractica === "individual" }),
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
