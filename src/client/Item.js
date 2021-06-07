import React from "react";
import PropTypes from "prop-types";

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

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    dietaries: PropTypes.arrayOf(PropTypes.string).isRequired,
    quantity: PropTypes.number,
    name: PropTypes.string.isRequired,
  }),
  actionText: PropTypes.string,
  onAction: PropTypes.func,
  onQuantityChange: PropTypes.func,
};

export default Item;
