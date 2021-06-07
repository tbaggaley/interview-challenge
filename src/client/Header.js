import React, { useMemo } from "react";

const Header = ({ menuItems }) => {
  const [itemCount, dietaryCounts] = useMemo(() => {
    let itemCount = 0;
    let dietaryCounts = new Map();
    for (const item of menuItems.values()) {
      itemCount += item.quantity;
      item.dietaries.forEach((dietary) =>
        dietaryCounts.set(
          dietary,
          (dietaryCounts.get(dietary) || 0) + item.quantity
        )
      );
    }
    return [itemCount, dietaryCounts];
  }, [menuItems]);

  return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            {itemCount ? (
              <span>
                {itemCount} item{itemCount > 1 ? "s" : ""}
              </span>
            ) : (
              <span>No items</span>
            )}
          </div>
          <div className="col-6 menu-summary-right">
            {[...dietaryCounts].map(([dietary, count]) => (
              <span key={dietary} data-testid={dietary}>
                {count} x<span className="dietary">{dietary}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
