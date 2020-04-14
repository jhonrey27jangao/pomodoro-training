import { createStore, combineReducers, applyMiddleware } from "redux";
import { pomodoroReducer } from "./pomodoro/reducers";
import { covidTrackerReducer } from "./covid-tracker/reducers";
import {sagas} from './covid-tracker/sagas'
import createSagaMiddleware from 'redux-saga'

const rootReducer = combineReducers({
    pomodoroReducer,
    covidTrackerReducer
})

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(sagas)
