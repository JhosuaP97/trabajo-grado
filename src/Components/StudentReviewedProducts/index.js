import React from "react";
import { List, LisItem, ListValue } from "./styles";
const StudentReviewedProducts = ({
  countReviewed,
  totalReviewed,
  checked = 0,
  rejected = 0,
}) => {
  return (
    <List>
      <LisItem>
        Revisados:
        <ListValue>
          {countReviewed} de {totalReviewed}
        </ListValue>
      </LisItem>
      <LisItem>
        Aceptados:<ListValue>{checked}</ListValue>
      </LisItem>
      <LisItem>
        Rechazados:<ListValue>{rejected}</ListValue>
      </LisItem>
    </List>
  );
};

export default StudentReviewedProducts;
