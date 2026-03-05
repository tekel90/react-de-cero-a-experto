/* eslint-disable @typescript-eslint/no-unused-vars */
import { afterEach, describe, expect, test, vi } from "vitest";
import { FisrtStepsApp } from "./FirstStepsApp";
import { render, screen } from "@testing-library/react";

const mockItemCounter = vi.fn((_props: unknown) => {
  return <div data-testid="ItemCounter" />;
});

vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

// vi.mock("./shopping-cart/ItemCounter", () => ({
//   ItemCounter: (props: unknown) => (
//     <div
//       data-testid="ItemCounter"
//       name={props.name}
//       quantity={props.quantity}
//     />
//   ),
// }));

describe("FisrtStepsApp", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should match snapshot", () => {
    const { container } = render(<FisrtStepsApp />);
    expect(container).toMatchSnapshot();
    // screen.debug()
  });

  test("should render the correct number of ItemCounter components", () => {
    render(<FisrtStepsApp />);

    const itemCounters = screen.getAllByTestId("ItemCounter");

    expect(itemCounters.length).toBe(3);
    // screen.debug();
  });

  test("should render ItemCounter with te correct props", () => {
    render(<FisrtStepsApp />);
    expect(mockItemCounter).toHaveBeenCalledTimes(3);
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Nintendo Switch 2",
      quantity: 1,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Pro Controller",
      quantity: 2,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Super Smash",
      quantity: 5,
    });
  });
});
