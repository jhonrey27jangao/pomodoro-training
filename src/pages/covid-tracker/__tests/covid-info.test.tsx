import React from "react";
import { render } from "@testing-library/react";
import CovidInfo from "../covid-info";

describe("Test for CovidInfo Component", () => {
  let info = {};
  beforeEach(() => {
    info = {
      cases: 0,
      deaths: 0,
      recovered: 0,
    };
  });
  it("should render CovidInfo component", () => {
    const { container } = render(<CovidInfo info={info} />);
    expect(container).toMatchSnapshot();
  });
});
