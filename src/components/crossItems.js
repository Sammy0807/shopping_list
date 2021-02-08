import React from 'react';

export const CrossItem = ({ data, sendTo }) => {
  return (
    <li className="plus">
      {data.item}

      <span>${Math.abs(data.amount)}</span>
      <button onClick={() => sendTo(data)} className="delete-btn">
        x
      </button>
    </li>
  );
};
