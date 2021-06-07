export const CORTE1 = "Corte 1";
export const CORTE2 = "Corte 2";
export const CORTE3 = "Corte 3";

export const VARIABLE = "variable";
export const ATRIBUTO = "atributo";

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

export const optionsProducto = [
  {
    id: "refrescos",
    label: "Refrescos",
    contOptions: [
      { id: "355", label: "355" },
      { id: "360", label: "360" },
      { id: "1000", label: "1000" },
    ],
    placeholder: "Cont ml",
    attributes: [
      { id: "tapaFloja", label: "Tapa floja" },
      { id: "EtiquetaSuelta", label: "Etiqueta suelta" },
      { id: "TextosIlegibles", label: "Textos Ilegibles" },
      { id: "EnvaseSucio", label: "Envase sucio" },
    ],
  },
  {
    id: "arroz",
    label: "Bolsa de arroz",
    contOptions: [
      { id: "500", label: "500" },
      { id: "600", label: "600" },
      { id: "700", label: "700" },
    ],
    placeholder: "Cont grs",
    attributesName: "atrArroz",
    attributes: [
      { id: "bolsaRota", label: "Bolsa rota" },
      { id: "variacionColor", label: "Variación de color" },
      { id: "textoIncompleto", label: "Texto incompleto" },
      { id: "suciedad", label: "Suciedad" },
    ],
  },
  {
    id: "pitillos",
    label: "Pitillos",
    contOptions: [
      { id: "19", label: "19" },
      { id: "20", label: "20" },
      { id: "21", label: "21" },
    ],
    placeholder: "Cont mm",
    attributesName: "atrPitillos",
    attributes: [
      { id: "doblados", label: "Doblados" },
      { id: "suciedad", label: "Suciedad" },
      { id: "variacionColor", label: "Variación de color" },
    ],
  },
  {
    id: "barraChocolate",
    label: "Barra de chocolate",
    contOptions: [
      { id: "24", label: "24" },
      { id: "25", label: "25" },
      { id: "26", label: "26" },
    ],
    placeholder: "Cont grs",
    attributesName: "atrChocolate",
    attributes: [
      { id: "barraPartida", label: "Barra partida" },
      { id: "variacionColor", label: "Variación de color" },
      { id: "textoIncompleto", label: "Texto incompleto" },
      { id: "selloIrregular", label: "Sello irregular" },
    ],
  },
  {
    id: "barraJabon",
    label: "Barra de jabon",
    contOptions: [
      { id: "100", label: "100" },
      { id: "200", label: "200" },
      { id: "300", label: "300" },
    ],
    placeholder: "Cont grs",
    attributesName: "atrJabon",
    attributes: [
      { id: "variacionColor", label: "Variación de color" },
      { id: "empaqueRoto", label: "Empaque roto" },
      { id: "textoEmpaqueIlegible", label: "Texto empanque ilegible" },
      { id: "deforme", label: "Deforme" },
    ],
  },
  {
    id: "cepilloDientes",
    label: "Cepillo de dientes",
    contOptions: [
      { id: "355", label: "355" },
      { id: "360", label: "360" },
      { id: "1000", label: "1000" },
    ],
    placeholder: "Cont mm",
    attributesName: "atrCepillo",
    attributes: [
      { id: "mangoIncompleto", label: "Mango incompleto" },
      { id: "mangoRayado", label: "Mango rayado" },
      { id: "faltoCerdas", label: "Falto de cerdas" },
      { id: "cerdasSucias", label: "Cerdas Sucias" },
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

// const { contIndividual, ...newModuleIndividual } = corte1Individual;

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
