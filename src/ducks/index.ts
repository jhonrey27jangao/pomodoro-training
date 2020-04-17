import { createStore, combineReducers, applyMiddleware } from "redux";
import { pomodoroReducer } from "./pomodoro/reducers";
import createSagaMiddleware from "redux-saga";
import { getInfoReducer, getCountriesReducer } from "./covid-tracker/reducers";
import { sagas } from "./covid-tracker/sagas";

const rootReducer = combineReducers({
  pomodoroReducer,
  getInfoReducer,
  getCountriesReducer,
});

const sagaMiddleWare = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(sagas);
