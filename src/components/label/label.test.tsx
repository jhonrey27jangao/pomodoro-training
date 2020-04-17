import React from "react";
import { render } from "@testing-library/react";
import { Label } from "./label";

describe("Test for Label Component", () => {
  it("should render Label with type of p", () => {
    const { container } = render(<Label type="p" />);
    expect(container).toMatchSnapshot();
  });

  it("should render Label with type of p else", () => {
    const { container } = render(
      <Label type="p" theme="light" weight="bold" strike pointer />
    );
    expect(container).toMatchSnapshot();
  });

  it("should render Label with type of h1", () => {
    const { container } = render(<Label type="h1" />);
    expect(container).toMatchSnapshot();
  });

  it("should render Label with type of h1 else", () => {
    const { container } = render(<Label type="h1" weight="bold" strike />);
    expect(container).toMatchSnapshot();
  });

  it("should render Label with type of h2", () => {
    const { container } = render(<Label type="h2" />);
    expect(container).toMatchSnapshot();
  });

  it("should render Label with type of h2 else", () => {
    const { container } = render(
      <Label type="h2" weight="bold" theme="light" strike />
    );
    expect(container).toMatchSnapshot();
  });

  it("should render Label with type of h3", () => {
    const { container } = render(<Label type="h3" />);
    expect(container).toMatchSnapshot();
  });

  it("should render Label with type of h3 else", () => {
    const { container } = render(
      <Label type="h3" weight="bold" theme="light" strike />
    );
    expect(container).toMatchSnapshot();
  });

  it("should render Label with type of h4", () => {
    const { container } = render(<Label type="h4" />);
    expect(container).toMatchSnapshot();
  });

  it("should render Label with type of h4 else", () => {
    const { container } = render(
      <Label type="h4" weight="bold" theme="light" strike />
    );
    expect(container).toMatchSnapshot();
  });
});
