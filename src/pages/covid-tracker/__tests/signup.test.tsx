import React from "react";
import { render } from "@testing-library/react";
import Signup from "../signup";

describe("Test for Signup Component", () => {
  it("should render SignUp component", () => {
    const { container } = render(<Signup />);
    expect(container).toMatchSnapshot();
  });
});
