import React from "react";
import { render } from "@testing-library/react";
import { Button } from "./button";

describe("Test for Button Component", () => {
  it("should render Button with dark theme", () => {
    const { container } = render(<Button theme="dark" />);
    expect(container).toMatchSnapshot();
  });

  it("should render Button  default theme", () => {
    const { container } = render(<Button theme="default" />);
    expect(container).toMatchSnapshot();
  });

  it("should render Button  success theme", () => {
    const { container } = render(<Button theme="success" />);
    expect(container).toMatchSnapshot();
  });

  it("should render Button  warning theme", () => {
    const { container } = render(<Button theme="warning" />);
    expect(container).toMatchSnapshot();
  });
});
