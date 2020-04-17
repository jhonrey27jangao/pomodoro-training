import React from "react";
import { render } from "@testing-library/react";
import { SideBar } from "./sidebar";

describe("Test for Sidebar Component", () => {
  it("should render Sidebar", () => {
    const { container } = render(
      <>
        <SideBar />
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
