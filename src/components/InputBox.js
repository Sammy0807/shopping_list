import React, { useState, useContext } from 'react';
import { Context as ShoppingContext } from '../context/shoppingContext';

const InputBox = () => {
  const { addItem } = useContext(ShoppingContext);
  const [item, setItem] = useState('');
  const [category, setCategoty] = useState('');
  const [quantity, setQuantity] = useState('');
  const [amount, setAmount] = useState('');
  const id = () => Number.parseInt((Math.random() * 100).toFixed(0));
  const Add = () => {
    let items = {
      id: id(),
      item,
      category: category.toUpperCase(),
      quantity,
      amount,
    };
    addItem(items);
    setItem('');
    setCategoty('');
    setQuantity('');
    setAmount('');
  };
  const onchange = (e) => {
    setItem(e);
  };
  return (
    <>
      <input
        required
        type="text"
        value={item}
        onChange={(e) => onchange(e.target.value)}
        placeholder="Add a new item to the list"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategoty(e.target.value)}
        placeholder="Category"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="How many?"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="How much does it cost?"
      />
      <button onClick={Add} className="btn">
        Create
      </button>
    </>
  );
};
export default InputBox;
