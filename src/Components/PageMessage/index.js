import React from "react";
// Components
import SummaryModule1 from "./SummaryModule1";
import NiceWorkMessage from "./NiceWorkMessage";
import DoingGreatMessage from "./DoingGreatMessage";
import ConditionsContainer from "./ConditionsContainer";
const PageMessage = ({ pageName }) => {
  const SELECTEDPAGE = {
    module1: <SummaryModule1 />,
    module2A: <NiceWorkMessage />,
    module2B: <DoingGreatMessage />,
    module3: <ConditionsContainer />,
  };

  const page = SELECTEDPAGE[pageName] || <SummaryModule1 />;
  return <>{page}</>;
};

export default PageMessage;
