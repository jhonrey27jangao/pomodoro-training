import * as reducers from "../reducers";
import * as actions from "../actions";

describe("Test for pomodoro reducer", () => {
  it("addTodo", () => {
    const state = reducers.PomodoroState;

    const action = {
      type: actions.ADD_TODO,
      title: "",
      savedLongBreak: "",
      savedPomodoro: "",
      savedShortBreak: "",
    };

    const testReducer = reducers.pomodoroReducer(state, action);

    const expected = {
      pomodoroDuration: 25,
      shortBreak: 10,
      longBreak: 15,
      prevId: 2,
      Lists: [
        {
          id: 1,
          title: "Taena hehe",
          savedPomodoro: 25,
          savedLongBreak: 15,
          savedShortBreak: 10,
          done: false,
          favorites: false,
        },
        {
          id: 2,
          title: "",
          savedPomodoro: "",
          savedLongBreak: "",
          savedShortBreak: "",
          done: false,
          favorites: false,
        },
      ],
    };
    expect(testReducer).toEqual(expected);
  });

  it("addTodo", () => {
    const state = reducers.PomodoroState;

    const action = {
      type: actions.ADD_TODO,
      title: "",
      savedLongBreak: "",
      savedPomodoro: "",
      savedShortBreak: "",
    };

    const testReducer = reducers.pomodoroReducer(state, action);

    const expected = {
      pomodoroDuration: 25,
      shortBreak: 10,
      longBreak: 15,
      prevId: 2,
      Lists: [
        {
          id: 1,
          title: "Taena hehe",
          savedPomodoro: 25,
          savedLongBreak: 15,
          savedShortBreak: 10,
          done: false,
          favorites: false,
        },
        {
          id: 2,
          title: "",
          savedPomodoro: "",
          savedLongBreak: "",
          savedShortBreak: "",
          done: false,
          favorites: false,
        },
      ],
    };
    expect(testReducer).toEqual(expected);
  });

  it("updateTimer", () => {
    const state = reducers.PomodoroState;

    const action = {
      type: actions.UPDATE_TIMER,
      pomodoroDuration: "",
      longBreak: "",
      shortBreak: "",
    };

    const testReducer = reducers.pomodoroReducer(state, action);

    const expected = {
      pomodoroDuration: "",
      shortBreak: "",
      longBreak: "",
      prevId: 1,
      Lists: [
        {
          id: 1,
          title: "Taena hehe",
          savedPomodoro: 25,
          savedLongBreak: 15,
          savedShortBreak: 10,
          done: false,
          favorites: false,
        },
      ],
    };
    expect(testReducer).toEqual(expected);
  });

  it("updateTodo", () => {
    const state = reducers.PomodoroState;

    const action = {
      type: actions.UPDATE_TODO,
      todoId: 1,
      todoTitle: "Ricky",
      todoDone: false,
      todoFavorites: false,
      savedPomodoro: "",
      savedLongBreak: "",
      savedShortBreak: "",
    };

    const testReducer = reducers.pomodoroReducer(state, action);

    const expected = {
      pomodoroDuration: 25,
      shortBreak: 10,
      longBreak: 15,
      prevId: 1,
      Lists: [
        {
          id: 1,
          title: "Ricky",
          savedPomodoro: "",
          savedLongBreak: "",
          savedShortBreak: "",
          done: false,
          favorites: false,
        },
      ],
    };
    expect(testReducer).toEqual(expected);
  });

  it("deleteTodo", () => {
    const state = reducers.PomodoroState;

    const action = {
      type: actions.DELETE_TODO,
      todoId: 0,
    };

    const testReducer = reducers.pomodoroReducer(state, action);

    const expected = {
      pomodoroDuration: 25,
      shortBreak: 10,
      longBreak: 15,
      prevId: 1,
      Lists: [
        {
          id: 1,
          title: "Taena hehe",
          savedPomodoro: 25,
          savedLongBreak: 15,
          savedShortBreak: 10,
          done: false,
          favorites: false,
        },
      ],
    };
    expect(testReducer).toEqual(expected);
  });

  it("updateOrder", () => {
    const state = reducers.PomodoroState;

    const action = {
      type: actions.UPDATE_ORDER,
      lists: "",
    };

    const testReducer = reducers.pomodoroReducer(state, action);

    const expected = {
      pomodoroDuration: 25,
      shortBreak: 10,
      longBreak: 15,
      prevId: 1,
      Lists: "",
    };
    expect(testReducer).toEqual(expected);
  });
});
