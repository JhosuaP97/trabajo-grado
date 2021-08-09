import React, { useState } from "react";
import { Progress, Steps, Bar, Step, Text } from "./styles";

const ProgressBar = ({ steps, indexStep }) => {
  // const [indexStep, setIndexStep] = useState(0);

  // const nextStep = () => {
  //   setIndexStep(indexStep >= steps.length ? steps.length : indexStep + 1);
  // };

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
    </Progress>
  );
};

export default ProgressBar;
