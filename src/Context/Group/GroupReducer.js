//Types
import { ADD_NEW_GROUP, CHANGE_GROUP, FILTER_NAMES_GROUP } from "types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case ADD_NEW_GROUP:
      return {
        ...state,
        groups: action.payload,
        filterNames: [],
      };
    case CHANGE_GROUP:
      const { index, name, value } = action.payload;
      const updatedGroup = { ...state.groups[index], [name]: value };

      const updatedGroups = [
        ...state.groups.slice(0, index),
        updatedGroup,
        ...state.groups.slice(index + 1),
      ];
      return {
        ...state,
        groups: updatedGroups,
      };

    case FILTER_NAMES_GROUP:
      return {
        ...state,
        filterNames: action.payload,
      };

    default:
      return state;
  }
};
