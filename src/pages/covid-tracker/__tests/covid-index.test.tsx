import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import CovidTrackerApp from "../index";
import { Formik, Form } from "formik";

describe("Test for Index covid tracker App", () => {
  const mockStore = configureStore();
  let store: any;
  let initialState = {};

  beforeEach(() => {
    initialState = {};
    store = mockStore(initialState);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the component", async () => {
    const { container } = render(
      <Formik initialValues={initialState} onSubmit={() => {}}>
        {() => (
          <Form>
            <Provider store={store}>
              <CovidTrackerApp />
            </Provider>
          </Form>
        )}
        >
      </Formik>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
