import React from "react";
import {
  CardContainer,
  CardHeader,
  CardContent,
  Info,
  InfoCard,
  ItemCard,
  MembersCard,
  CardState,
} from "./styles";
import { Bottle } from "Components/Icons/Bottle";

const CardGroup = () => {
  return (
    <CardContainer>
      <CardHeader>
        <h2>Refrescos</h2>
        <Bottle />
      </CardHeader>
      <CardContent>
        <Info>
          <InfoCard>
            <ItemCard>
              Unidades <span>60</span>
            </ItemCard>
            <ItemCard>
              Variable <span>355ml+-5</span>
            </ItemCard>
            <ItemCard>
              Atributo <span>Tapa floja</span>
            </ItemCard>
          </InfoCard>
          <MembersCard>
            <h4>Estudiantes</h4>
            <p>Andres Botero, Ángela Fernandez, Camilo Andres Jimenez</p>
          </MembersCard>
        </Info>
        <CardState>
          <small>Sin realizar</small>
          <span>x</span>
        </CardState>
      </CardContent>
    </CardContainer>
  );
};

export default CardGroup;
