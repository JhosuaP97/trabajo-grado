import React, { useState } from "react";
// Components
import StudentInfo from "Components/StudentInfo";
import ImageSlider from "Components/ImageSlider";
import {
  CORTE1,
  CORTE2,
  CORTE3,
  STEPS_BY_MODULE,
  TYPEOF_GRAPHICS_PRODUCT,
  EXTRA_INFO_SHOW,
} from "constants/index";

import StudentExtraInfo from "Components/StudentExtraInfo";
import ProgressBar from "Components/ProgressBar";

// Styles
import {
  BackgrounContainer,
  ConfigPractice,
  StudentData,
  Info,
  ProductsDisplay,
  MainStudent,
} from "./styles";
import PageMessage from "Components/PageMessage";

import useStudent from "hooks/useStudent";
import useReviewSubgroup from "hooks/useReviewSubgroup";
import useProductsState from "hooks/useProductsState";

const StudentDashboard = () => {
  // Hooks
  const { products, modulo, selectedSubgroup } = useStudent();
  const { counterSubgroup, isCounterEmpty, numberOfReviewed } =
    useReviewSubgroup();
  const {
    reviewed,
    checked,
    rejected,
    handleReview,
    handleChecked,
    handleRejected,
  } = useProductsState();

  // States

  const [isMessageActive, setIsMessageActive] = useState(false);

  const [indexStep, setIndexStep] = useState(0);

  const nextStep = (steps) => {
    setIndexStep(indexStep >= steps.length ? steps.length : indexStep + 1);
  };

  const [selectedIdSubgroup, setSelectedIdSubgroup] = useState(0);

  const countReviewed = reviewed.length;
  const countRejected = rejected.length;
  const countChecked = checked.length;

  const selectedInfotoShow = EXTRA_INFO_SHOW[modulo];
  const selectedSteps = STEPS_BY_MODULE[modulo];

  const isModulo3 = (value) => (modulo === CORTE3 ? value : null);

  return (
    <>
      <BackgrounContainer>
        <MainStudent>
          <ConfigPractice>
            <ProgressBar steps={selectedSteps} indexStep={indexStep} />
            {modulo !== CORTE3 && (
              <StudentExtraInfo infotoShow={selectedInfotoShow} />
            )}
          </ConfigPractice>
          <StudentData>
            {modulo === CORTE1 && isMessageActive ? (
              <PageMessage
                pageName="module1"
                step={() => nextStep(selectedSteps)}
              />
            ) : (
              <>
                <ProductsDisplay>
                  <ImageSlider
                    counterSubgroup={counterSubgroup}
                    selectedIdSubgroup={selectedIdSubgroup}
                    reviewed={reviewed}
                    rejected={isModulo3(rejected)}
                    checked={isModulo3(checked)}
                    handleReview={handleReview}
                    handleChecked={handleChecked}
                    handleRejected={handleRejected}
                  />
                </ProductsDisplay>
                <Info>
                  <StudentInfo
                    numberOfReviewed={numberOfReviewed}
                    selectedIdSubgroup={selectedIdSubgroup}
                    setSelectedIdSubgroup={setSelectedIdSubgroup}
                    setIsMessageActive={setIsMessageActive}
                    handleReview={handleReview}
                    nextStep={() => nextStep(selectedSteps)}
                    countReviewed={
                      modulo === CORTE2 ? isCounterEmpty() : countReviewed
                    }
                    totalReviewed={
                      modulo === CORTE2
                        ? selectedSubgroup?.grupos?.length
                        : products.length
                    }
                    rejected={countRejected}
                    checked={countChecked}
                  />
                </Info>
              </>
            )}
          </StudentData>
        </MainStudent>
      </BackgrounContainer>
    </>
  );
};

export default StudentDashboard;
