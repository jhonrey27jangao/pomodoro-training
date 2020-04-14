export const ADD_TODO = "ADD_TODO";
export const UPDATE_TIMER = "UPDATE_TIMER";
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DRAG_TODO = 'DRAG_TODO';
export const UPDATE_ORDER = 'UPDATE_ORDER'

export const addTodo = ({
  title,
  savedLongBreak,
  savedPomodoro,
  savedShortBreak
}: any) => {
  return {
    type: ADD_TODO,
    title: title,
    savedPomodoro: savedPomodoro,
    savedLongBreak: savedLongBreak,
    savedShortBreak: savedShortBreak
  };
};

export const updateTimer = ({
  pomodoroDuration,
  longBreak,
  shortBreak
}: any) => {
  return {
    type: UPDATE_TIMER,
    pomodoroDuration: pomodoroDuration,
    longBreak: longBreak,
    shortBreak: shortBreak
  };
};

export const updateTodo = ({
  todoId,
  todoTitle,
  todoDone,
  todoFavorites,
  savedPomodoro,
  savedLongBreak,
  savedShortBreak
}: any) => {
  return {
    type: UPDATE_TODO,
    todoId: todoId,
    todoTitle: todoTitle,
    todoDone: todoDone,
    todoFavorites: todoFavorites,
    savedPomodoro: savedPomodoro,
    savedLongBreak: savedLongBreak,
    savedShortBreak: savedShortBreak
  }
}

export const deleteTodo = ({
  todoId,
}: any) => {
  return {
    type: DELETE_TODO, 
    todoId: todoId,
  }
}

export const dragTodo = ({
  id
}: any) => {
  return {
    type: DRAG_TODO,
    id: id
  }
}

export const updateOrder = ({
  lists
}: any) => {
  return {
    type: UPDATE_ORDER,
    lists: lists
  }
}