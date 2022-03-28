import React from "react";
import { Badge } from "@material-ui/core";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <Badge badgeContent={2} color= "secondary">
      <FaShoppingCart />
    </Badge>
  );
};

export default CartWidget;