import { useContext } from "react";
import ProgressBarContext from "context/ProgressBar/ProgressBarContext";

const useProgressBar = () => {
  const progressBarContext = useContext(ProgressBarContext);

  const { step, steps, handleStep, getSteps } = progressBarContext;

  return {
    step,
    steps,
    handleStep,
    getSteps,
  };
};

export default useProgressBar;
