import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router";
import useTeacher from "hooks/useTeacher";
import character from "assets/character_images/character.png";
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
  }, []);

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
            <ShowMessageToCreate
              img={character}
              text="Parece que todavía no has publicado ninguna práctica"
            />
          ) : (
            practices.map(({ idCorteP, idPractica, nombrePractica }) => (
              <CardPractice
                key={idPractica}
                idPractica={idPractica}
                idCurso={idCurso}
                idCorte={idCorteP}
                nombrePractica={nombrePractica}
              />
            ))
          )}
        </TeacherContainerPractices>
      </Dashboard>
    </>
  );
};

export default TeacherDashboardPractices;
