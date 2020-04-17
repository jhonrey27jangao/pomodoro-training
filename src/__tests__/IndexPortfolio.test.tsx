import Index from "../index";

describe("Test for Index Component", () => {
  it("renders without crashing", () => {
    expect(
      JSON.stringify(
        Object.assign({}, Index, { _reactInternalInstance: "censored" })
      )
    ).toMatchSnapshot();
  });
});
