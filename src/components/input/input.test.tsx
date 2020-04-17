import React from "react";
import { render } from "@testing-library/react";
import { Input } from "./input";

describe("Test for Input Component", () => {
  it("should render Input", () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });

  it("should render Input", () => {
    const { container } = render(<Input width={20} height="big" center />);
    expect(container).toMatchSnapshot();
  });
});
