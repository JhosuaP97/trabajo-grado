import { GET_ACTUAL_SUBGROUP, CHECK_SUBGROUP, GET_ALL_SUBGROUP } from "types";
import Refresco from "models/Refresco.glb";
import RefrescoTapaFloja from "models/Refresco_tapa_floja.glb";
import RefrescoTapaFlojaEnvaseSucio from "models/Refresco_tapa_floja_envase_sucio.glb";
import RefrescoEtiquetaSueltaEnvaseSucioTapaFloja from "models/Refresco_etiqueta_suelta_envase_sucio_tapa_floja.glb";
import RefrescoEnvaseSucio from "models/Refresco_envase_sucio.glb";
import RefrescoDefectuoso from "models/Refresco_defectuoso.glb";
const dataSubg = [
  {
    id: 32324343,
    title: "Subgrupo 1",
    grupos: [
      {
        id: 64565,
        src: Refresco,
        contenido: "356 ml",
        cantidad_gas: "17%",
        isChecked: false,
      },
      {
        id: 265,
        src: Refresco,
        contenido: "356 ml",
        cantidad_gas: "17%",
        isChecked: false,
      },
      {
        id: 1233232,
        src: Refresco,
        contenido: "356 ml",
        cantidad_gas: "17%",
        isChecked: false,
      },
      {
        id: 65456565,
        src: Refresco,
        contenido: "356 ml",
        cantidad_gas: "17%",
        isChecked: false,
      },
    ],
  },
  {
    id: 32324432435,
    title: "Subgrupo 2",
    grupos: [
      {
        id: 2130,
        src: RefrescoTapaFloja,
        contenido: "352 ml",
        cantidad_gas: "12%",
        isChecked: false,
      },
      {
        id: 4545,
        src: RefrescoTapaFlojaEnvaseSucio,
        contenido: "351 ml",
        cantidad_gas: "1%",
        isChecked: false,
      },
      {
        id: 2132330,
        src: RefrescoTapaFloja,
        contenido: "352 ml",
        cantidad_gas: "12%",
        isChecked: false,
      },
      {
        id: 45323245,
        src: RefrescoTapaFlojaEnvaseSucio,
        contenido: "351 ml",
        cantidad_gas: "1%",
        isChecked: false,
      },
      {
        id: 453245,
        src: RefrescoTapaFloja,
        contenido: "352 ml",
        cantidad_gas: "12%",
        isChecked: false,
      },
      {
        id: 4454343545,
        src: RefrescoTapaFlojaEnvaseSucio,
        contenido: "351 ml",
        cantidad_gas: "1%",
        isChecked: false,
      },
    ],
  },
  {
    id: 3283298328,
    title: "Subgrupo 3",
    grupos: [
      {
        id: 324443,
        src: RefrescoEtiquetaSueltaEnvaseSucioTapaFloja,
        contenido: "302 ml",
        cantidad_gas: "8%",
        isChecked: false,
      },
      {
        id: 7645,
        src: RefrescoEnvaseSucio,
        contenido: "334 ml",
        cantidad_gas: "17%",
        isChecked: false,
      },
      {
        id: 665556,
        src: RefrescoDefectuoso,
        contenido: "367 ml",
        cantidad_gas: "48%",
        isChecked: false,
      },
      {
        id: 88657,
        src: RefrescoEnvaseSucio,
        contenido: "334 ml",
        cantidad_gas: "17%",
        isChecked: false,
      },
      {
        id: 233232,
        src: RefrescoDefectuoso,
        contenido: "367 ml",
        cantidad_gas: "48%",
        isChecked: false,
      },
    ],
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  switch (type) {
    case GET_ALL_SUBGROUP:
      return {
        ...state,
        subgroups: dataSubg,
        selectedSubgroup: dataSubg[0],
      };
    case GET_ACTUAL_SUBGROUP:
      return {
        ...state,
        selectedSubgroup: payload,
      };
    case CHECK_SUBGROUP:
      const { groupSelected, idSubgroupSelected } = payload;
      const groups = state.subgroups.map((subgroup) => {
        if (subgroup.id === idSubgroupSelected) {
          subgroup.grupos.map((grupo) => {
            if (grupo.id === groupSelected.id) {
              return groupSelected;
            }
            return grupo;
          });
        }
        return subgroup;
      });

      return {
        ...state,
        subgroups: groups,
      };

    default:
      return state;
  }
};
