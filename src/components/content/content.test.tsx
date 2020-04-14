import React from "react";
import { render } from "@testing-library/react";
import { Content } from "./content";

describe("Test for Content Component", () => {
  it("should render Content", () => {
    const { container } = render(<Content />);
    expect(container).toMatchSnapshot();
  });
});
