import { createStore } from "redux";
import { pomodoroReducer } from "./pomodoro/reducers";

export const store = createStore(pomodoroReducer);
