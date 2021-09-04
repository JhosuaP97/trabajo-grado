import { WrapperCardGroup, CardGroupHeader, CardGroupList } from "./styles";
import { Bottle } from "Icons/Bottle";
import CardGroupItem from "Components/CardGroupItem";

const CardGroup = ({ group }) => {
  const { nombreProducto, productos } = group;

  return (
    <WrapperCardGroup>
      <CardGroupHeader>
        <h2>{nombreProducto}</h2>
        <Bottle />
      </CardGroupHeader>
      <CardGroupList key={group.idGrupo}>
        {productos.map((product, index) => (
          <CardGroupItem products={product} key={index} />
        ))}
      </CardGroupList>
    </WrapperCardGroup>
  );
};

export default CardGroup;
