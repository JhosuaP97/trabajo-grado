import React from "react";
import {
  DashboardContainer,
  HeaderContainer,
  TitleHeader,
  ListGroups,
} from "./styles";
import Banner from "Components/Banner";
import CardGroup from "Components/CardGroup";
const TeacherDashboard = () => {
  return (
    <DashboardContainer>
      <HeaderContainer>
        <Banner />
        <TitleHeader>Información de la práctica por grupos</TitleHeader>
      </HeaderContainer>

      <ListGroups>
        {[1, 2, 3].map(() => (
          <CardGroup />
        ))}
      </ListGroups>
    </DashboardContainer>
  );
};

export default TeacherDashboard;
