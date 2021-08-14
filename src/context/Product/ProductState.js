import React, { useReducer } from "react";

import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";

import {
  REVIEW_PRODUCT,
  PRODUCT_INDEX,
  REVIEW_PRODUCT_SUBGROUP,
  STEP,
  SHOW_MESSAGE,
  RESET_REVIEW_SUBGROUP,
} from "types/index";

const ProductState = ({ children }) => {
  const initialState = {
    reviewed: [],
    productIndex: 1,
    reviewedSubgroup: [],
    step: 0,
    isMessageActive: false,
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  function handleReview(review) {
    dispatch({
      type: REVIEW_PRODUCT,
      payload: review,
    });
  }

  function handleProductIndex(index) {
    dispatch({
      type: PRODUCT_INDEX,
      payload: index,
    });
  }

  function handleReviewSubgroup(idSubgroup, counter) {
    dispatch({
      type: REVIEW_PRODUCT_SUBGROUP,
      payload: { idSubgroup, counter },
    });
  }

  function handleStep(step) {
    dispatch({
      type: STEP,
      payload: step,
    });
  }

  function handleMessageActive() {
    dispatch({
      type: SHOW_MESSAGE,
    });
  }

  function resetReview() {
    dispatch({
      type: RESET_REVIEW_SUBGROUP,
    });
  }

  return (
    <ProductContext.Provider
      value={{
        reviewed: state.reviewed,
        productIndex: state.productIndex,
        reviewedSubgroup: state.reviewedSubgroup,
        step: state.step,
        isMessageActive: state.isMessageActive,
        handleReview,
        handleProductIndex,
        handleReviewSubgroup,
        handleStep,
        handleMessageActive,
        resetReview,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
