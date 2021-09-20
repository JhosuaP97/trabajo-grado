import { STEP, GET_STEPS, RESET_STEPS } from "types/index";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  switch (type) {
    case GET_STEPS:
      return {
        ...state,
        steps: payload,
      };

    case STEP:
      return {
        ...state,
        step:
          state.step >= state.steps.length
            ? state.steps.length
            : state.step + 1,
      };

    case RESET_STEPS:
      return {
        ...state,
        steps: [],
        step: 0,
      };

    default:
      return state;
  }
};
