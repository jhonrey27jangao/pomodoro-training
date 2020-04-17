import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("Test for App Component", () => {
  it("should render App", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
