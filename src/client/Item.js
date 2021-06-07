import React from "react";

const Item = ({
  item,
  item: { name, dietaries, quantity, id },
  actionText,
  onAction,
  onQuantityChange,
}) => (
  <li className="item" data-testid={`item-${id}`}>
    <h2>{name}</h2>
    {quantity && (
      <label>
        Quantity:
        <input
          type="number"
          className="quantity"
          min="1"
          value={quantity}
          onChange={(e) => onQuantityChange(item, e.target.value)}
        />
      </label>
    )}
    <p>
      {dietaries.map((dietary) => (
        <span className="dietary" key={dietary}>
          {dietary}
        </span>
      ))}
    </p>
    {onAction && (
      <button className="item-action" onClick={() => onAction(item)}>
        {actionText}
      </button>
    )}
  </li>
);

export default Item;
