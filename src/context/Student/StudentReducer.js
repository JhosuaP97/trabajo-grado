import {
  GET_ALL_PRACTICES_STUDENT,
  GET_ACTUAL_MODULE,
  GET_PRACTICE_ID,
  CREATE_INSPECTION_PRODUCT_MODULE1,
  CREATE_INSPECTION_PRODUCT_MODULE2,
  GET_PRODUCTS_INSPECTION_MODULE1,
  GET_PRODUCTS_INSPECTION_MODULE2,
  GET_PRODUCTS_INSPECTION_MODULE3,
  GET_ALL_GRAPHICS,
  LOADING_INSPECTION_PRODUCT,
  GET_PRODUCTS_FEATURES_MODULE1,
  GET_PRODUCTS_FEATURES_MODULE2,
  GET_PRODUCTS_FEATURES_MODULE3,
  GET_ACTUAL_SUBGROUP,
  CHECK_SUBGROUP,
  GET_ALL_SUBGROUP,
  CHANGE_GRAPHIC,
  RESET_SELECTED_SUBGROUP,
  GET_CONDITIONS,
  UPDATE_PRACTICE_STATE,
  GET_PRACTICE_STATE,
  GET_MODULE_URL,
} from "types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRACTICES_STUDENT:
      return {
        ...state,
        practicesStudent: payload,
      };
    case GET_ACTUAL_MODULE:
      return {
        ...state,
        modulo: payload,
      };

    case LOADING_INSPECTION_PRODUCT:
      return {
        ...state,
        isloading: payload,
      };

    case CREATE_INSPECTION_PRODUCT_MODULE1:
    case CREATE_INSPECTION_PRODUCT_MODULE2:
      return {
        ...state,
        isloading: false,
      };

    case GET_PRODUCTS_INSPECTION_MODULE1:
    case GET_PRODUCTS_INSPECTION_MODULE3:
      return {
        ...state,
        products: payload,
      };

    case GET_PRODUCTS_INSPECTION_MODULE2:
      return {
        ...state,
        subgroups: payload,
      };

    case GET_ALL_GRAPHICS:
      return {
        ...state,
        graphics: payload,
      };
    case GET_PRODUCTS_FEATURES_MODULE1:
    case GET_PRODUCTS_FEATURES_MODULE2:
    case GET_PRODUCTS_FEATURES_MODULE3:
      return {
        ...state,
        features: payload,
      };

    case GET_PRACTICE_ID:
      return {
        ...state,
        idPractica: payload,
      };

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

    case UPDATE_PRACTICE_STATE: {
      return {
        ...state,
        practicesStudent: state.practicesStudent.map((practice) =>
          practice.id === payload ? payload : practice
        ),
      };
    }

    case GET_PRACTICE_STATE: {
      return {
        ...state,
        finish: payload,
      };
    }

    case GET_MODULE_URL: {
      return {
        ...state,
        actualModulo: payload,
      };
    }

    default:
      return state;
  }
};
