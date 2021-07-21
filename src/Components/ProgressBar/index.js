import React, { useState } from "react";
import { Progress, Steps, Bar, Step, Text } from "./styles";

const ProgressBar = ({ steps }) => {
  const [indexStep, setIndexStep] = useState(0);

  const nextStep = () => {
    setIndexStep(indexStep >= steps.length ? steps.length : indexStep + 1);
  };
  const prevStep = () => {
    setIndexStep(indexStep <= 0 ? 0 : indexStep - 1);
  };

  const progressBar = (indexStep / (steps.length - 1)) * 100;
  const IsSelectedOrActive = (id) =>
    id === indexStep ? "selected" : id < indexStep && "active";
  return (
    <Progress>
      <Steps>
        <Bar height={progressBar} />
        {steps.map((step, id) => {
          return (
            <Step key={id} className={IsSelectedOrActive(id)}>
              <Text>{step}</Text>
            </Step>
          );
        })}
      </Steps>
      {/* <div className="navigation" style={{ marginTop: "30px" }}>
        <button className="button" disabled={indexStep <= 0} onClick={prevStep}>
          Prev
        </button>
        <button
          className="button"
          disabled={indexStep >= steps.length}
          onClick={nextStep}
        >
          Next
        </button>
      </div> */}
    </Progress>
  );
};

export default ProgressBar;
