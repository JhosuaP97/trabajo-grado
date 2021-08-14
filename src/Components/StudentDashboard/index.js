import React from "react";
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
import useProduct from "hooks/useProduct";

const StudentDashboard = () => {
  // Hooks
  const { modulo, selectedSteps } = useStudent();
  const { isMessageActive, step } = useProduct();
  // States

  const selectedInfotoShow = EXTRA_INFO_SHOW[modulo];

  const showPagesModule1 = {
    0: "module1",
  };

  const showPagesModule2 = {
    0: "module2A",
    1: "module2B",
  };

  const selectedPage = (modulo) => {
    if (modulo === CORTE1) {
      return showPagesModule1[step];
    }
    if (modulo === CORTE2) {
      return showPagesModule2[step];
    }
  };

  return (
    <>
      <BackgrounContainer>
        <MainStudent>
          <ConfigPractice>
            <ProgressBar steps={selectedSteps} />
            {modulo !== CORTE3 && (
              <StudentExtraInfo infotoShow={selectedInfotoShow} />
            )}
          </ConfigPractice>
          <StudentData>
            {isMessageActive ? (
              <PageMessage pageName={selectedPage(modulo)} />
            ) : (
              <>
                <ProductsDisplay>
                  <ImageSlider />
                </ProductsDisplay>
                <Info>
                  <StudentInfo />
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
