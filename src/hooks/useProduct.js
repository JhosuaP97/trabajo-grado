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
  } = productContext;

  let reviewedIndex = reviewedSubgroup.findIndex(
    (rev) => rev?.id === selectedSubgroup.id
  );

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
    handleReview,
    handleProductIndex,
    handleReviewSubgroup,
    isCounterEmpty,
    nextStep,
    handleMessageActive,
    resetReview,
  };
};

export default useProduct;
