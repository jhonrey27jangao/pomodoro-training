import * as actions from "../actions";

describe("Test for covid Pomodoro actions", () => {
  it("addTodo", () => {
    const expected = {
      type: actions.ADD_TODO,
      title: "",
      savedLongBreak: "",
      savedPomodoro: "",
      savedShortBreak: "",
    };

    const action = actions.addTodo({
      type: actions.ADD_TODO,
      title: "",
      savedLongBreak: "",
      savedPomodoro: "",
      savedShortBreak: "",
    });
    expect(action).toEqual(expected);
  });

  it("updateTimer", () => {
    const expected = {
      type: actions.UPDATE_TIMER,
      pomodoroDuration: "",
      longBreak: "",
      shortBreak: "",
    };

    const action = actions.updateTimer({
      type: actions.UPDATE_TIMER,
      pomodoroDuration: "",
      longBreak: "",
      shortBreak: "",
    });
    expect(action).toEqual(expected);
  });

  it("updateTodo", () => {
    const expected = {
      type: actions.UPDATE_TODO,
      todoId: "",
      todoTitle: "",
      todoDone: "",
      todoFavorites: "",
      savedPomodoro: "",
      savedLongBreak: "",
      savedShortBreak: "",
    };

    const action = actions.updateTodo({
      type: actions.UPDATE_TODO,
      todoId: "",
      todoTitle: "",
      todoDone: "",
      todoFavorites: "",
      savedPomodoro: "",
      savedLongBreak: "",
      savedShortBreak: "",
    });
    expect(action).toEqual(expected);
  });

  it("deleteTodo", () => {
    const expected = {
      type: actions.DELETE_TODO,
      todoId: "",
    };

    const action = actions.deleteTodo({
      type: actions.DELETE_TODO,
      todoId: "",
    });
    expect(action).toEqual(expected);
  });

  it("dragTodo", () => {
    const expected = {
      type: actions.DRAG_TODO,
      id: "",
    };

    const action = actions.dragTodo({
      type: actions.DRAG_TODO,
      id: "",
    });
    expect(action).toEqual(expected);
  });

  it("updateOrder", () => {
    const expected = {
      type: "UPDATE_ORDER",
    };

    const action = actions.updateOrder({});
    expect(action).toEqual(expected);
  });
});
