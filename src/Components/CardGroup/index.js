import { WrapperCardGroup, CardGroupHeader, CardGroupList } from "./styles";
import { Bottle } from "Components/Icons/Bottle";
import CardGroupItem from "Components/CardGroupItem";

const CardGroup = ({ data }) => {
  return (
    <WrapperCardGroup>
      <CardGroupHeader>
        <h2>Refrescos</h2>
        <Bottle />
      </CardGroupHeader>
      <CardGroupList>
        {data.map(() => (
          <CardGroupItem />
        ))}
      </CardGroupList>
    </WrapperCardGroup>
  );
};

export default CardGroup;
