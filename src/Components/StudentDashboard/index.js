import React, { useEffect } from "react";
// Components
import StudentInfo from "Components/StudentInfo";
import ImageSlider from "Components/ImageSlider";
import StudentExtraInfo from "Components/StudentExtraInfo";
import ProgressBar from "Components/ProgressBar";
import PageMessage from "Components/PageMessage";

// Styles
import {
  BackgrounContainer,
  ConfigPractice,
  StudentData,
  Info,
  ProductsDisplay,
  MainStudent,
} from "./styles";

// hooks
import useStudent from "hooks/useStudent";
import useProduct from "hooks/useProduct";
import { useLocation } from "react-router";
// constants
import { CORTE1, CORTE2, CORTE3, MODULE_PRACTICE } from "constants/index";
import useAuth from "hooks/useAuth";
import useProgressBar from "hooks/useProgressBar";

const StudentDashboard = () => {
  // Hooks
  const { userAuthenticate, user } = useAuth();
  const {
    modulo,
    getActualModule,
    getAllPracticesStudent,
    practicesStudent,
    getPracticeId,
    idPractica,
  } = useStudent();
  const { isMessageActive, changeStateMessage } = useProduct();
  const { step } = useProgressBar();

  const getIdStudent = user?.estudiante?.idEstudiante;

  const { pathname } = useLocation();
  const urlModule = pathname.split("/")[5];
  const urlidpractice = Number(pathname.split("/")[4]);
  const selectedModule = MODULE_PRACTICE[urlModule];

  useEffect(() => {
    userAuthenticate();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!modulo) {
      getActualModule(selectedModule);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!practicesStudent.length) {
      getAllPracticesStudent(getIdStudent);
    }
    // eslint-disable-next-line
  }, [getIdStudent, practicesStudent]);

  useEffect(() => {
    if (idPractica === null) {
      getPracticeId(urlidpractice);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idPractica, urlidpractice]);

  const showPagesModule1 = {
    0: "module1",
  };

  const showPagesModule2 = {
    0: "module2A",
    1: "module2B",
  };
  const showPagesModule3 = {
    0: "module3",
    1: "module1",
  };

  useEffect(() => {
    if (modulo === CORTE3) {
      changeStateMessage(true);
    }
    // eslint-disable-next-line
  }, []);
  const selectedPage = (modulo) => {
    if (modulo === CORTE1) {
      return showPagesModule1[step];
    }
    if (modulo === CORTE2) {
      return showPagesModule2[step];
    }

    if (modulo === CORTE3) {
      return showPagesModule3[step];
    }
  };

  return (
    <>
      <BackgrounContainer>
        <MainStudent>
          <ConfigPractice>
            <ProgressBar />
            {modulo !== CORTE3 && <StudentExtraInfo />}
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
