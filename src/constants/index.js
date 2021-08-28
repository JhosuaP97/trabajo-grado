export const CORTE1 = "Corte 1";
export const CORTE2 = "Corte 2";
export const CORTE3 = "Corte 3";
export const SIZE_FIELD = "8rem";
export const VARIABLE = "variable";
export const ATRIBUTO = "atributo";
export const GRUPO = "grupo";
export const INDIVIDUAL = "individual";

export const optionsRoles = [
  { value: "profesor", label: "Profesor" },
  { value: "estudiante", label: "Estudiante" },
];

export const optionsParticipantes = [
  { value: 1, label: "Andres Botero" },
  { value: 2, label: "Ángela Fernandez" },
  { value: 3, label: "Camilo Andres Jimenez" },
  { value: 4, label: "Jhosua Pachón" },
  { value: 5, label: "Juan Carlos Hurtado" },
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
    placeholder: "Cont mm",
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

export const TYPEOF_GRAPHICS_PRODUCT = {
  random: "random",
  constant: "constant",
  variable: "variable",
};

export const EXTRA_INFO_SHOW = {
  "Corte 1": "practice",
  "Corte 2": "graphics",
};
