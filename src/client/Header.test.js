import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("should show correct count for dietaries", () => {
    const menuItems = new Map();

    menuItems.set(1, {
      id: 1,
      name: "Can o' Spinach",
      dietaries: ["v", "ve", "df", "gf", "nf"],
      quantity: 1,
    });

    menuItems.set(2, {
      id: 2,
      name: "Can o' Worms",
      dietaries: ["df", "gf", "nf"],
      quantity: 2,
    });

    render(<Header menuItems={menuItems} />);

    expect(screen.getByTestId("ve")).toHaveTextContent("1 x");
    expect(screen.getByTestId("df")).toHaveTextContent("3 x");
    expect(screen.getByTestId("nf")).toHaveTextContent("3 x");
  });
});
