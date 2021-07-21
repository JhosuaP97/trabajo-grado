import React from "react";
import {
  SubgroupContainer,
  SubgroupInfo,
  SubgroupHeader,
  SubgroupList,
  SubgroupItem,
  SubgroupValue,
} from "./styles";
const StudentSubgroup = () => {
  return (
    <SubgroupContainer>
      <h3>Subgrupos</h3>
      <SubgroupInfo>
        <SubgroupHeader>
          <h4>Nombre</h4>
          <h4>N° productos</h4>
        </SubgroupHeader>

        <SubgroupList>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((subgroup) => (
            <SubgroupItem key={subgroup}>
              Subgrupo {subgroup} <SubgroupValue>{subgroup}</SubgroupValue>
            </SubgroupItem>
          ))}
        </SubgroupList>
      </SubgroupInfo>
    </SubgroupContainer>
  );
};

export default StudentSubgroup;
