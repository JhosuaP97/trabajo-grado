import {
  REVIEW_PRODUCT,
  PRODUCT_INDEX,
  REVIEW_PRODUCT_SUBGROUP,
  STEP,
  SHOW_MESSAGE,
  RESET_REVIEW_SUBGROUP,
} from "types/index";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  switch (type) {
    case REVIEW_PRODUCT:
      return {
        ...state,
        reviewed: !state.reviewed?.includes(payload)
          ? [...state.reviewed, payload]
          : state.reviewed,
      };
    case PRODUCT_INDEX:
      return {
        ...state,
        productIndex: payload,
      };

    case REVIEW_PRODUCT_SUBGROUP:
      const { idSubgroup, counter } = payload;

      let isIndexExist = !state.reviewedSubgroup.some(
        (reviewed) => reviewed.id === idSubgroup
      );

      const addReviewSubgroup = isIndexExist
        ? [
            ...state.reviewedSubgroup,
            {
              id: idSubgroup,
              counter,
            },
          ]
        : state.reviewedSubgroup.map((reviewed) => {
            return reviewed.id === idSubgroup
              ? {
                  id: reviewed.id,
                  counter,
                }
              : reviewed;
          });

      return {
        ...state,
        reviewedSubgroup: addReviewSubgroup,
      };

    case STEP:
      return {
        ...state,
        step: payload,
      };
    case SHOW_MESSAGE:
      return {
        ...state,
        isMessageActive: !state.isMessageActive,
      };

    case RESET_REVIEW_SUBGROUP:
      return {
        ...state,
        reviewedSubgroup: [],
        reviewed: [],
        productIndex: 1,
      };

    default:
      return state;
  }
};
