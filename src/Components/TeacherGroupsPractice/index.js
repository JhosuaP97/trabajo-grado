import React, { useEffect } from "react";
import Dashboard from "Components/Dashboard";
import Navbar from "Components/Navbar";
import CardGroup from "Components/CardGroup";
import useTeacher from "hooks/useTeacher";
import { useParams, useLocation } from "react-router-dom";

const TeacherGroupsPractice = () => {
  const { pathname } = useLocation();

  let practiceSelected = pathname.split("/")[3];
  const { idPractica } = useParams();
  const {
    groupspractices,
    getGroupsPractice1,
    getGroupsPractice2,
    getGroupsPractice3,
  } = useTeacher();

  useEffect(() => {
    if (practiceSelected === "practice1") {
      getGroupsPractice1(Number(idPractica));
    }

    if (practiceSelected === "practice2") {
      getGroupsPractice2(Number(idPractica));
    }

    if (practiceSelected === "practice3") {
      getGroupsPractice3(Number(idPractica));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <Dashboard titleHeader="Información de la práctica por grupos">
        {groupspractices &&
          groupspractices.map((grupo, index) => (
            <CardGroup group={grupo} key={index} />
          ))}
      </Dashboard>
    </>
  );
};

export default TeacherGroupsPractice;
