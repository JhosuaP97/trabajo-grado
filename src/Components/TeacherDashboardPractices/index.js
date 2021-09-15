import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router";
import useTeacher from "hooks/useTeacher";
import Dashboard from "Components/Dashboard";
import Navbar from "Components/Navbar";
import ShowMessageToCreate from "Components/ShowMessageToCreate";
import CardPractice from "Components/CardPractice";
import { TeacherContainerPractices } from "./styles";

const TeacherDashboardPractices = () => {
  const { practices, getAllPractices } = useTeacher();
  const { idCurso } = useParams();
  let history = useHistory();

  const handleCreatePractice = () => history.push(`${idCurso}/create-practice`);

  useEffect(() => {
    getAllPractices(Number(idCurso));
  }, [idCurso, getAllPractices]);

  return (
    <>
      <Navbar />
      <Dashboard
        titleHeader="Practicas"
        textButton="Crear práctica"
        onClick={handleCreatePractice}
      >
        <TeacherContainerPractices practices={practices}>
          {!practices.length ? (
            <ShowMessageToCreate text="Parece que todavía no has publicado ninguna práctica" />
          ) : (
            practices.map((practica) => (
              <CardPractice
                key={practica.idPractica}
                practica={practica}
                idCurso={idCurso}
              />
            ))
          )}
        </TeacherContainerPractices>
      </Dashboard>
    </>
  );
};

export default TeacherDashboardPractices;
