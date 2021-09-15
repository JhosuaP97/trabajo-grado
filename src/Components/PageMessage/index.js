import React, { useCallback } from "react";
// Components
import SummaryModule1 from "./SummaryModule1";
import NiceWorkMessage from "./NiceWorkMessage";
import DoingGreatMessage from "./DoingGreatMessage";
import ConditionsContainer from "./ConditionsContainer";
import {
  RANDOM,
  CONSTANT,
  VARIABLE,
  CORTE2,
  CORTE1,
  CORTE3,
} from "constants/index";
import useStudent from "hooks/useStudent";
import useProgressBar from "hooks/useProgressBar";

const PageMessage = () => {
  const { step } = useProgressBar();
  const { keysArrayGraphic, modulo } = useStudent();
  const SELECTEDPAGE = {
    module1: <SummaryModule1 />,
    module2A: <NiceWorkMessage />,
    module2B: <DoingGreatMessage />,
    module3: <ConditionsContainer />,
  };

  const showPagesModule1 = {
    0: SELECTEDPAGE["module1"],
  };

  const showPagesModule3 = {
    0: SELECTEDPAGE["module3"],
    1: SELECTEDPAGE["module1"],
  };

  const showPagesModule2RandomConstant = {
    0: SELECTEDPAGE["module2A"],
    1: SELECTEDPAGE["module1"],
  };

  const showPagesModule2RandomVariable = {
    0: SELECTEDPAGE["module2B"],
    1: SELECTEDPAGE["module1"],
  };

  const showPagesModule2ConstantVariable = {
    0: SELECTEDPAGE["module2B"],
    1: SELECTEDPAGE["module1"],
  };

  const showPagesModule2 = {
    0: SELECTEDPAGE["module2A"],
    1: SELECTEDPAGE["module2B"],
    2: SELECTEDPAGE["module1"],
  };

  function getPages(modulo) {
    if (modulo === CORTE1) {
      return showPagesModule1[step];
    }

    if (modulo === CORTE2) {
      if (keysArrayGraphic.length === 1) {
        return SELECTEDPAGE["module1"];
      }

      if (
        keysArrayGraphic.length === 2 &&
        keysArrayGraphic[0] === RANDOM &&
        keysArrayGraphic[1] === CONSTANT
      ) {
        return showPagesModule2RandomConstant[step];
      }
      if (
        keysArrayGraphic.length === 2 &&
        keysArrayGraphic[0] === RANDOM &&
        keysArrayGraphic[1] === VARIABLE
      ) {
        return showPagesModule2RandomVariable[step];
      }
      if (
        keysArrayGraphic.length === 2 &&
        keysArrayGraphic[0] === CONSTANT &&
        keysArrayGraphic[1] === VARIABLE
      ) {
        return showPagesModule2ConstantVariable[step];
      }

      if (keysArrayGraphic.length === 3) {
        return showPagesModule2[step];
      }
    }

    if (modulo === CORTE3) {
      return showPagesModule3[step];
    }
  }

  const page = getPages(modulo);
  console.log(page);
  // const page = SELECTEDPAGE[pageName] || <SummaryModule1 />;
  return <>{page}</>;
};

export default PageMessage;
