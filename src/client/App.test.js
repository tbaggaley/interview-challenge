import React from "react";
import { render, screen, within } from "@testing-library/react";
import { useQueryItems } from "./useQueryItems";
import userEvent from "@testing-library/user-event";

import App from "./App";

jest.mock("./useQueryItems", () => ({
  useQueryItems: jest.fn(),
}));

describe("Menu preview app", () => {
  it("should show an error when items failed to load", () => {
    useQueryItems.mockImplementation(() => ({
      loading: false,
      error: true,
      data: null,
    }));

    render(<App />);

    expect(screen.getByText(/Error/)).toBeTruthy();
  });

  it("should show loading indicator while request in flight", () => {
    useQueryItems.mockImplementation(() => ({
      loading: true,
      error: false,
      data: null,
    }));

    render(<App />);

    expect(screen.getByText(/Loading/)).toBeTruthy();
  });

  describe("Manipulating items", () => {
    const setup = () => {
      useQueryItems.mockImplementation(() => ({
        loading: false,
        error: false,
        data: [
          { id: "0", name: "Bag of crisps", dietaries: ["ve", "gf"] },
          { id: "1", name: "Mashed potato", dietaries: ["v", "gf"] },
        ],
      }));
      render(<App />);
    };

    it("should allow adding and removing items to / from the menu", () => {
      setup();

      const addCrispsButton = within(screen.getByTestId("item-0")).getByRole(
        "button"
      );
      userEvent.click(addCrispsButton);
      expect(screen.getByText("1 item")).toBeTruthy();

      // TODO: use better heuristic for delete button
      const removeCrispsButton = screen.getByText("x");

      userEvent.click(removeCrispsButton);
      expect(screen.getByText("No items")).toBeTruthy();
    });

    it("should increase the quantity of existing items when duplicates are added", () => {
      setup();

      const addPotatoButton = within(screen.getByTestId("item-1")).getByRole(
        "button"
      );
      userEvent.click(addPotatoButton);

      const potatoQuantityInput = screen.getByLabelText("Quantity:");

      expect(potatoQuantityInput.value).toBe("1");

      userEvent.click(addPotatoButton);

      expect(potatoQuantityInput.value).toBe("2");
    });

    it("should allow manually changing the quantity of individual items", () => {
      setup();

      const addPotatoButton = within(screen.getByTestId("item-1")).getByRole(
        "button"
      );
      userEvent.click(addPotatoButton);

      const potatoQuantityInput = screen.getByLabelText("Quantity:");

      userEvent.type(potatoQuantityInput, "0");
      expect(potatoQuantityInput.value).toBe("10");
    });
  });
});
