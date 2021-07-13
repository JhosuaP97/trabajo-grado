import React from "react";
import Button from "Components/Button";
import {
  Information,
  Indications,
  Title,
  Text,
  FeatureList,
  FeatureItem,
  Feedback,
  ProductsNumber,
  Item,
  ExamineNumber,
} from "./styles";

const StudentInfo = ({ features = [], countReviewed, totalReviewed }) => {
  const isTotalReviewed = countReviewed === totalReviewed;
  return (
    <Information>
      <Indications>
        <Title>Revisión del producto</Title>
        <Text>
          Observa cada uno de los productos y anota sus características en el
          formato.
        </Text>
      </Indications>
      <FeatureList>
        <Title>Características deseadas</Title>
        {features.map((feature, id) => (
          <FeatureItem key={id}>
            <Item>{feature.name}</Item>
            <Item>{feature.value}</Item>
          </FeatureItem>
        ))}
      </FeatureList>
      <Feedback>
        <Title>Número de productos</Title>
        <ProductsNumber>
          <Item>Revisados:</Item>
          <ExamineNumber>{`${countReviewed} de ${totalReviewed}`}</ExamineNumber>
        </ProductsNumber>
        <Button type="button" styleButton="primary" disabled={!isTotalReviewed}>
          Finalizar práctica
        </Button>
      </Feedback>
    </Information>
  );
};

export default StudentInfo;
