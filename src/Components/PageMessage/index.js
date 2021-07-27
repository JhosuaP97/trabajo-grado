import React from "react";
// Components
import PageMessageTableModule1 from "./PageMessageTableModule1";
import PageMessageConstant from "./PageMessageConstant";
import PageMessageVariableProductConstant from "./PageMessageVariableProductConstant";
import PageStartModule3 from "./PageStartModule3";
const SummaryPage = () => {
  const pageString = "page1";

  const SELECTEDPAGE = {
    page1: <PageMessageTableModule1 />,
    page2: <PageMessageConstant />,
    page3: <PageMessageVariableProductConstant />,
    page4: <PageStartModule3 />,
  };

  const page = SELECTEDPAGE[pageString] || <PageMessageTableModule1 />;
  return <>{page}</>;
};

export default SummaryPage;
