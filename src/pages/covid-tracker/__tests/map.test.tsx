import React from "react";
import { render } from "@testing-library/react";
import Map from "../map";

describe("Test for Map Component", () => {
  it("should render Map component", () => {
    const { container } = render(<Map />);
    expect(container).toMatchSnapshot();
  });

  it("should render Map component with props", () => {
    const { container } = render(<Map toBeMap="Iraq" />);
    expect(container).toMatchSnapshot();
  });
});
