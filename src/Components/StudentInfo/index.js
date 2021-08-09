import React, { useState } from "react";
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

const StudentInfo = ({
  countReviewed,
  totalReviewed,
  rejected,
  checked,
  selectedIdSubgroup,
  setSelectedIdSubgroup,
  numberOfReviewed,
  setIsMessageActive,
  nextStep,
}) => {
  const { modulo, typeOfGraphic, features, subgroups, getSubgroup } =
    useStudent();
  const [counterState, setCounterState] = useState(1);
  const isTotalReviewed = countReviewed === totalReviewed;
  const listSubgroups = subgroups.map((subgroup) => subgroup);

  const totalCounter = listSubgroups.reduce(
    (acc, item) => (acc += item.grupos.length),
    0
  );

  const isTotalChecked = numberOfReviewed === totalCounter;

  const isCheckedAndRejectedEqualTotalReviewed =
    checked + rejected === totalReviewed;

  const ListFeatures = (features = []) => {
    return features.map((feature, id) => (
      <FeatureItem key={id}>
        <Item>{feature.name}</Item>
        <Item>{feature.value}</Item>
      </FeatureItem>
    ));
  };

  function handleNextGroup() {
    if (isTotalChecked) {
      finishPractice();
    }
    setCounterState(
      counterState === listSubgroups.length - 1
        ? counterState
        : counterState + 1
    );
    setSelectedIdSubgroup(listSubgroups[counterState].id);
    getSubgroup(listSubgroups[counterState]);
  }

  function finishPractice() {
    console.log("terminaste :D");
  }

  function handleActiveMessage() {
    setIsMessageActive(true);
    nextStep();
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
            <StudentSubgroup
              listSubgroups={listSubgroups}
              selectedIdSubgroup={selectedIdSubgroup}
              setSelectedIdSubgroup={setSelectedIdSubgroup}
              setCounterState={setCounterState}
            />
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

      {/* Section 5 */}
      <Section5>
        {(modulo === CORTE1 || modulo === CORTE3) && (
          <Button
            type="button"
            styleButton="primary"
            onClick={handleActiveMessage}
            disabled={
              modulo === CORTE1
                ? !isTotalReviewed
                : !isCheckedAndRejectedEqualTotalReviewed
            }
          >
            Continuar práctica
          </Button>
        )}
        {modulo === CORTE2 && (
          <Button
            type="button"
            styleButton="primary"
            onClick={handleNextGroup}
            disabled={!isTotalReviewed}
          >
            {isTotalChecked ? `Finalizar práctica` : `Siguiente Subgrupo`}
          </Button>
        )}
      </Section5>
    </Information>
  );
};

export default StudentInfo;
