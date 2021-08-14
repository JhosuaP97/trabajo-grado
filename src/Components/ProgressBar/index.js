import useProduct from "hooks/useProduct";
import React from "react";
import { Progress, Steps, Bar, Step, Text } from "./styles";

const ProgressBar = ({ steps }) => {
  const { step } = useProduct();
  const progressBar = (step / (steps.length - 1)) * 100;

  const IsSelectedOrActive = (id) =>
    id === step ? "selected" : id < step && "active";
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
