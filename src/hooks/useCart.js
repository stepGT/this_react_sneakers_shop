import React from "react";
import AppContext from "../context";

export const useCart = () => {
  const { cartSneakers, setCartSneakers } = React.useContext(AppContext);
  const totalPriceCart = cartSneakers.reduce((sum, obj) => obj.price + sum, 0);
  return {
    cartSneakers,
    setCartSneakers,
    totalPriceCart,
  };
};
