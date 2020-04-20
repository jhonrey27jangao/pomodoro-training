import { expectSaga } from "redux-saga-test-plan";
import { GET_COUNTRIES_SUCCESS, GET_INFO_SUCCESS } from "../actions";
import { getCountriesAsync, getInfoAsync } from "../sagas";

describe("Sagas of Covid Tracker App", () => {
  it("getInfo: Success response", async () => {
    await expectSaga(getInfoAsync)
      .put.like({ action: { type: GET_INFO_SUCCESS } })
      .run(false);
  });

  it("getCountries: Success response", async () => {
    await expectSaga(getCountriesAsync)
      .put.like({ action: { type: GET_COUNTRIES_SUCCESS } })
      .run(false);
  });
});
