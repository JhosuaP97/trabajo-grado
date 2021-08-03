import React from "react";
// Components
import SummaryModule1 from "./SummaryModule1";
import NiceWorkMessage from "./NiceWorkMessage";
import DoingGreatMessage from "./DoingGreatMessage";
import ConditionsContainer from "./ConditionsContainer";
const PageMessage = () => {
  const pageString = "pageModule1";

  const SELECTEDPAGE = {
    pageModule1: <SummaryModule1 />,
    pageModule2A: <NiceWorkMessage />,
    pageModule2B: <DoingGreatMessage />,
    pageModule3: <ConditionsContainer />,
  };

  const page = SELECTEDPAGE[pageString] || <SummaryModule1 />;
  return <>{page}</>;
};

export default PageMessage;
