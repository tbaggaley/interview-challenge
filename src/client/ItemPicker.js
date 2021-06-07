import React, { useState } from "react";
import { useQueryItems } from "./useQueryItems";
import Item from "./Item";

const SearchBar = ({ value, handleChange }) => (
  <div className="filters">
    <input
      className="form-control"
      placeholder="Name"
      value={value}
      onChange={handleChange}
    />
  </div>
);

const ItemPicker = ({ onAddItem: handleAddItem }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, data: items, error } = useQueryItems(searchQuery);
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  return (
    <>
      <SearchBar handleChange={handleSearchChange} value={searchQuery} />
      <ul className="item-picker">
        {loading && <p>Loading...</p>}
        {error && <p>Error loading items</p>}
        {items &&
          items.map((item) => (
            <Item
              key={item.id}
              item={item}
              actionText="+"
              onAction={handleAddItem}
            />
          ))}
        {!loading && !error && !items?.length && (
          <p>No items were found matching your search.</p>
        )}
      </ul>
    </>
  );
};

export default ItemPicker;
