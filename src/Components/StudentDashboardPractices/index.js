import React, { useEffect } from "react";
import Dashboard from "Components/Dashboard";
import {
  StudentPracticesContainer,
  CardContainer,
  BackgrounImage,
  CardInfo,
  StateCard,
  ActionButtonContainer,
} from "./styles";
import Button from "Components/Button";
import useStudent from "hooks/useStudent";
import useAuth from "hooks/useAuth";
import { useHistory, useLocation } from "react-router";
import { ICONS_PRODUCTS } from "constants/index";
import useProduct from "hooks/useProduct";

const StudentDashboardPractices = () => {
  const { user, userAuthenticate } = useAuth();
  const {
    practicesStudent,
    getAllPracticesStudent,
    createInspectionProductC1,
    createInspectionProductC2,
    getPracticeId,
    modulo,
    getActualModule,
  } = useStudent();
  const { isMessageActive, changeStateMessage } = useProduct();
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    userAuthenticate();
  }, []);

  useEffect(() => {
    if (modulo) {
      getActualModule(null);
    }

    if (isMessageActive) {
      changeStateMessage(false);
    }

    getAllPracticesStudent(user?.estudiante?.idEstudiante);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleRedirectoPractice = (idPractica, idCorte) => {
    getPracticeId(idPractica);
    if (idCorte === 1) {
      createInspectionProductC1(idPractica, user?.estudiante?.idEstudiante);
      history.push(`${pathname}/dashboard/${idPractica}/corte-${idCorte}`);
    }
    if (idCorte === 2) {
      createInspectionProductC2(idPractica, user?.estudiante?.idEstudiante);
      history.push(`${pathname}/dashboard/${idPractica}/corte-${idCorte}`);
    }
    if (idCorte === 3) {
      // changeStateMessage(true);
      history.push(`${pathname}/dashboard/${idPractica}/corte-${idCorte}`);
    }
  };

  const handleRedirectoResults = (idPractica, idCorte) => {
    getPracticeId(idPractica);
    if (idCorte === 1) {
      changeStateMessage(true);
      history.push(`${pathname}/dashboard/${idPractica}/corte-${idCorte}`);
    }
  };

  return (
    <Dashboard titleHeader="Practicas asignadas">
      <StudentPracticesContainer practicesStudent={practicesStudent}>
        {practicesStudent.length > 0 &&
          practicesStudent.map(
            ({
              id,
              nombrePractica,
              nombreProducto,
              fecha,
              estado,
              idCorte,
            }) => (
              <CardContainer
                onClick={() => {
                  estado === "Realizada"
                    ? handleRedirectoResults(id, idCorte)
                    : handleRedirectoPractice(id, idCorte);
                }}
                key={id}
              >
                <BackgrounImage>
                  {ICONS_PRODUCTS[nombreProducto]}
                </BackgrounImage>
                <CardInfo>
                  <h1>{nombrePractica}</h1>
                  <p>Producto: {nombreProducto}</p>
                  <p>F. Publicación: {fecha}</p>
                  <StateCard estado={estado}>{estado}</StateCard>
                  <ActionButtonContainer>
                    <Button type="button" styleButton="primary">
                      {estado === "Realizada"
                        ? "Ver resultados"
                        : "Iniciar práctica"}
                    </Button>
                  </ActionButtonContainer>
                </CardInfo>
              </CardContainer>
            )
          )}
      </StudentPracticesContainer>
    </Dashboard>
  );
};

export default StudentDashboardPractices;
