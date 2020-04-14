import React from "react";
import { render } from "@testing-library/react";
import { Modal } from "./modal";

describe("Test for Modal Component", () => {
  it("should render Modal", () => {
    const { container } = render(<Modal />);
    expect(container).toMatchSnapshot();
  });
});
