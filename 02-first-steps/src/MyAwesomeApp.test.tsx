import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { MyAwasomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("should render firstName and lastName", () => {
    const { container } = render(<MyAwasomeApp />);
    // console.log(container.innerHTML)
    // render(<MyAwasomeApp/>);

    const h1 = container.querySelector("h1");
    // console.log(h1?.innerHTML) // me da el valor que tiene el contenido de h1
    // expect(h1?.innerHTML).toBe("Fernando"); // falla por los espacios que tiene el archivo entonces se usa el toContain
    expect(h1?.innerHTML).toContain("Fernando");

    const h3 = container.querySelector("h3");
    expect(h3?.innerHTML).toContain("Herrera");
  });

  test("should render firstName and lastName - screen", () => {
    render(<MyAwasomeApp />);
    screen.debug();

    //   const h1 = screen.getByRole('heading', {
    //     level: 1,
    //   })
    const h1 = screen.getByTestId("first-name-title");
    expect(h1.innerHTML).toContain("Fernando");
  });

  test("should match snapshot", () => {
    const { container } = render(<MyAwasomeApp />);
    expect(container).toMatchSnapshot();
  });

  test("should match snapshot", () => {
    render(<MyAwasomeApp />);
    expect(screen.getByTestId("div-app")).toMatchSnapshot();
  });
});
