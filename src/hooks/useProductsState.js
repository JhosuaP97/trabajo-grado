import { useState } from "react";

const useProductsState = () => {
  const [reviewed, setReviewed] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [checked, setChecked] = useState([]);

  const deleteSelectedItem = (index, array) =>
    array.filter((item) => item !== index);

  function handleReview(slide) {
    if (!reviewed?.includes(slide)) {
      setReviewed([...reviewed, slide]);
    }
  }

  function handleChecked(index) {
    if (!checked?.includes(index)) {
      setChecked([...checked, index]);
    }

    if (rejected?.includes(index)) {
      setRejected(deleteSelectedItem(index, rejected));
    }
  }

  function handleRejected(index) {
    if (!rejected?.includes(index)) {
      setRejected([...rejected, index]);
    }

    if (checked?.includes(index)) {
      setChecked(deleteSelectedItem(index, checked));
    }
  }
  return {
    reviewed,
    checked,
    rejected,
    handleReview,
    handleChecked,
    handleRejected,
  };
};

export default useProductsState;
