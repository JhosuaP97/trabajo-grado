import React, { useEffect, useCallback } from "react";
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
  CONSTANT,
  CORTE1,
  CORTE2,
  CORTE3,
  RANDOM,
  VARIABLE,
} from "constants/index";

import useStudent from "hooks/useStudent";
import useProduct from "hooks/useProduct";
import useAuth from "hooks/useAuth";
import useProgressBar from "hooks/useProgressBar";

const StudentInfo = () => {
  const { user } = useAuth();
  const {
    modulo,
    typeOfGraphic,
    features,
    products,
    selectedSubgroup,
    arraySubgroupSelectedByGraphic,
    getSubgroup,
    practicesStudent,
    idPractica,
    getFeaturesProductC1,
  } = useStudent();
  const {
    reviewed,
    productIndex,
    handleProductIndex,
    isCounterEmpty,
    handleMessageActive,
    counterAccepted,
    counterRejected,
  } = useProduct();

  const { handleStep } = useProgressBar();

  useEffect(() => {
    getFeaturesProductC1(idPractica, user?.estudiante.idEstudiante);
    // eslint-disable-next-line
  }, [idPractica, user?.estudiante.idEstudiante]);

  const getDescriptionPractice = practicesStudent
    .filter((practice) => practice.id === idPractica)
    .map(({ descripcion }) => descripcion);

  const listSubgs =
    arraySubgroupSelectedByGraphic &&
    arraySubgroupSelectedByGraphic?.map((subgroup) => subgroup);

  const totalSubgroups = listSubgs?.reduce(
    (total, item) => total + item.grupos.length,
    0
  );

  const IstotalSubgroupsCountEqualtoSubgroupReview =
    reviewed.length === totalSubgroups;

  const totalSelectedSubgroup =
    selectedSubgroup === null ? 0 : selectedSubgroup.grupos.length;

  const reviews = modulo === CORTE2 ? isCounterEmpty() : reviewed.length;

  const totalReviews =
    modulo === CORTE2 ? totalSelectedSubgroup : products?.products?.length;

  const isTotalReviewed = reviews !== 0 && reviews === totalReviews;

  const isAccpetedAndRejectedEqualTotalReviewed =
    counterAccepted + counterRejected === totalReviews;

  const ListFeatures = () => {
    return features.map((feature, id) => {
      return (
        <FeatureItem key={id}>
          <Item>{feature.name}</Item>
          <Item>{feature.value}</Item>
        </FeatureItem>
      );
    });
  };

  const handleNextGroup = useCallback(() => {
    handleProductIndex(
      productIndex === listSubgs.length - 1 ? productIndex : productIndex + 1
    );
    getSubgroup(listSubgs[productIndex]);
  }, [listSubgs, productIndex, getSubgroup, handleProductIndex]);

  function finishPractice1() {
    handleMessageActive();
    handleStep();
  }

  return (
    <Information>
      {/* Section 1 */}
      <Section1>
        {(modulo === CORTE1 || modulo === CORTE3) && (
          <>
            <Title>Inspección del producto</Title>
            <Text>{getDescriptionPractice[0]}</Text>
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
          <Text>{getDescriptionPractice[0]}</Text>
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
          (typeOfGraphic === RANDOM || typeOfGraphic === CONSTANT) && (
            <>
              <Title>Características no deseadas</Title>
              <FeatureList>{ListFeatures(features, modulo)}</FeatureList>
            </>
          )}

        {modulo === CORTE2 && typeOfGraphic === VARIABLE && (
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
            onClick={finishPractice1}
            disabled={
              modulo === CORTE3
                ? !isAccpetedAndRejectedEqualTotalReviewed
                : !isTotalReviewed
            }
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

export default React.memo(StudentInfo);
