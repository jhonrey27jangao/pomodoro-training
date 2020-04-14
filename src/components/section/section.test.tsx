import React from "react";
import { render } from "@testing-library/react";
import { Section } from "./section";

describe("Test for Section Component", () => {
  it("should render Section", () => {
    const { container } = render(<Section />);
    expect(container).toMatchSnapshot();
  });
});
