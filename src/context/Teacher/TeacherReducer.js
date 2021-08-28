import { GET_PARTICIPANTS } from "types/index";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  switch (type) {
    case GET_PARTICIPANTS:
      return {
        ...state,
        participants: payload,
      };

    default:
      break;
  }
};
