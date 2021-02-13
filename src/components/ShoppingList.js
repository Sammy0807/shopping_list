import React, { useContext, useEffect, useState } from 'react';
import { ListItem } from './ListItem';
import { CrossItem } from './crossItems';
import { Context as ShoppingContext } from '../context/shoppingContext';

const ShoppingList = () => {
  const {
    state: { pendingItems, crossedOffItems, filteredString },
    crossOff,
    sendToPending,
  } = useContext(ShoppingContext);
  const [categories, setCategories] = useState(
    Arr(pendingItems.map((e) => e.category))
  );
  const [filteredItems, setFilteredItems] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(pendingItems);
    setFilteredItems(items);
    setCategories(Arr(items.map((e) => e.category)));
  }, [items, pendingItems]);
  useEffect(() => {
    setFilteredItems(items.filter((e) => e.item.includes(filteredString)));
  }, [filteredString, items]);

  return (
    <div className="topSpacer">
      <ul className="list">
        <h4>Pending Items to be Purchased</h4>
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <div key={index}>
              <h2>{category}</h2>
              {filteredItems.map((element, index) => (
                <div key={index}>
                  {element.category === category ? (
                    <ListItem data={element} sendTo={crossOff} />
                  ) : null}
                </div>
              ))}
            </div>
          ))
        ) : (
          <h3>All items have been Purchased, add new ones?</h3>
        )}
      </ul>
      <div className="divider"></div>

      <ul className="list right">
        <h4>Crossed Off Section</h4>
        {crossedOffItems.length > 0 ? (
          crossedOffItems.map((element, index) => (
            <div key={index}>
              <CrossItem data={element} sendTo={sendToPending} />
            </div>
          ))
        ) : (
          <h3>No item has been Purchased</h3>
        )}
      </ul>
    </div>
  );
};

const Arr = (arr) => {
  let a = [];
  for (let b of arr) {
    // eslint-disable-next-line no-unused-expressions
    a.includes(b) ? null : a.push(b);
  }
  return a;
};

export default ShoppingList;
