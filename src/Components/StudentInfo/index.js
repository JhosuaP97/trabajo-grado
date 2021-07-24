import React from "react";
import Button from "Components/Button";
import {
  Information,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Title,
  Text,
  FeatureList,
  ProductsNumber,
  Item,
  ExamineNumber,
} from "./styles";
import { Modulo, TypeOfList } from "./SectionModules";
import StudentReviewedProducts from "Components/StudentReviewedProducts";

const StudentInfo = ({
  features = [],
  countReviewed,
  totalReviewed,
  rejected,
  checked,
}) => {
  const isTotalReviewed = countReviewed === totalReviewed;

  const moduleName = "modulo1";

  return (
    <Information>
      <Section1>{Modulo(moduleName)}</Section1>
      {moduleName === "modulo2" && (
        <Section3>
          <Title>Instrucciones</Title>
          <Text>
            Observa cada uno de los productos y anota sus características en el
            formato.
          </Text>
        </Section3>
      )}
      <Section2>
        <Title>Características deseadas</Title>
        <FeatureList>{TypeOfList(features, moduleName)}</FeatureList>
      </Section2>

      <Section4>
        <Title>Número de productos</Title>
        {moduleName === "modulo3" ? (
          <StudentReviewedProducts
            countReviewed={countReviewed}
            totalReviewed={totalReviewed}
            rejected={rejected}
            checked={checked}
          />
        ) : (
          <ProductsNumber>
            <Item>Revisados:</Item>
            <ExamineNumber>{`${countReviewed} de ${totalReviewed}`}</ExamineNumber>
          </ProductsNumber>
        )}
      </Section4>
      <Section5>
        <Button type="button" styleButton="primary" disabled={!isTotalReviewed}>
          Finalizar práctica
        </Button>
      </Section5>
    </Information>
  );
};

export default StudentInfo;
