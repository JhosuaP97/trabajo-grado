export const optionsParticipantes = [
  { value: 1, label: "Andres Botero" },
  { value: 2, label: "Ángela Fernandez" },
  { value: 3, label: "Camilo Andres Jimenez" },
  { value: 4, label: "Jhosua Pachón" },
  { value: 5, label: "Juan Carlos Hurtado" },
];

export const optionsModulos = [
  { id: 1, label: "Corte 1" },
  { id: 2, label: "Corte 2" },
  { id: 3, label: "Corte 3" },
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
  { id: 1, label: "1" },
  { id: 2, label: "2" },
  { id: 3, label: "3" },
  { id: 4, label: "4" },
  { id: 5, label: "5" },
  { id: 6, label: "6" },
];
