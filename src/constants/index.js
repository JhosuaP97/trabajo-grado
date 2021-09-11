import { Bottle } from "Icons/products/Bottle";
import { ChocolateBar } from "Icons/products/ChocolateBar";
import { Rice } from "Icons/products/Rice";
import { Soap } from "Icons/products/Soap";
import { Straws } from "Icons/products/Straws";

export const CORTE1 = 1;
export const CORTE2 = 2;
export const CORTE3 = 3;

export const SIZE_FIELD = "8rem";

export const VARIABLE = "variable";
export const ATRIBUTO = "atributo";

export const GRUPO = "grupo";

export const REFRESCOS = "Refrescos";
export const BOLSA_ARROZ = "Bolsa de arroz";
export const BARRA_CHOCOLATE = "Barra de chocolate";
export const BARRA_JABON = "Barra de jabon";
export const PITILLOS = "Pitillos";

export const RANDOM = "random";
export const CONSTANT = "constant";

export const ICONS_PRODUCTS = {
  [REFRESCOS]: <Bottle />,
  [BOLSA_ARROZ]: <Rice />,
  [BARRA_CHOCOLATE]: <ChocolateBar />,
  [BARRA_JABON]: <Soap />,
  [PITILLOS]: <Straws />,
};

export const selectedArray = {
  AtributoNAleatorio: [RANDOM],
  AtributoNConstante: [CONSTANT],
  AtributoNVariable: [VARIABLE],
};

export const MODULE_PRACTICE = {
  "corte-1": 1,
  "corte-2": 2,
  "corte-3": 3,
};

export const optionsRoles = [
  { value: "estudiante", label: "Estudiante" },
  { value: "profesor", label: "Profesor" },
];

export const optionsModulos = [
  { value: 1, label: "Corte 1" },
  { value: 2, label: "Corte 2" },
  { value: 3, label: "Corte 3" },
];

export const optionsNameProduct = [
  {
    value: "refrescos",
    label: "Refrescos",
  },
  {
    value: "arroz",
    label: "Bolsa de arroz",
  },
  {
    value: "pitillos",
    label: "Pitillos",
  },
  {
    value: "barraChocolate",
    label: "Barra de chocolate",
  },
  {
    value: "barraJabon",
    label: "Barra de jabon",
  },
];

export const optionsProducto = [
  {
    value: "refrescos",
    label: "Refrescos",
    contOptions: [
      { value: 355, label: "355" },
      { value: 360, label: "360" },
      { value: 1000, label: "1000" },
    ],
    placeholder: "Cont ml",
    attributes: [
      { value: 3, label: "Textos ilegibles" },
      { value: 11, label: "Etiqueta suelta" },
      { value: 12, label: "Envase sucio" },
      { value: 13, label: "Tapa floja" },
    ],
  },
  {
    value: "arroz",
    label: "Bolsa de arroz",
    contOptions: [
      { value: 500, label: "500" },
      { value: 600, label: "600" },
      { value: 700, label: "700" },
    ],
    placeholder: "Cont grs",
    attributesName: "atrArroz",
    attributes: [
      { value: 1, label: "Variación de color" },
      { value: 5, label: "Bolsa rota" },
      { value: 6, label: "Textos incompletos" },
      { value: 7, label: "Suciedades" },
    ],
  },
  {
    value: "pitillos",
    label: "Pitillos",
    contOptions: [
      { value: 19, label: "19" },
      { value: 20, label: "20" },
      { value: 21, label: "21" },
    ],
    placeholder: "Longitud mm",
    attributesName: "atrPitillos",
    attributes: [
      { value: 10, label: "Doblados" },
      { value: 7, label: "Suciedades" },
      { value: 1, label: "Variación de color" },
    ],
  },
  {
    value: "barraChocolate",
    label: "Barra de chocolate",
    contOptions: [
      { value: 24, label: "24" },
      { value: 25, label: "25" },
      { value: 26, label: "26" },
    ],
    placeholder: "Cont grs",
    attributesName: "atrChocolate",
    attributes: [
      { value: 8, label: "Barra partida" },
      { value: 1, label: "Variación de color" },
      { value: 6, label: "Textos incompletos" },
      { value: 9, label: "Sellos irregulares" },
    ],
  },
  {
    value: "barraJabon",
    label: "Barra de jabon",
    contOptions: [
      { value: 100, label: "100" },
      { value: 200, label: "200" },
      { value: 300, label: "300" },
    ],
    placeholder: "Cont grs",
    attributesName: "atrJabon",
    attributes: [
      { value: 15, label: "Variación de color barra" },
      { value: 16, label: "Variación de color empaque" },
      { value: 2, label: "Empaque roto" },
      { value: 3, label: "Textos ilegibles" },
      { value: 4, label: "Deforme" },
    ],
  },
];

export const optionsNumGrupos = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
];

export const optionsGraficos = [
  { value: 1, label: "Media (x̄)" },
  { value: 2, label: "Rango (R)" },
  { value: 3, label: "Desviación estandar" },
  { value: 4, label: "P con n constante" },
  { value: 5, label: "P con n aleatorio" },
  { value: 6, label: "NP" },
  { value: 7, label: "C" },
  { value: 8, label: "U con n constante" },
  { value: 9, label: "U con n aleatorio" },
];

export const optionsSeveridadVariable = [
  { value: "S1", label: "S1" },
  { value: "S2", label: "S2" },
  { value: "I", label: "I" },
  { value: "II", label: "II" },
  { value: "III", label: "III" },
];

export const optionsSeveridadAtributos = [
  { value: "S1", label: "S1" },
  { value: "S2", label: "S2" },
  { value: "S3", label: "S3" },
  { value: "S4", label: "S4" },
  { value: "I", label: "I" },
  { value: "II", label: "II" },
  { value: "III", label: "III" },
];

export const optionsMetodo = [
  { value: 1, label: "K" },
  { value: 2, label: "M" },
  { value: 3, label: "Rango" },
];

export const optionsSeveridad = [
  { value: "reducida", label: "Reducida" },
  { value: "normal", label: "Normal" },
  { value: "rigurosa", label: "Rigurosa" },
];

export const optionsAQL = [
  { value: "0.10", label: "0.10" },
  { value: "0.15", label: "0.15" },
  { value: "0.20", label: "0.20" },
  { value: "0.25", label: "0.25" },
  { value: "0.30", label: "0.30" },
  { value: "0.45", label: "0.45" },
  { value: "0.50", label: "0.50" },
  { value: "0.65", label: "0.65" },
  { value: "0.70", label: "0.70" },
  { value: "0.85", label: "0.85" },
];

export const EXTRA_INFO_SHOW = {
  [CORTE1]: "practice",
  [CORTE2]: "graphics",
};

export const ATTRIBUTES_NAMES = {
  AtributoNAleatorio: "Atributos n aleatorio",
  AtributoNConstante: " Atributos n constante",
  AtributoNVariable: " Atributos n variable",
};

export const VARIABLE_SECUNDARIA = {
  [REFRESCOS]: "cant gas %",
  [BARRA_JABON]: "riq. en grasa",
};
