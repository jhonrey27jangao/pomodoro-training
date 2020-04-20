import { takeLatest, put, call } from "redux-saga/effects";
import * as actions from "./actions";
import Axios from "axios";

export function* getInfoAsync() {
  try {
    const getData = async () => {
      const { data } = await Axios.get(
        `https://coronavirus-19-api.herokuapp.com/all`
      );
      return data;
    };
    const data = yield call(getData);
    yield put(actions.getInfoSuccess(data));
  } catch (error) {
    // yield put(actions.getInfoFailure(error));
  }
}

export function* getCountriesAsync() {
  try {
    const getData = async () => {
      const { data } = await Axios.get(
        `https://coronavirus-19-api.herokuapp.com/countries`
      );
      return data;
    };
    const data = yield call(getData);
    yield put(actions.getCountriesSuccess(data));
  } catch (error) {
    // yield put(actions.getCountriesFailure(error));
  }
}

export function* sagas() {
  yield takeLatest(actions.GET_INFO_REQUEST, getInfoAsync);
  yield takeLatest(actions.GET_COUNTRIES_REQUEST, getCountriesAsync);
}
