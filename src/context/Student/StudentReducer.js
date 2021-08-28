import {
  GET_ACTUAL_SUBGROUP,
  CHECK_SUBGROUP,
  GET_ALL_SUBGROUP,
  CHANGE_GRAPHIC,
  RESET_SELECTED_SUBGROUP,
  GET_CONDITIONS,
} from "types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  switch (type) {
    case GET_ALL_SUBGROUP:
      return {
        ...state,
        // subgroups: bigArray,
        // selectedSubgroup: AtributoNAleatorio[0],
      };
    case GET_ACTUAL_SUBGROUP:
      return {
        ...state,
        selectedSubgroup: payload,
      };
    case CHECK_SUBGROUP:
      const { groupSelected, idSubgroupSelected, nameArray } = payload;

      const original = { ...state.subgroups };

      const newGroups = state.subgroups[nameArray].map((subgroup) => {
        if (subgroup.id === idSubgroupSelected) {
          subgroup.grupos.map((group) => {
            if (group.id === groupSelected.id) {
              return groupSelected;
            }
            return group;
          });
        }
        return subgroup;
      });

      original[nameArray] = newGroups;

      return {
        ...state,
        subgroups: original,
      };

    case CHANGE_GRAPHIC:
      return {
        ...state,
        typeOfGraphic: payload,
      };

    case RESET_SELECTED_SUBGROUP:
      return {
        ...state,
        selectedSubgroup: null,
      };

    case GET_CONDITIONS: {
      return {
        ...state,
        conditions: payload,
      };
    }

    default:
      return state;
  }
};
