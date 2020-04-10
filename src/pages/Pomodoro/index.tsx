/*disable eslint*/

import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHotkeys } from "react-hotkeys-hook";
import {} from "formik";

import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Modal } from "../../components/modal/modal";
import { Layout } from "../../components/layout/layout";
import { Section } from "../../components/section/section";
import { Label } from "../../components/label/label";
import {
  StyledPomodoroDiv,
  PomodoroListContainer,
  PomodoroListChild,
} from "./styles";
import {
  ADD_TODO,
  UPDATE_TIMER,
  UPDATE_TODO,
  DELETE_TODO,
  DRAG_TODO,
} from "../../ducks/pomodoro/actions";

const IndexPage: React.FC = () => {
  const dispatch = useDispatch();
  let PomodoroSuggestion: any = [];
  const shortBreak = useSelector((state: any) => state.shortBreak);
  const longBreak = useSelector((state: any) => state.longBreak);
  const pomodoroDuration = useSelector((state: any) => state.pomodoroDuration);
  const Lists = useSelector((state: any) => state.Lists);
  const [pomodoroDurationState, setpomodoroDurationState] = useState(
    pomodoroDuration
  );
  const [shortBreakState, setShortBreakState] = useState<number>(shortBreak);
  const [longBreakState, setlongBreakState] = useState(longBreak);
  const [timer, setTimer] = useState(pomodoroDurationState * 60);
  const [toggleTimer, setToggleTimer] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");
  const [modalView, setModalView] = useState({
    todoModal: false,
    timerModal: false,
  });
  const [suggestionStatus, setSuggestionStatus] = useState(false);

  const [autoPomodoro, setAutoPomodoro] = useState({
    status: false,
    pomodoroLimit: 3,
    longBreakLimit: 2,
    shortBreakLimit: 3,
  });

  const [editTodo, setEditTodo] = useState({
    id: 0,
    title: "",
    done: false,
    favorites: false,
    savedPomodoro: pomodoroDuration,
    savedLongBreak: longBreak,
    savedShortBreak: shortBreak,
  });

  const editTodoList = useCallback(
    ({
      todoId,
      todoTitle,
      todoDone,
      todoFavorites,
      savedPomodoro,
      savedLongBreak,
      savedShortBreak,
    }) => {
      setModalView({
        todoModal: true,
        timerModal: false,
      });
      setEditTodo({
        id: todoId,
        title: todoTitle,
        done: todoDone,
        favorites: todoFavorites,
        savedPomodoro: savedPomodoro,
        savedLongBreak: savedLongBreak,
        savedShortBreak: savedShortBreak,
      });
    },
    [setModalView, setEditTodo]
  );

  const updateTodoList = () => {
    dispatch({
      type: UPDATE_TODO,
      todoId: editTodo.id,
      todoTitle: editTodo.title,
      todoDone: editTodo.done,
      todoFavorites: editTodo.favorites,
      savedPomodoro: pomodoroDuration,
      savedLongBreak: longBreak,
      savedShortBreak: shortBreak,
    });
    setModalView({
      timerModal: modalView.timerModal,
      todoModal: !modalView.todoModal,
    });
  };

  const time_convert = (num: any) => {
    var minutes = Math.floor(num / 60);
    var seconds = num % 60;
    return minutes + "m:" + seconds + "s";
  };

  const checkFavorites = () => {
    Lists.map((item: any) => {
      if (item.favorites === true) {
        PomodoroSuggestion.push({
          id: item.id,
          title: item.title,
          savedPomodoro: item.savedPomodoro,
          savedLongBreak: item.savedLongBreak,
          savedShortBreak: item.savedShortBreak,
          done: item.done,
          favorites: item.favorites,
        });
        localStorage.setItem(
          "PomodoroSuggestion",
          JSON.stringify(PomodoroSuggestion)
        );
      }
    });
  };

  const displayFavorites = () => {
    const listFavorites = JSON.parse(
      localStorage.getItem("PomodoroSuggestion") || "{}"
    );
    return (
      <>
        <ul>
          {listFavorites.map((item: any) => (
            <li
              style={{
                position: "relative",
                textAlign: "center",
                background: "#f8f8f8",
                borderRadius: "10px",
              }}
              key={item.id}
            >
              <button
                style={{
                  display: "inline",
                  position: "absolute",
                  top: "3px",
                  left: "5px",
                  width: "15px",
                  height: "15px",
                  fontSize: "8px",
                  color: "#fff",
                  background: "#000",
                  padding: "2px",
                  borderRadius: "100%",
                  cursor: "pointer",
                }}
                onClick={() => deleteSuggestion(item.id)}
              >
                X
              </button>
              <Label
                type="p"
                pointer={true}
                onClick={() => setTodoTitle(item.title)}
                center={true}
              >
                {item.title}
              </Label>
            </li>
          ))}
        </ul>
      </>
    );
  };

  const deleteSuggestion = (id: number) => {
    const listFavorites = JSON.parse(
      localStorage.getItem("PomodoroSuggestion") || "{}"
    );

    PomodoroSuggestion = listFavorites.filter((item: any) => {
      return item.id !== id;
    });

    localStorage.setItem(
      "PomodoroSuggestion",
      JSON.stringify(PomodoroSuggestion)
    );
  };

  const getTodo = () => {
    if (todoTitle !== "") {
      setTodoTitle("");
      dispatch({
        type: ADD_TODO,
        title: todoTitle,
        savedPomodoro: pomodoroDuration,
        savedLongBreak: longBreak,
        savedShortBreak: shortBreak,
      });
    }

    Notification.requestPermission().then(() => {
      new Notification(`Added todo: ${todoTitle}:`, {
        body: `Duration: ${pomodoroDuration}`,
        timestamp: 500,
      });
    });
  };

  const toggle = useCallback(() => {
    setToggleTimer(!toggleTimer);

    Notification.requestPermission().then(() => {
      new Notification("Timer:", {
        body: toggleTimer ? "pause" : "play",
        timestamp: 500,
      });
    });
  }, [toggleTimer]);

  const resetTimer = () => {
    setToggleTimer(false);
    setTimer(pomodoroDuration * 60);

    Notification.requestPermission().then(() => {
      new Notification("Timer:", {
        body: "reset",
        timestamp: 500,
      });
    });
  };

  const updateTimer = () => {
    dispatch({
      type: UPDATE_TIMER,
      pomodoroDuration: pomodoroDurationState,
      longBreak: longBreakState,
      shortBreak: shortBreakState,
    });
    setModalView({
      todoModal: false,
      timerModal: false,
    });
  };

  const setSpecifiedTimer = (value: number) => {
    setToggleTimer(true);
    setTimer(value * 60);

    Notification.requestPermission().then(() => {
      new Notification(`Timer: ${toggleTimer ? "pause" : "play"}`, {
        body: `duration: ${time_convert(value * 60)}`,
        timestamp: 500,
      });
    });
  };

  const setAutoTimer = () => {
    setAutoPomodoro({
      status: !autoPomodoro.status,
      pomodoroLimit: autoPomodoro.pomodoroLimit,
      longBreakLimit: autoPomodoro.longBreakLimit,
      shortBreakLimit: autoPomodoro.shortBreakLimit,
    });

    Notification.requestPermission().then(() => {
      new Notification("Timer is:", {
        body: autoPomodoro.status ? "Manual" : "Auto",
        timestamp: 500,
      });
    });
  };

  const deleteTodo = (id: any) => {
    dispatch({
      type: DELETE_TODO,
      todoId: id,
    });

    Notification.requestPermission().then(() => {
      new Notification(`Delete`, {
        body: "Todo",
        timestamp: 100,
      });
    });
  };

  const dragTodo = (data: any) => {
    dispatch({
      type: DRAG_TODO,
      id: data,
    });
  };

  useEffect(() => {
    let interval: any = null;

    checkFavorites();
    if (toggleTimer) {
      interval = setInterval(() => {
        setTimer((timer: number) => timer - 1);
      }, 1000);

      if (timer === 0) {
        if (autoPomodoro.status) {
          setAutoPomodoro({
            status: true,
            pomodoroLimit: autoPomodoro.pomodoroLimit - 1,
            longBreakLimit: autoPomodoro.longBreakLimit,
            shortBreakLimit: autoPomodoro.shortBreakLimit,
          });

          if (autoPomodoro.longBreakLimit !== 0) {
            setSpecifiedTimer(longBreak);
            setAutoPomodoro({
              status: true,
              pomodoroLimit: autoPomodoro.pomodoroLimit,
              longBreakLimit: autoPomodoro.longBreakLimit - 1,
              shortBreakLimit: autoPomodoro.shortBreakLimit,
            });

            if (autoPomodoro.pomodoroLimit !== 0) {
              setSpecifiedTimer(pomodoroDuration);
              setAutoPomodoro({
                status: true,
                pomodoroLimit: autoPomodoro.pomodoroLimit - 1,
                longBreakLimit: autoPomodoro.longBreakLimit,
                shortBreakLimit: autoPomodoro.shortBreakLimit,
              });
            } else {
              setAutoPomodoro({
                status: false,
                pomodoroLimit: autoPomodoro.pomodoroLimit,
                longBreakLimit: autoPomodoro.longBreakLimit,
                shortBreakLimit: autoPomodoro.shortBreakLimit,
              });
            }
          }
        } else {
          toggle();
        }
      }
    } else if (!toggleTimer && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [
    toggleTimer,
    timer,
    autoPomodoro.status,
    Lists,
    PomodoroSuggestion,
    checkFavorites,
    toggle,
    suggestionStatus,
  ]);

  const renderTimerModal = () => {
    return (
      <Modal
        width={300}
        onClose={() =>
          setModalView({
            todoModal: false,
            timerModal: modalView.timerModal,
          })
        }
        modalTitle="Update list"
      >
        <Input
          value={editTodo.title}
          onChange={(e) =>
            setEditTodo({
              id: editTodo.id,
              title: e.target.value,
              done: editTodo.done,
              favorites: editTodo.favorites,
              savedPomodoro: editTodo.savedPomodoro,
              savedLongBreak: editTodo.savedLongBreak,
              savedShortBreak: editTodo.savedShortBreak,
            })
          }
          width={245}
        />
        <p
          style={{
            marginTop: "5px",
          }}
        >
          STATUS:{" "}
        </p>
        <Button
          width={150}
          onClick={() =>
            setEditTodo({
              id: editTodo.id,
              title: editTodo.title,
              done: !editTodo.done,
              favorites: editTodo.favorites,
              savedPomodoro: editTodo.savedPomodoro,
              savedLongBreak: editTodo.savedLongBreak,
              savedShortBreak: editTodo.savedShortBreak,
            })
          }
        >
          {editTodo.done ? "Cancel" : "Done"}
        </Button>
        ADD TO FAVORITES?:
        <Button
          width={150}
          onClick={() =>
            setEditTodo({
              id: editTodo.id,
              title: editTodo.title,
              done: editTodo.done,
              favorites: !editTodo.favorites,
              savedPomodoro: editTodo.savedPomodoro,
              savedLongBreak: editTodo.savedLongBreak,
              savedShortBreak: editTodo.savedShortBreak,
            })
          }
        >
          {editTodo.favorites ? "Cancel" : "Add"}
        </Button>
        <Button
          width={250}
          theme="success"
          onClick={() => {
            updateTodoList();
          }}
        >
          Update List
        </Button>
      </Modal>
    );
  };

  const renderTodoModal = () => {
    return (
      <Modal
        width={300}
        onClose={() =>
          setModalView({
            todoModal: false,
            timerModal: false,
          })
        }
        modalTitle="Update Timer"
      >
        <Input
          value={pomodoroDurationState}
          width={250}
          placeholder="Enter Pomodoro Duration"
          onChange={(e) => setpomodoroDurationState(e.target.value)}
        />
        <Input
          value={longBreakState}
          width={250}
          placeholder="Enter Long Break Duration"
          onChange={(e) => setlongBreakState(e.target.value)}
        />
        <Input
          value={shortBreakState}
          width={250}
          placeholder="Enter Short Break Duration"
          onChange={(e) => setShortBreakState(e.target.value)}
        />
        <Button
          width={250}
          theme="success"
          center={true}
          onClick={() => updateTimer()}
        >
          Update
        </Button>
      </Modal>
    );
  };

  useHotkeys("shift+p", () => toggle());
  useHotkeys("shift+a", () => setAutoTimer());
  useHotkeys("shift+r", () => resetTimer());

  return (
    <Layout>
      <Section>
        {modalView.todoModal && renderTimerModal()}
        {modalView.timerModal && renderTodoModal()}
        <StyledPomodoroDiv position="left">
          <PomodoroListContainer>
            <Label type="h2" center weight="bold">
              Pomodoro Page
            </Label>
          </PomodoroListContainer>
          <PomodoroListContainer>
            <Label type="p">Enter Todo List:</Label>
            <Input
              width={450}
              placeholder="Sample todo here"
              value={todoTitle}
              onChange={(e) => {
                setTodoTitle(e.target.value);
                setSuggestionStatus(true);
              }}
              id="TodoName"
            />
          </PomodoroListContainer>
          <Button width={590} theme="success" onClick={() => getTodo()}>
            Add Todo
          </Button>
          <PomodoroListContainer>
            <PomodoroListChild percentWidth={30}>
              <Label type="h3" center weight="light">
                Pomodoro Duration:
              </Label>
              <Label type="h3" center weight="bold">
                {pomodoroDuration}
              </Label>
              <Button
                width={150}
                onClick={() => setSpecifiedTimer(pomodoroDurationState)}
              >
                Start
              </Button>
            </PomodoroListChild>
            <PomodoroListChild percentWidth={30}>
              <Label type="h3" center weight="light">
                Long break duration:
              </Label>
              <Label type="h3" center weight="bold">
                {longBreak}
              </Label>
              <Button width={150} onClick={() => setSpecifiedTimer(longBreak)}>
                Start
              </Button>
            </PomodoroListChild>
            <PomodoroListChild percentWidth={30}>
              <Label type="h3" center weight="light">
                Short break duration:
              </Label>
              <Label type="h3" center weight="bold">
                {shortBreak}
              </Label>
              <Button width={150} onClick={() => setSpecifiedTimer(shortBreak)}>
                Start
              </Button>
            </PomodoroListChild>
          </PomodoroListContainer>
          <Button
            width={590}
            theme="success"
            onClick={() =>
              setModalView({
                todoModal: modalView.todoModal,
                timerModal: !modalView.timerModal,
              })
            }
          >
            Update
          </Button>
          <Label type="h4">Shortcut Keys:</Label>
          <Label type="p">shift + p (Play)</Label>
          <br />
          <Label type="p">shift + a (Auto)</Label>
          <br />
          <Label type="p">shift + r (Reset)</Label>
          <br />
        </StyledPomodoroDiv>
        <StyledPomodoroDiv position="right">
          <PomodoroListContainer>
            <PomodoroListChild percentWidth={31}>
              <Label type="h2" weight="light" center>
                Timer: <strong>{time_convert(timer)}</strong>
              </Label>
              <div>
                {toggleTimer ? (
                  <Button onClick={toggle} theme="warning" width={150}>
                    Pause
                  </Button>
                ) : (
                  <Button onClick={toggle} theme="success" width={150}>
                    Play
                  </Button>
                )}
                <Button
                  onClick={() => setAutoTimer()}
                  theme="warning"
                  width={150}
                >
                  {autoPomodoro.status ? "Back to Manual" : "Auto"}
                </Button>
                <Button onClick={resetTimer} theme="success" width={150}>
                  Reset
                </Button>
              </div>
              <div
                style={{
                  marginTop: "20px",
                }}
              >
                <Label type="h3" center>
                  Favorites
                </Label>
                {displayFavorites()}
              </div>
            </PomodoroListChild>
            <PomodoroListChild percentWidth={40} height={800}>
              <Label type="h2" center>
                Todo List:
              </Label>
              <ul>
                {Lists.map((todo: any) => (
                  <li
                    style={{
                      background: "#f8f8f8",
                      marginBottom: "20px",
                    }}
                    key={todo.id}
                    draggable
                    onDrag={() => dragTodo(todo.id)}
                    // onDrop={() => dropTodo(todo.id)}
                  >
                    <div
                      style={{
                        position: "absolute",
                      }}
                    >
                      <button
                        style={{
                          position: "relative",
                          top: "3px",
                          left: "3px",
                          fontWeight: "bold",
                          cursor: "pointer",
                          border: "none",
                          borderRadius: "10px",
                          padding: "3px 7px",
                          fontSize: "12px",
                          background: "#fff",
                        }}
                        title="Delete this todo"
                        onClick={() => deleteTodo(todo.id)}
                      >
                        X
                      </button>
                    </div>
                    <Label type="h3" weight="bold" strike={todo.done} center>
                      {todo.title} ({todo.savedPomodoro}:00 minutes)
                    </Label>
                    <Button
                      onClick={() => setSpecifiedTimer(todo.savedPomodoro)}
                      theme="success"
                      width={150}
                      disabled={todo.done}
                    >
                      Play
                    </Button>
                    <Button
                      onClick={() =>
                        editTodoList({
                          todoId: todo.id,
                          todoTitle: todo.title,
                          todoDone: todo.done,
                          todoFavorites: todo.favorites,
                          savedPomodoro: todo.savedPomodoro,
                          savedLongBreak: todo.savedLongBreak,
                          savedShortBreak: todo.savedShortBreak,
                        })
                      }
                      theme="warning"
                      width={150}
                      disabled={todo.done}
                    >
                      Edit
                    </Button>
                  </li>
                ))}
              </ul>
            </PomodoroListChild>
          </PomodoroListContainer>
        </StyledPomodoroDiv>
      </Section>
    </Layout>
  );
};

IndexPage.displayName = "Pomodoro Page";
export default IndexPage;
