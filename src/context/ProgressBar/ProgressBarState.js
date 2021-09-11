import React, { useReducer, useCallback } from "react";

import ProgressBarContext from "./ProgressBarContext";
import ProgressBarReducer from "./ProgressBarReducer";

import { STEP, GET_STEPS } from "types/index";

const ProgressBarState = ({ children }) => {
  const initialState = {
    steps: [],
    step: 0,
  };

  const [state, dispatch] = useReducer(ProgressBarReducer, initialState);

  const getSteps = useCallback((steps) => {
    dispatch({
      type: GET_STEPS,
      payload: steps,
    });
  }, []);

  function handleStep() {
    dispatch({
      type: STEP,
    });
  }

  return (
    <ProgressBarContext.Provider
      value={{
        steps: state.steps,
        step: state.step,
        getSteps,
        handleStep,
      }}
    >
      {children}
    </ProgressBarContext.Provider>
  );
};

export default ProgressBarState;
