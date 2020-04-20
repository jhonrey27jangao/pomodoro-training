import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import CovidTrackerApp from "../index";
import { Formik } from "formik";

describe("Test for Index covid tracker App", () => {
  const mockStore = configureStore();
  let store: any;
  let initialState: any;

  beforeEach(() => {
    initialState = {
      getInfoReducer: {
        loading: false,
        info: {
          cases: 0,
          deaths: 0,
          recovered: 0,
        },
        countries: [],
      },
      getCountriesReducer: {
        loading: false,
        info: {
          cases: 0,
          deaths: 0,
          recovered: 0,
        },
        countries: [
          {
            country: "North America",
            cases: 725964,
            todayCases: 1404,
            deaths: 36785,
            todayDeaths: 76,
            recovered: 70681,
            active: 618498,
            critical: 14453,
            casesPerOneMillion: 0,
            deathsPerOneMillion: 0,
            totalTests: 0,
            testsPerOneMillion: 0,
          },
          {
            country: "Europe",
            cases: 1015674,
            todayCases: 167,
            deaths: 92240,
            todayDeaths: 16,
            recovered: 280153,
            active: 643281,
            critical: 27809,
            casesPerOneMillion: 0,
            deathsPerOneMillion: 0,
            totalTests: 0,
            testsPerOneMillion: 0,
          },
        ],
      },
    };
    store = mockStore(initialState);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the component", () => {
    const { container, queryAllByText } = render(
      <Formik
        initialValues={initialState}
        onSubmit={() => {}}
        render={() => (
          <Provider store={store}>
            <CovidTrackerApp />
          </Provider>
        )}
      >
        >
      </Formik>
    );
    expect(container).toMatchSnapshot();
    fireEvent.click(queryAllByText("X")[0]);
  });
});
