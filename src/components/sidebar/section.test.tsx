import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { SideBar } from "./sidebar";

describe("Test for Sidebar Component", () => {
  it("should render Sidebar", () => {
    const { container } = render(
      <>
        <BrowserRouter>
          <SideBar />
        </BrowserRouter>
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
