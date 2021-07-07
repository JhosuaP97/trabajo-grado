import React from "react";
import { DashboardContainer, HeaderContainer, TitleHeader } from "./styles";
import Banner from "Components/Banner";
import CardGroup from "Components/CardGroup";

const TeacherDashboard = () => {
  return (
    <>
      <DashboardContainer>
        <HeaderContainer>
          <Banner />
          <TitleHeader>Información de la práctica por grupos</TitleHeader>
        </HeaderContainer>

        {[1].map(() => {
          const data = [1, 2, 3, 4, 5, 6];
          return <CardGroup data={data} />;
        })}
      </DashboardContainer>
    </>
  );
};

export default TeacherDashboard;
