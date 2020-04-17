import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Signup from "../signup";

describe("Test for Signup Component", () => {
  it("should render SignUp component", () => {
    const { container, queryAllByText } = render(<Signup />);
    expect(container).toMatchSnapshot();

    fireEvent.click(queryAllByText("Sign-Up")[0]);
  });
});
