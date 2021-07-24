import { Title, Text, FeatureItem, Item } from "./styles";
import StudentSubgroup from "Components/StudentSubgroup";

export const Modulo = (modulo) => (
  <>
    {(modulo === "modulo1" || modulo === "modulo3") && (
      <>
        <Title>Inspección del producto</Title>
        <Text>
          Observa cada uno de los productos y anota sus características en el
          formato.
        </Text>
      </>
    )}
    {modulo === "modulo2" && (
      <>
        <Title>Subgrupo</Title>
        <StudentSubgroup />
      </>
    )}
  </>
);

export const TypeOfList = (features = [], modulo) => {
  return features.map((feature, id) => (
    <FeatureItem key={id}>
      <Item>{feature.name}</Item>
      {modulo !== "modulo2" && <Item>{feature.value}</Item>}
    </FeatureItem>
  ));
};
