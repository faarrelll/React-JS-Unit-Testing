import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Button } from "../ui/button";

describe("Reusable Button component usage", () => {
  test("should render the button", () => {
    const { asFragment } = render(<Button>Click me</Button>);
    expect(asFragment()).toHaveTextContent("Click me");
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render the button with a onClick function state", () => {
    const onClick = () => {
      console.log("clicked");
    };
    const { asFragment } = render(<Button onClick={onClick}>Click me</Button>);
    expect(asFragment()).toHaveTextContent("Click me");
    expect(asFragment()).toMatchSnapshot();
  });
});
