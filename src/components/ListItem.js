import React, { useContext } from 'react';

import EditItem from './Edit';
import { ModalContext } from './modal/modalContext';

export const ListItem = ({ data, sendTo }) => {
  const { handleModal } = useContext(ModalContext);
  return (
    <li className="plus">
      {data.item}

      <span>${Math.abs(data.amount)}</span>
      <button onClick={() => sendTo(data)} className="delete-btn">
        x
      </button>
      <button
        onClick={() => handleModal(<EditItem data={data} />)}
        className="edit-btn"
      >
        Edit
      </button>
    </li>
  );
};
