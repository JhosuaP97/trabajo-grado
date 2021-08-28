import React from "react";
import { DashboardContainer, HeaderContainer, TitleHeader } from "./styles";
import Banner from "Components/Banner";

const Dashboard = ({ children, banner, titleHeader }) => {
  return (
    <>
      <DashboardContainer>
        <HeaderContainer>
          <Banner banner={banner} />
          <TitleHeader>{titleHeader}</TitleHeader>
        </HeaderContainer>
        {children}
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
