import * as reducers from "../reducers";
import * as actions from "../actions";

describe("Test for covid getInfo reducer", () => {
  it("getInfoRequest", () => {
    const state = reducers.covidTrackerState;

    const action = {
      type: actions.GET_INFO_REQUEST,
    };

    const testReducer = reducers.getInfoReducer(state, action);

    const expected = {
      loading: true,
      info: {
        cases: 0,
        deaths: 0,
        recovered: 0,
      },
      countries: [],
    };
    expect(testReducer).toEqual(expected);
  });

  it("getInfoSuccess", () => {
    const state = reducers.covidTrackerState;

    const payload = {
      countries: [],
      info: {
        cases: 0,
        deaths: 0,
        recovered: 0,
      },
      loading: false,
    };

    const action = {
      type: actions.GET_INFO_SUCCESS,
      payload,
    };

    const testReducer = reducers.getInfoReducer(state, action);

    const expected = {
      countries: [],
      info: {
        cases: 0,
        deaths: 0,
        recovered: 0,
      },
      loading: false,
    };

    expect(testReducer).toEqual(expected);
  });

  it("getInfoFailure", () => {
    const state = reducers.covidTrackerState;

    const payload = {
      countries: [],
      info: { cases: 0, deaths: 0, recovered: 0 },
      loading: false,
    };

    const action = {
      type: actions.GET_INFO_FAILURE,
      payload,
    };

    const testReducer = reducers.getInfoReducer(state, action);

    const expected = {
      countries: [],
      info: { cases: 0, deaths: 0, recovered: 0 },
      loading: false,
    };
    expect(testReducer).toEqual(expected);
  });
});

describe("Test for covid getCountries reducer", () => {
  it("getInfoRequest", () => {
    const state = reducers.covidTrackerState;

    const action = {
      type: actions.GET_COUNTRIES_REQUEST,
    };

    const testReducer = reducers.getCountriesReducer(state, action);

    const expected = {
      loading: true,
      info: {
        cases: 0,
        deaths: 0,
        recovered: 0,
      },
      countries: [],
    };
    expect(testReducer).toEqual(expected);
  });

  it("getCountriesSuccess", () => {
    const state = reducers.covidTrackerState;

    const payload = {
      countries: [],
      info: {
        cases: 0,
        deaths: 0,
        recovered: 0,
      },
      loading: false,
    };

    const action = {
      type: actions.GET_COUNTRIES_SUCCESS,
      payload,
    };

    const testReducer = reducers.getCountriesReducer(state, action);

    const expected = {
      countries: [],
      info: {
        cases: 0,
        deaths: 0,
        recovered: 0,
      },
      loading: false,
    };

    expect(testReducer).toEqual(expected);
  });

  it("getCountriesFailure", () => {
    const state = reducers.covidTrackerState;

    const payload = {
      countries: [],
      info: { cases: 0, deaths: 0, recovered: 0 },
      loading: false,
    };

    const action = {
      type: actions.GET_COUNTRIES_FAILURE,
      payload,
    };

    const testReducer = reducers.getCountriesReducer(state, action);

    const expected = {
      countries: [],
      info: { cases: 0, deaths: 0, recovered: 0 },
      loading: false,
    };
    expect(testReducer).toEqual(expected);
  });
});
