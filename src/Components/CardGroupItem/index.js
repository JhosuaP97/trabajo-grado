import React from "react";
import {
  CardContainer,
  Info,
  InfoCard,
  ItemCard,
  MembersCard,
  CardState,
  ItemCardRow,
} from "./styles";

const CardGroupItem = ({ products }) => {
  const { estudiantes, info, infoExtra, infoSubgs } = products;

  const titles = info && Object.entries(info);

  const renderTitles = () =>
    titles.map(([title, value]) => {
      return (
        <ItemCard>
          {title}: <span>{value}</span>
        </ItemCard>
      );
    });

  const renderTitleSubgroup = () => (
    <ItemCardRow>
      <div>
        Total subgrupos : <span>{infoSubgs.subgrupos}</span>
      </div>
      <div>
        Tamaño subg : <span>{infoSubgs.cantidadSubgrupo}</span>
      </div>
    </ItemCardRow>
  );

  const renderInfoExtra = () => (
    <ItemCardRow>
      <div>
        Tamaño lote : <span>{infoExtra.tamanioLote}</span>
      </div>
      {infoExtra.metodos && (
        <div>
          Métodos : <span>{infoExtra.metodos}</span>
        </div>
      )}
    </ItemCardRow>
  );

  return (
    <CardContainer>
      <Info>
        <InfoCard>
          {infoSubgs && renderTitleSubgroup()}
          {infoExtra && renderInfoExtra()}
          {renderTitles()}
        </InfoCard>
        <MembersCard>
          <h4>Estudiantes</h4>
          <p>{estudiantes}</p>
        </MembersCard>
      </Info>

      <CardState>
        <small>Sin realizar</small>
        <span>x</span>
      </CardState>
    </CardContainer>
  );
};

export default CardGroupItem;
