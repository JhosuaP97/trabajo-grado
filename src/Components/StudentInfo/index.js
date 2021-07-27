import React from "react";
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
  FeatureItem,
  ProductsNumber,
  Item,
  ExamineNumber,
} from "./styles";
import Button from "Components/Button";
import StudentSubgroup from "Components/StudentSubgroup";
import StudentReviewedProducts from "Components/StudentReviewedProducts";

const StudentInfo = ({
  currentModule,
  features = [],
  countReviewed,
  totalReviewed,
  rejected,
  checked,
}) => {
  const isTotalReviewed = countReviewed === totalReviewed;

  const ListFeatures = (features = [], modulo) => {
    return features.map((feature, id) => (
      <FeatureItem key={id}>
        <Item>{feature.name}</Item>
        <Item>{feature.value}</Item>
      </FeatureItem>
    ));
  };

  const typeOfPrductGraphics = {
    random: "random",
    constant: "constant",
    variable: "variable",
  };

  let productTypeSelected = typeOfPrductGraphics["variable"];
  return (
    <Information>
      <Section1>
        {(currentModule === "Corte 1" || currentModule === "Corte 3") && (
          <>
            <Title>Inspección del producto</Title>
            <Text>
              Observa cada uno de los productos y anota sus características en
              el formato.
            </Text>
          </>
        )}
        {currentModule === "Corte 2" && (
          <>
            <Title>Subgrupo</Title>
            <StudentSubgroup />
          </>
        )}
      </Section1>

      {currentModule === "Corte 2" && (
        <Section3>
          <Title>Instrucciones</Title>
          <Text>
            Observa cada uno de los productos y anota sus características en el
            formato.
          </Text>
        </Section3>
      )}

      <Section2>
        {(currentModule === "Corte 1" || currentModule === "Corte 3") && (
          <>
            <Title>Características deseadas</Title>
            <FeatureList>{ListFeatures(features, currentModule)}</FeatureList>
          </>
        )}
        {currentModule === "Corte 2" &&
          (productTypeSelected === "random" ||
            productTypeSelected === "constant") && (
            <>
              <Title>Características no deseadas</Title>
              <FeatureList>{ListFeatures(features, currentModule)}</FeatureList>
            </>
          )}

        {currentModule === "Corte 2" && productTypeSelected === "variable" && (
          <>
            <Title>Tablas de constantes para gráficos de control</Title>
            <Button type="button" styleButton="secondary">
              Descargar tablas
            </Button>
          </>
        )}
      </Section2>

      <Section4>
        <Title>Número de productos</Title>
        {currentModule === "Corte 3" ? (
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
          Siguiente Subgrupo
        </Button>
      </Section5>
    </Information>
  );
};

export default StudentInfo;
