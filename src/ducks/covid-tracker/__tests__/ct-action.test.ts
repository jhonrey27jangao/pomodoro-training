import * as actions from "../actions";

describe("Test for covid getInfo actions", () => {
  it("getInfoRequest", () => {
    const expected = {
      type: actions.GET_INFO_REQUEST,
    };

    const action = actions.getInfoRequest();
    expect(action).toEqual(expected);
  });

  it("getInfoSuccess", () => {
    const payload = {
      cases: 0,
      deaths: 0,
      recovered: 0,
    };

    const expected = {
      type: actions.GET_INFO_SUCCESS,
      payload,
    };

    const action = actions.getInfoSuccess(payload);
    expect(action).toEqual(expected);
  });

  it("getInfoFailure", () => {
    const payload = new Error("Error");

    const expected = {
      type: actions.GET_INFO_FAILURE,
      payload,
    };

    const action = actions.getInfoFailure(payload);
    expect(action).toEqual(expected);
  });

  it("getCountriesRequest", () => {
    const expected = {
      type: actions.GET_COUNTRIES_REQUEST,
    };

    const action = actions.getCountriesRequest();
    expect(action).toEqual(expected);
  });

  it("getCountriesSuccess", () => {
    const payload = {};

    const expected = {
      type: actions.GET_COUNTRIES_SUCCESS,
      payload,
    };

    const action = actions.getCountriesSuccess(payload);
    expect(action).toEqual(expected);
  });

  it("getCountriesFailure", () => {
    const payload = new Error("Error");

    const expected = {
      type: actions.GET_COUNTRIES_FAILURE,
      payload,
    };

    const action = actions.getCountriesFailure(payload);
    expect(action).toEqual(expected);
  });
});
