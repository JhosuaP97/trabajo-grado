import { CHANGE_INDIVIDUAL, CHANGE_INDIVIDUAL_MULTI_SELECT } from "types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case CHANGE_INDIVIDUAL_MULTI_SELECT:
    case CHANGE_INDIVIDUAL:
      const { name, value } = action.payload;
      const updatedIndividual = { ...state.individual, [name]: value };
      return {
        individual: updatedIndividual,
      };
    default:
      return state;
  }
};
