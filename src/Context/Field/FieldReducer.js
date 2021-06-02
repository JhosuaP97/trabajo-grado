//Types
import {
  CHANGE_FIELD,
  CHANGE_FIELD_MULTI_SELECT,
  CHANGE_FIELD_MULTI_SELECT_ALL,
} from "types";
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case CHANGE_FIELD_MULTI_SELECT:
    case CHANGE_FIELD:
      const { name, value } = action.payload;
      const updatedField = { ...state.field, [name]: value };
      return {
        ...state,
        field: updatedField,
      };
    case CHANGE_FIELD_MULTI_SELECT_ALL:
      const { name: Name, options } = action.payload;
      const updatedFieldAll = { ...state.field, [Name]: options };
      return {
        ...state,
        field: updatedFieldAll,
      };
    default:
      return state;
  }
};
