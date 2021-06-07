import React, { useState } from "react";

import Header from "./Header";
import Item from "./Item";
import ItemPicker from "./ItemPicker";

import "./App.css";

const App = () => {
  const [menuItems, setMenuItems] = useState(new Map());

  const handleAddItem = (item) =>
    setMenuItems((menuItems) => {
      const newMenuItems = new Map(menuItems);
      newMenuItems.set(item.id, {
        ...item,
        quantity: (menuItems.get(item.id)?.quantity || 0) + 1,
      });
      return newMenuItems;
    });

  const handleDeleteItem = (item) =>
    setMenuItems((menuItems) => {
      const newMenuItems = new Map(menuItems);
      newMenuItems.delete(item.id);
      return newMenuItems;
    });

  const handleQuantityChange = (item, value) =>
    setMenuItems((menuItems) => {
      const newMenuItems = new Map(menuItems);
      newMenuItems.set(item.id, {
        ...menuItems.get(item.id),
        quantity: parseInt(value, 10),
      });
      return newMenuItems;
    });

  return (
    <div className="wrapper">
      <Header menuItems={menuItems} />
      <div className="container menu-builder">
        <div className="row">
          <div className="col-4">
            <ItemPicker onAddItem={handleAddItem} />
          </div>
          <div className="col-8">
            <h2>Menu preview</h2>
            <ul className="menu-preview">
              {!menuItems.size && (
                <p>
                  Nothing added yet. Choose items from the list to build your
                  menu.
                </p>
              )}
              {[...menuItems.values()].map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  actionText="x"
                  onAction={handleDeleteItem}
                  onQuantityChange={handleQuantityChange}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
