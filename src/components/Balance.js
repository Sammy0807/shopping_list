import React, { useContext } from 'react';
import { Context as ShoppingContext } from '../context/shoppingContext';
export const Balance = () => {
  const {
    state: { pendingItems },
  } = useContext(ShoppingContext);
  let amounts = pendingItems.map((item) => Number.parseInt(item.amount));
  let total = amounts.reduce((a, b) => a + b, 0).toFixed(2);
  return (
    <>
      <h4>Total Cost of Your items</h4>
      <h1>${total}</h1>
    </>
  );
};
