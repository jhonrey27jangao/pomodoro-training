import { expectSaga } from "redux-saga-test-plan";
import { GET_COUNTRIES_FAILURE, GET_INFO_FAILURE } from "../actions";
import { getCountriesAsync, getInfoAsync } from "../sagas";

describe("Sagas of Covid Tracker App", () => {
  it("getInfo: Error response", async () => {
    await expectSaga(getInfoAsync)
      .put.like({ action: { type: GET_INFO_FAILURE } })
      .run(false);
  });

  it("getCountries: Error response", async () => {
    await expectSaga(getCountriesAsync)
      .put.like({ action: { type: GET_COUNTRIES_FAILURE } })
      .run(false);
  });
});
