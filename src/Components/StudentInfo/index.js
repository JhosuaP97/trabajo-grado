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

import useStudent from "hooks/useStudent";
import useProduct from "hooks/useProduct";

const StudentInfo = () => {
  const {
    modulo,
    typeOfGraphic,
    features,
    products,
    selectedSubgroup,
    arraySubgroupSelectedByGraphic,
    getSubgroup,
  } = useStudent();
  const {
    reviewed,
    productIndex,
    handleProductIndex,
    isCounterEmpty,
    handleMessageActive,
  } = useProduct();

  const listSubgs =
    arraySubgroupSelectedByGraphic &&
    arraySubgroupSelectedByGraphic.map((subgroup) => subgroup);

  const totalSubgroups = listSubgs.reduce(
    (total, item) => total + item.grupos.length,
    0
  );

  const IstotalSubgroupsCountEqualtoSubgroupReview =
    reviewed.length === totalSubgroups;

  const totalSelectedSubgroup =
    selectedSubgroup === null ? 0 : selectedSubgroup.grupos.length;
  const reviews = modulo === CORTE2 ? isCounterEmpty() : reviewed.length;
  const totalReviews =
    modulo === CORTE2 ? totalSelectedSubgroup : products.length;
  const isTotalReviewed = reviews !== 0 && reviews === totalReviews;

  // const isCheckedAndRejectedEqualTotalReviewed =
  //   checked + rejected === totalReviewed;

  const ListFeatures = (features = []) => {
    return features.map((feature, id) => (
      <FeatureItem key={id}>
        <Item>{feature.name}</Item>
        <Item>{feature.value}</Item>
      </FeatureItem>
    ));
  };

  function handleNextGroup() {
    handleProductIndex(
      productIndex === listSubgs.length - 1 ? productIndex : productIndex + 1
    );
    getSubgroup(listSubgs[productIndex]);
  }

  function finishPractice() {
    console.log("terminaste :D");
  }

  return (
    <Information>
      {/* Section 1 */}
      <Section1>
        {(modulo === CORTE1 || modulo === CORTE3) && (
          <>
            <Title>Inspección del producto</Title>
            <Text>
              Observa cada uno de los productos y anota sus características en
              el formato.
            </Text>
          </>
        )}
        {modulo === CORTE2 && (
          <>
            <Title>Subgrupo</Title>
            <StudentSubgroup />
          </>
        )}
      </Section1>

      {/* Section 2 */}
      {modulo === CORTE2 && (
        <Section2>
          <Title>Instrucciones</Title>
          <Text>
            Observa cada uno de los productos y anota sus características en el
            formato.
          </Text>
        </Section2>
      )}

      {/* Section 3 */}
      <Section3>
        {(modulo === CORTE1 || modulo === CORTE3) && (
          <>
            <Title>Características deseadas</Title>
            <FeatureList>{ListFeatures(features, modulo)}</FeatureList>
          </>
        )}
        {modulo === CORTE2 &&
          (typeOfGraphic === TYPEOF_GRAPHICS_PRODUCT.random ||
            typeOfGraphic === TYPEOF_GRAPHICS_PRODUCT.constant) && (
            <>
              <Title>Características no deseadas</Title>
              <FeatureList>{ListFeatures(features, modulo)}</FeatureList>
            </>
          )}

        {modulo === CORTE2 &&
          typeOfGraphic === TYPEOF_GRAPHICS_PRODUCT.variable && (
            <>
              <Title>Tablas de constantes para gráficos de control</Title>
              <Button type="button" styleButton="secondary">
                Descargar tablas
              </Button>
            </>
          )}
      </Section3>

      {/* Section 4 */}
      <Section4>
        <Title>Número de productos</Title>
        {modulo === CORTE3 ? (
          <StudentReviewedProducts />
        ) : (
          <ProductsNumber>
            <Item>Revisados:</Item>
            <ExamineNumber>{`${reviews} de ${totalReviews}`}</ExamineNumber>
          </ProductsNumber>
        )}
      </Section4>

      {/* Section 5 */}
      <Section5>
        {(modulo === CORTE1 || modulo === CORTE3) && (
          <Button
            type="button"
            styleButton="primary"
            onClick={handleMessageActive}
            disabled={!isTotalReviewed}
          >
            Continuar práctica
          </Button>
        )}
        {modulo === CORTE2 && (
          <Button
            type="button"
            styleButton="primary"
            onClick={
              IstotalSubgroupsCountEqualtoSubgroupReview
                ? handleMessageActive
                : handleNextGroup
            }
            disabled={!isTotalReviewed}
          >
            Siguiente Subgrupo
          </Button>
        )}
      </Section5>
    </Information>
  );
};

export default StudentInfo;
