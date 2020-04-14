import { createStore, combineReducers, applyMiddleware } from "redux";
import { pomodoroReducer } from "./pomodoro/reducers";
import { getInfoReducer, getCountriesReducer } from "./covid-tracker/reducers";
import { sagas } from "./covid-tracker/sagas";
import createSagaMiddleware from "redux-saga";

const rootReducer = combineReducers({
  pomodoroReducer,
  getInfoReducer,
  getCountriesReducer,
});

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(sagas);
