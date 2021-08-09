import React from "react";
// Components
import SummaryModule1 from "./SummaryModule1";
import NiceWorkMessage from "./NiceWorkMessage";
import DoingGreatMessage from "./DoingGreatMessage";
import ConditionsContainer from "./ConditionsContainer";
const PageMessage = ({ pageName, step }) => {
  const SELECTEDPAGE = {
    module1: <SummaryModule1 step={step} />,
    module2A: <NiceWorkMessage step={step} />,
    module2B: <DoingGreatMessage step={step} />,
    module3: <ConditionsContainer step={step} />,
  };

  const page = SELECTEDPAGE[pageName] || <SummaryModule1 />;
  return <>{page}</>;
};

export default PageMessage;
