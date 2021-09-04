import CardGroup from "Components/CardGroup";
import Dashboard from "Components/Dashboard";
import Navbar from "Components/Navbar";
import React from "react";

const StudentDashboardPractices = () => {
  const banner = {
    title: "Curso 51",
    practice: "Siete herramientas",
    module: "Corte 1",
    description:
      "Observa cada uno de los productos y anota suscaracterísticas en el formato",
    date: "1/08/2021",
  };
  return (
    <>
      <Navbar />
      <Dashboard titleHeader="Practicas asignadas">
        {/* {[1].map(() => {
        const data = [1, 2, 3, 4, 5, 6];
        return <CardGroup data={data} />;
      })} */}
      </Dashboard>
    </>
  );
};

export default StudentDashboardPractices;
