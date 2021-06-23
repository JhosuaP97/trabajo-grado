export const CORTE1 = "Corte 1";
export const CORTE2 = "Corte 2";
export const CORTE3 = "Corte 3";

export const VARIABLE = "variable";
export const ATRIBUTO = "atributo";
export const GRUPO = "grupo";
export const INDIVIDUAL = "individual";

export const optionsParticipantes = [
  { value: 1, label: "Andres Botero" },
  { value: 2, label: "Ángela Fernandez" },
  { value: 3, label: "Camilo Andres Jimenez" },
  { value: 4, label: "Jhosua Pachón" },
  { value: 5, label: "Juan Carlos Hurtado" },
];

export const optionsModulos = [
  { value: "corte1", label: "Corte 1" },
  { value: "corte2", label: "Corte 2" },
  { value: "corte3", label: "Corte 3" },
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
      { value: "355", label: "355" },
      { value: "360", label: "360" },
      { value: "1000", label: "1000" },
    ],
    placeholder: "Cont ml",
    attributes: [
      { value: "tapaFloja", label: "Tapa floja" },
      { value: "EtiquetaSuelta", label: "Etiqueta suelta" },
      { value: "TextosIlegibles", label: "Textos Ilegibles" },
      { value: "EnvaseSucio", label: "Envase sucio" },
    ],
  },
  {
    value: "arroz",
    label: "Bolsa de arroz",
    contOptions: [
      { value: "500", label: "500" },
      { value: "600", label: "600" },
      { value: "700", label: "700" },
    ],
    placeholder: "Cont grs",
    attributesName: "atrArroz",
    attributes: [
      { value: "bolsaRota", label: "Bolsa rota" },
      { value: "variacionColor", label: "Variación de color" },
      { value: "textoIncompleto", label: "Texto incompleto" },
      { value: "suciedad", label: "Suciedad" },
    ],
  },
  {
    value: "pitillos",
    label: "Pitillos",
    contOptions: [
      { value: "19", label: "19" },
      { value: "20", label: "20" },
      { value: "21", label: "21" },
    ],
    placeholder: "Cont mm",
    attributesName: "atrPitillos",
    attributes: [
      { value: "doblados", label: "Doblados" },
      { value: "suciedad", label: "Suciedad" },
      { value: "variacionColor", label: "Variación de color" },
    ],
  },
  {
    value: "barraChocolate",
    label: "Barra de chocolate",
    contOptions: [
      { value: "24", label: "24" },
      { value: "25", label: "25" },
      { value: "26", label: "26" },
    ],
    placeholder: "Cont grs",
    attributesName: "atrChocolate",
    attributes: [
      { value: "barraPartida", label: "Barra partida" },
      { value: "variacionColor", label: "Variación de color" },
      { value: "textoIncompleto", label: "Texto incompleto" },
      { value: "selloIrregular", label: "Sello irregular" },
    ],
  },
  {
    value: "barraJabon",
    label: "Barra de jabon",
    contOptions: [
      { value: "100", label: "100" },
      { value: "200", label: "200" },
      { value: "300", label: "300" },
    ],
    placeholder: "Cont grs",
    attributesName: "atrJabon",
    attributes: [
      { value: "variacionColor", label: "Variación de color" },
      { value: "empaqueRoto", label: "Empaque roto" },
      { value: "textoEmpaqueIlegible", label: "Texto empanque ilegible" },
      { value: "deforme", label: "Deforme" },
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
  { value: "media", label: "Media (x̄)" },
  { value: "rango", label: "Rango (R)" },
  { value: "desviacionEstandar", label: "Desviación estandar" },
  { value: "pConstante", label: "P con n constante" },
  { value: "pVariable", label: "P con n variable" },
  { value: "np", label: "NP" },
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
  { value: "K", label: "K" },
  { value: "M", label: "M" },
  { value: "rango", label: "Rango" },
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

//Groups Objects

export const corte1Groups = {
  producto: "",
  unidades: 0,
  cont: 0,
  tolerancia: 0,
  atributos: [],
  integrantes: [],
};

const { cont, ...newModuleGroups } = corte1Groups;

export const corte2Groups = {
  ...newModuleGroups,
  subgrupo: 0,
  tamanioSubgrupo: 0,
};

const { unidades, ...newModuleGroups2 } = corte1Groups;

export const corte3Groups = {
  ...newModuleGroups2,
  lote: 0,
  aql: 0,
  severidad: "",
  nivelInspeccion: "",
  metodo: "",
};

// Individual Objects

export const corte1Individual = {
  productoIndividual: "",
  unidadesIndividual: 0,
  contIndividual: 0,
  toleranciaIndividual: 0,
  atributosIndividual: [],
};

export const corte2Individual = {
  ...corte1Individual,
  subgrupoIndividual: 0,
  tamanioSubgrupoIndividual: 0,
};

export const corte3Individual = {
  ...corte1Individual,
  loteIndividual: 0,
  aqlIndividual: 0,
  severidadIndividual: "",
  nivelInspeccionIndividual: "",
  metodoIndividual: "",
};
