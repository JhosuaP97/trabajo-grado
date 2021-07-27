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
import {
  CORTE1,
  CORTE2,
  CORTE3,
  TYPEOF_GRAPHICS_PRODUCT,
} from "constants/index";

const StudentInfo = ({
  currentModule,
  features = [],
  countReviewed,
  totalReviewed,
  rejected,
  checked,
  typeOfProductGraphics,
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

  return (
    <Information>
      <Section1>
        {(currentModule === CORTE1 || currentModule === CORTE3) && (
          <>
            <Title>Inspección del producto</Title>
            <Text>
              Observa cada uno de los productos y anota sus características en
              el formato.
            </Text>
          </>
        )}
        {currentModule === CORTE2 && (
          <>
            <Title>Subgrupo</Title>
            <StudentSubgroup />
          </>
        )}
      </Section1>

      {currentModule === CORTE2 && (
        <Section2>
          <Title>Instrucciones</Title>
          <Text>
            Observa cada uno de los productos y anota sus características en el
            formato.
          </Text>
        </Section2>
      )}

      <Section3>
        {(currentModule === CORTE1 || currentModule === CORTE3) && (
          <>
            <Title>Características deseadas</Title>
            <FeatureList>{ListFeatures(features, currentModule)}</FeatureList>
          </>
        )}
        {currentModule === CORTE2 &&
          (typeOfProductGraphics === TYPEOF_GRAPHICS_PRODUCT.random ||
            typeOfProductGraphics === TYPEOF_GRAPHICS_PRODUCT.constant) && (
            <>
              <Title>Características no deseadas</Title>
              <FeatureList>{ListFeatures(features, currentModule)}</FeatureList>
            </>
          )}

        {currentModule === CORTE2 &&
          typeOfProductGraphics === TYPEOF_GRAPHICS_PRODUCT.variable && (
            <>
              <Title>Tablas de constantes para gráficos de control</Title>
              <Button type="button" styleButton="secondary">
                Descargar tablas
              </Button>
            </>
          )}
      </Section3>

      <Section4>
        <Title>Número de productos</Title>
        {currentModule === CORTE3 ? (
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
