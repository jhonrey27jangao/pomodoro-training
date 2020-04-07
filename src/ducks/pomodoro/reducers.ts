import * as actions from "./actions";

type pomodoroStateProps = {
  pomodoroDuration: number;
  shortBreak: number;
  longBreak: number;
  prevId: number;
  Lists: [
    {
      id: number;
      title: string;
      done: boolean;
      favorites: boolean;
      savedPomodoro: number;
      savedLongBreak: number;
      savedShortBreak: number;
    }
  ];
};

const PomodoroState: pomodoroStateProps = {
  pomodoroDuration: 25,
  shortBreak: 10,
  longBreak: 15,
  prevId: 1,
  Lists: [
    {
      id: 1,
      title: "Sample",
      savedPomodoro: 25,
      savedLongBreak: 15,
      savedShortBreak: 10,
      done: false,
      favorites: false
    }
  ]
};

const PomodoroStateStored = JSON.parse(
  localStorage.getItem("PomodoroState") || "{}" 
);

export const pomodoroReducer = (state: any = PomodoroStateStored, action: any) => {
  switch (action.type) {
    case actions.ADD_TODO:
      state = {
        ...state,
        prevId: state.prevId + 1,
        Lists: [
          ...state.Lists,
          {
            id: state.prevId + 1,
            title: action.title,            
            savedPomodoro: action.savedPomodoro,
            savedLongBreak: action.savedLongBreak,
            savedShortBreak: action.savedShortBreak,
            done: false,
            favorites: false,
          }
        ]
      };
      localStorage.setItem("PomodoroState", JSON.stringify(state));
      return state;
    case actions.UPDATE_TIMER:
      state = {
        ...state,
        pomodoroDuration: action.pomodoroDuration,
        shortBreak: action.shortBreak,
        longBreak: action.longBreak
      };
      localStorage.setItem("PomodoroState", JSON.stringify(state));
      return state;
    case actions.UPDATE_TODO: 

      const editedState = {
        ...state,
        Lists : state.Lists.filter((item: any) => {
          return item.id !== action.todoId
        })
      }
        
      state = {
        ...state,
        Lists: [...editedState.Lists, {          
          id: action.todoId,
          title: action.todoTitle,         
          savedPomodoro: action.savedPomodoro,
          savedLongBreak: action.savedLongBreak,
          savedShortBreak: action.savedShortBreak,
          done: action.todoDone,
          favorites: action.todoFavorites
        }]
      }
      localStorage.setItem("PomodoroState", JSON.stringify(state));
      return state;
    case actions.DELETE_TODO:
      state = {
        ...state,
        Lists : state.Lists.filter((item: any) => {
        return item.id !== action.todoId
      })
    }
    localStorage.setItem("PomodoroState", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
