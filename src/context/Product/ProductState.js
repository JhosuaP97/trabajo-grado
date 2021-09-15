import React, { useReducer } from "react";

import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";

import {
  REVIEW_PRODUCT,
  PRODUCT_INDEX,
  REVIEW_PRODUCT_SUBGROUP,
  REJECTED_PRODUCT,
  ACCEPTED_PRODUCT,
  SHOW_MESSAGE,
  RESET_REVIEW_SUBGROUP,
  CHANGE_STATE_MESSAGE,
} from "types/index";
import axiosClient from "config/axios";

const ProductState = ({ children }) => {
  const initialState = {
    reviewed: [],
    rejected: [],
    accepted: [],
    productIndex: 1,
    reviewedSubgroup: [],
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

  function handleRejected(product) {
    dispatch({
      type: REJECTED_PRODUCT,
      payload: product,
    });
  }

  function handleAccepted(product) {
    dispatch({
      type: ACCEPTED_PRODUCT,
      payload: product,
    });
  }

  function handleMessageActive() {
    dispatch({
      type: SHOW_MESSAGE,
    });
  }

  function changeStateMessage(stateMessage) {
    dispatch({
      type: CHANGE_STATE_MESSAGE,
      payload: stateMessage,
    });
  }

  function resetReview() {
    dispatch({
      type: RESET_REVIEW_SUBGROUP,
    });
  }

  async function updateProductsStates(idEstudiante, idPractica, data) {
    try {
      await axiosClient.put(
        `api/producto/corte3/actualizar/${idPractica}/estudiante/${idEstudiante}`,
        data
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ProductContext.Provider
      value={{
        reviewed: state.reviewed,
        productIndex: state.productIndex,
        reviewedSubgroup: state.reviewedSubgroup,
        isMessageActive: state.isMessageActive,
        rejected: state.rejected,
        accepted: state.accepted,
        handleReview,
        handleProductIndex,
        handleReviewSubgroup,
        handleMessageActive,
        resetReview,
        changeStateMessage,
        handleRejected,
        handleAccepted,
        updateProductsStates,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
