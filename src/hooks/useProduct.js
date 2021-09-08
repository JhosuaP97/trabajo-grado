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
    step,
    handleStep,
    isMessageActive,
    handleMessageActive,
    resetReview,
    changeStateMessage,
    rejected,
    accepted,
    handleRejected,
    handleAccepted,
  } = productContext;

  let reviewedIndex = reviewedSubgroup.findIndex(
    (rev) => rev?.id === selectedSubgroup.id
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

  const nextStep = (steps) => {
    handleStep(step >= steps.length ? steps.length : step + 1);
  };

  return {
    reviewed,
    productIndex,
    reviewedSubgroup,
    step,
    isMessageActive,
    rejected,
    accepted,
    handleReview,
    handleProductIndex,
    handleReviewSubgroup,
    isCounterEmpty,
    nextStep,
    handleMessageActive,
    resetReview,
    changeStateMessage,
    handleProductRejected,
    handleProductAccepted,
    counterRejected,
    counterAccepted,
  };
};

export default useProduct;