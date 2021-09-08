import React from "react";
import {
  DashboardContainer,
  HeaderContainer,
  TitleHeader,
  ContainerButton,
} from "./styles";
import Banner from "Components/Banner";
import Button from "Components/Button";

const Dashboard = ({ children, titleHeader, textButton, onClick = {} }) => {
  return (
    <>
      <DashboardContainer>
        <HeaderContainer>
          <Banner />
          <ContainerButton>
            <TitleHeader>{titleHeader}</TitleHeader>
            {textButton && (
              <Button type="button" styleButton="secondary" onClick={onClick}>
                {textButton}
              </Button>
            )}
          </ContainerButton>
        </HeaderContainer>
        {children}
      </DashboardContainer>
    </>
  );
};

export default Dashboard;