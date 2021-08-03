import React, { useState, useEffect } from "react";
import {
  SubgroupContainer,
  SubgroupInfo,
  SubgroupHeader,
  SubgroupList,
  SubgroupItem,
  SubgroupValue,
} from "./styles";

import useStudent from "hooks/useStudent";

const StudentSubgroup = ({
  listSubgroups,
  selectedIdSubgroup,
  setSelectedIdSubgroup,
  setCounterState,
}) => {
  const { getSubgroup } = useStudent();
  const listsIdsubgroups = listSubgroups.map((list) => list.id);

  const handleClick = (subgroup) => {
    getSubgroup(subgroup);
    setSelectedIdSubgroup(subgroup.id);
    const findIndexArray = listsIdsubgroups.findIndex(
      (index) => index === subgroup.id
    );
    setCounterState(findIndexArray === 0 ? 1 : findIndexArray);
  };

  return (
    <SubgroupContainer>
      <SubgroupInfo>
        <SubgroupHeader>
          <h4>Nombre</h4>
          <h4>N° productos</h4>
        </SubgroupHeader>

        <SubgroupList>
          {listSubgroups.map((subgroup) => (
            <SubgroupItem
              selected={selectedIdSubgroup === subgroup.id}
              key={subgroup.id}
              onClick={() => handleClick(subgroup)}
            >
              {subgroup.title}
              <SubgroupValue>{subgroup.grupos?.length}</SubgroupValue>
            </SubgroupItem>
          ))}
        </SubgroupList>
      </SubgroupInfo>
    </SubgroupContainer>
  );
};

export default StudentSubgroup;
