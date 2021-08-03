import { useState, useEffect } from "react";
import useStudent from "./useStudent";

const useReviewSubgroup = () => {
  const { selectedSubgroup, getAllSubgroup } = useStudent();
  const [reviewedSubgroup, setReviewedSubgroup] = useState([]);

  useEffect(() => {
    if (selectedSubgroup === null) {
      getAllSubgroup();
    }
  }, [selectedSubgroup, getAllSubgroup]);

  let selectedGroups = selectedSubgroup?.grupos;

  let numberOfReviewed = reviewedSubgroup.reduce(
    (acc, subgroup) => acc + subgroup.count,
    0
  );

  let isIndexExist = !reviewedSubgroup.some(
    (reviewed) => reviewed.id === selectedSubgroup.id
  );

  let reviewedIndex = reviewedSubgroup.findIndex(
    (rev) => rev.id === selectedSubgroup.id
  );

  const isCounterEmpty = () =>
    reviewedSubgroup[reviewedIndex]?.count === undefined
      ? 0
      : reviewedSubgroup[reviewedIndex]?.count;

  const counterSubgroup = () => {
    let counter = 0;

    for (const group of selectedGroups) {
      if (group.isChecked === true) counter++;
    }

    if (isIndexExist) {
      setReviewedSubgroup([
        ...reviewedSubgroup,
        {
          id: selectedSubgroup.id,
          count: counter,
        },
      ]);
    } else {
      setReviewedSubgroup((prevReviewed) =>
        prevReviewed.map((reviewed) => {
          if (reviewed.id === selectedSubgroup.id) {
            return {
              id: reviewed.id,
              count: counter,
            };
          }
          return reviewed;
        })
      );
    }
  };

  return {
    reviewedSubgroup,
    counterSubgroup,
    isCounterEmpty,
    reviewedIndex,
    numberOfReviewed,
  };
};

export default useReviewSubgroup;
