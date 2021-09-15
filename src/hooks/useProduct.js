import { useContext } from "react";
import ProductContext from "context/Product/ProductContext";
import useStudent from "./useStudent";
const useProduct = () => {
  const { selectedSubgroup } = useStudent();
  const productContext = useContext(ProductContext);
  const {
    reviewed,
    productIndex,
    reviewedSubgroup,
    handleReview,
    handleProductIndex,
    handleReviewSubgroup,
    isMessageActive,
    handleMessageActive,
    resetReview,
    changeStateMessage,
    rejected,
    accepted,
    handleRejected,
    handleAccepted,
    updateProductsStates,
  } = productContext;

  let reviewedIndex = reviewedSubgroup?.findIndex(
    (rev) => rev?.id === selectedSubgroup?.id
  );

  const counterRejected = rejected === [] ? 0 : rejected.length;
  const counterAccepted = accepted === [] ? 0 : accepted.length;

  const deleteSelectedItem = (index, array) =>
    array.filter((item) => item !== index);

  function handleProductRejected(index) {
    if (!rejected?.includes(index)) {
      handleRejected([...rejected, index]);
    }

    if (accepted?.includes(index)) {
      handleAccepted(deleteSelectedItem(index, accepted));
    }
  }

  function handleProductAccepted(index) {
    if (!accepted?.includes(index)) {
      handleAccepted([...accepted, index]);
    }

    if (rejected?.includes(index)) {
      handleRejected(deleteSelectedItem(index, rejected));
    }
  }

  const isCounterEmpty = () =>
    reviewedSubgroup[reviewedIndex]?.counter === undefined
      ? 0
      : reviewedSubgroup[reviewedIndex]?.counter;

  return {
    reviewed,
    productIndex,
    reviewedSubgroup,
    isMessageActive,
    rejected,
    accepted,
    handleReview,
    handleProductIndex,
    handleReviewSubgroup,
    isCounterEmpty,
    handleMessageActive,
    resetReview,
    changeStateMessage,
    handleProductRejected,
    handleProductAccepted,
    counterRejected,
    counterAccepted,
    updateProductsStates,
  };
};

export default useProduct;
