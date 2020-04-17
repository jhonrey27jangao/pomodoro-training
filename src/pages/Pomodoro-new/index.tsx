import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHotkeys } from "react-hotkeys-hook";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { PomdoroProps } from "./types";
import { StyledPomodoroDiv, PomodoroListChild, TableContainer } from "./styles";
import { Label } from "../../components/label/label";
import { Modal } from "../../components/modal/modal";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import {
  UPDATE_TODO,
  UPDATE_ORDER,
  UPDATE_TIMER,
  ADD_TODO,
  DELETE_TODO,
} from "../../ducks/pomodoro/actions";

const initialValues: any = {
  todoName: 0,
};

const RenderPomodoroInput = ({
  pomodoroDuration,
  longBreak,
  shortBreak,
  getTodo,
  todoTitle,
  setTodoTitle,
  setAutoTimer,
  setSpecifiedTimer,
  setModalView,
  modalView,
  autoPomodoro,
  handleSubmit,
  todoName,
}: any) => {
  return (
    <StyledPomodoroDiv>
      <PomodoroListChild percentWidth={30} float="left">
        <ErrorMessage name="todoName" />
        <Field
          id="todoName"
          name="todoName"
          placeholder="Add todo"
          onChange={(e: any) => {
            setTodoTitle(e.target.value);
          }}
          center
          component={Input}
          value={todoTitle}
        />
        <Button
          theme="default"
          onClick={() => {
            getTodo();
            handleSubmit();
          }}
        >
          Add Todo
        </Button>
      </PomodoroListChild>
      <PomodoroListChild percentWidth={70} float="right">
        <div
          style={{
            padding: "47px 15px 0",
          }}
        >
          <Button theme="default" width={100} onClick={() => setAutoTimer()}>
            {autoPomodoro.status ? "Manual" : "Auto"}
            <br /> &#10561;
          </Button>
          <Button
            theme="default"
            width={120}
            onClick={() => setSpecifiedTimer(pomodoroDuration)}
          >
            {pomodoroDuration} Pomodoro
          </Button>
          <Button
            theme="default"
            width={120}
            onClick={() => setSpecifiedTimer(longBreak)}
          >
            {longBreak} <br /> L-Break
          </Button>
          <Button
            theme="default"
            width={120}
            onClick={() => setSpecifiedTimer(shortBreak)}
          >
            {shortBreak} <br /> S-break
          </Button>
          <Button
            theme="default"
            width={100}
            onClick={() =>
              setModalView({
                todoModal: modalView.todoModal,
                timerModal: !modalView.timerModal,
              })
            }
          >
            Settings <br /> &#9777;
          </Button>
          <Button
            theme="default"
            width={100}
            onClick={() =>
              setModalView({
                todoModal: modalView.todoModal,
                timerModal: modalView.timerModal,
                aboutModal: true,
              })
            }
          >
            About <br /> &#8305;
          </Button>
        </div>
      </PomodoroListChild>
    </StyledPomodoroDiv>
  );
};

const renderTodoList = ({
  lists,
  Lists,
  setSpecifiedTimer,
  editTodoList,
  deleteTodo,
  dragStart,
  onDrop,
  dragOver,
  setModalView,
  updateOrder,
}: any) => {
  return (
    <TableContainer>
      <Button
        width={150}
        theme="success"
        onClick={() =>
          setModalView({
            aboutModal: false,
            timerModal: false,
            todoModal: false,
            favoritesModal: true,
          })
        }
      >
        Show Favorites
      </Button>
      {lists !== Lists ? (
        <Button width={150} theme="warning" onClick={() => updateOrder()}>
          Update order
        </Button>
      ) : (
        ""
      )}

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Duration</th>
            <th>L-break</th>
            <th>S-break</th>
            <th>Status</th>
            <th>Favorites</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lists.length === 0 ? (
            <tr>
              <td colSpan={8} style={{ textAlign: "center" }}>
                No data to show
              </td>
            </tr>
          ) : (
            <>
              {lists.map((item: any, index: any) => (
                <tr
                  className={item.done ? "done" : ""}
                  key={index}
                  data-position={index}
                  draggable={true}
                  onDrag={(e: any) => dragStart(e)}
                  onDrop={(e: any) => onDrop(e)}
                  onDragOver={(e) => dragOver(e)}
                >
                  <td>
                    <Label
                      type="p"
                      theme="dark"
                      weight="bold"
                      pointer
                      onClick={() =>
                        editTodoList({
                          todoId: item.id,
                          todoTitle: item.title,
                          todoDone: item.done,
                          todoFavorites: item.favorites,
                          savedPomodoro: item.savedPomodoro,
                          savedLongBreak: item.savedLongBreak,
                          savedShortBreak: item.savedShortBreak,
                        })
                      }
                    >
                      &#9998;
                    </Label>
                  </td>
                  <td> {item.title}</td>
                  <td> {item.savedPomodoro}</td>
                  <td> {item.savedLongBreak}</td>
                  <td> {item.savedShortBreak}</td>
                  <td>{item.done ? "Done" : "To do"}</td>
                  <td key={index}> {item.favorites ? "Yes" : "No"}</td>
                  <td>
                    <Button
                      width={100}
                      theme="success"
                      onClick={() => setSpecifiedTimer(item.savedPomodoro)}
                      disabled={item.done}
                    >
                      Play
                    </Button>
                    <Button
                      width={100}
                      theme="warning"
                      onClick={() => deleteTodo(item.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </TableContainer>
  );
};

const renderTimerModal = ({
  editTodo,
  setEditTodo,
  modalView,
  setModalView,
  updateTodoList,
}: any) => {
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
      <Button
        theme="dark"
        width={260}
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
      <Button
        theme="dark"
        width={260}
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
        {editTodo.favorites ? "Cancel" : "Added to favorites"}
      </Button>
      <Button
        width={260}
        theme="default"
        onClick={() => {
          updateTodoList();
        }}
      >
        Update Todo
      </Button>
    </Modal>
  );
};

const renderTodoModal = ({
  shortBreakState,
  setShortBreakState,
  longBreakState,
  setlongBreakState,
  pomodoroDurationState,
  setpomodoroDurationState,
  setModalView,
  updateTimer,
}: any) => {
  return (
    <Modal
      width={300}
      onClose={() =>
        setModalView({
          todoModal: false,
          timerModal: false,
        })
      }
      modalTitle="UPDATE TIMER"
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
        theme="dark"
        width={250}
        center={true}
        onClick={() => updateTimer()}
      >
        Update
      </Button>
    </Modal>
  );
};

const renderAboutModal = ({ modalView, setModalView }: any) => {
  return (
    <Modal
      width={700}
      onClose={() =>
        setModalView({
          todoModal: modalView.todoModal,
          timerModal: modalView.timerModal,
          aboutModal: false,
        })
      }
    >
      <PomodoroListChild
        style={{
          marginBottom: "10px",
        }}
      >
        <Label type="h2" weight="bold" align="center">
          What is Pomodoro?
        </Label>
        <hr />
        <br />
        <Label type="p">
          Pomodoro Timer is a customizable and easy to use looping pomodoro
          timer to boost your efficiency.
        </Label>
      </PomodoroListChild>
      <br />
      <PomodoroListChild>
        <Label type="h3" align="left" weight="bold">
          How to use:
        </Label>
        <Label type="p">
          -Decide task to be done set timers to 25 minutes for one "Pomodoro"
          <br />
          -Work on task until timer is complete <br />
          -After timer completion, put a checkmark on to-do list
          <br />
          -Take a 5 minutes short break
          <br /> -After four "Pomodoro" take a long break
          <br /> -Repeat to step 1
        </Label>
      </PomodoroListChild>
      <PomodoroListChild>
        <Label type="h3" align="left" weight="bold">
          Shortcut Keys:
        </Label>
        -
        <Label type="p" align="center" weight="bold">
          Play
        </Label>
        (shift + p)
        <br />-
        <Label type="p" align="center" weight="bold">
          Pause
        </Label>
        (shift + [)
        <br />-
        <Label type="p" align="center" weight="bold">
          Reset
        </Label>
        (shift + r)
        <br />-
        <Label type="p" align="center" weight="bold">
          Auto
        </Label>
        (shift + a)
      </PomodoroListChild>
      <hr />
      <Label type="h4" align="center">
        Pomodoro Web App <sup>&reg;</sup>
      </Label>
    </Modal>
  );
};

const renderFavoritesModal = ({ setModalView, setTodoTitle }: any) => {
  const listFavorites = JSON.parse(
    localStorage.getItem("PomodoroSuggestion") || "{}"
  );

  const selectFavorite = (item: any) => {
    setModalView({
      aboutModal: false,
      timerModal: false,
      todoModal: false,
      favorites: false,
    });
    setTodoTitle(item);
  };

  return (
    <Modal
      width={300}
      onClose={() =>
        setModalView({
          aboutModal: false,
          timerModal: false,
          todoModal: false,
          favorites: false,
        })
      }
      modalTitle="Pick Favorites:"
    >
      {listFavorites.length === 0 ? (
        <p
          style={{
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          No favorites
        </p>
      ) : (
        <>
          {listFavorites.map((item: any) => (
            <>
              <Button
                key={item.id}
                theme="success"
                onClick={() => selectFavorite(item.title)}
              >
                {item.title}
              </Button>
            </>
          ))}
        </>
      )}
    </Modal>
  );
};

const IndexPage: React.FC<PomdoroProps> = ({ setTitle }) => {
  const dispatch = useDispatch();
  let PomodoroSuggestion: any = [];
  const shortBreak = useSelector(
    (state: any) => state.pomodoroReducer.shortBreak
  );
  const allState = useSelector((state: any) => state);
  const longBreak = useSelector((state: any) => state.pomodoroReducerlongBreak);
  const pomodoroDuration = useSelector(
    (state: any) => state.pomodoroReducer.pomodoroDuration
  );
  const Lists = useSelector((state: any) => state.pomodoroReducer.Lists);
  const [lists, setLists] = useState(Lists);
  const [pomodoroDurationState, setpomodoroDurationState] = useState<number>(
    pomodoroDuration
  );
  const [shortBreakState, setShortBreakState] = useState<number>(shortBreak);
  const [longBreakState, setlongBreakState] = useState<number>(longBreak);
  const [timer, setTimer] = useState(pomodoroDurationState * 60);
  const [toggleTimer, setToggleTimer] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");
  const [modalView, setModalView] = useState({
    todoModal: false,
    timerModal: false,
    aboutModal: false,
    favoritesModal: false,
  });
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

  const dragState = {
    draggedFrom: 0,
    draggedTo: 0,
    isDragging: false,
    originalOrder: [
      {
        id: 1,
        title: "",
        savedPomodoro: 0,
        savedLongBreak: 0,
        savedShortBreak: 0,
        done: false,
        favorites: false,
      },
    ],

    updatedOrder: [
      {
        id: 1,
        title: "",
        savedPomodoro: 0,
        savedLongBreak: 0,
        savedShortBreak: 0,
        done: false,
        favorites: false,
      },
    ],
  };

  const [dragAndDrop, setDragAndDrop] = useState(dragState);

  const dragStart = (e: any) => {
    const initialPosition = Number(e.currentTarget.dataset.position);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: lists,
    });
  };

  const dragOver = (e: any) => {
    e.preventDefault();
    let newList = dragAndDrop.originalOrder;
    const draggedFrom = dragAndDrop.draggedFrom;
    const draggedTo = Number(e.currentTarget.dataset.position);
    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter(
      (item, index) => index !== draggedFrom
    );
    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };

  const onDrop = (e: any) => {
    setLists(dragAndDrop.updatedOrder);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: 0,
      draggedTo: 0,
      isDragging: false,
    });
  };

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
        aboutModal: false,
        favoritesModal: false,
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
      aboutModal: modalView.aboutModal,
      favoritesModal: modalView.favoritesModal,
    });

    if (lists !== Lists) {
      setLists(Lists);
    }
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
      aboutModal: false,
      favoritesModal: false,
    });
  };

  const time_convert = (num: any) => {
    var minutes = Math.floor(num / 60);
    var seconds = num % 60;
    return minutes + "m:" + seconds + "s";
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

      Notification.requestPermission().then(() => {
        new Notification(`Added todo: ${todoTitle}:`, {
          body: `Duration: ${pomodoroDuration}`,
          timestamp: 500,
        });
      });
    }

    if (lists !== Lists) {
      setLists(Lists);
    }
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const updateOrder = () => {
    dispatch({
      type: UPDATE_ORDER,
      lists: lists,
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkFavorites = () => {
    /*eslint-disable*/

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

  useEffect(() => {
    let interval: any = null;
    console.log(JSON.stringify(allState));
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
    setTitle,
    toggleTimer,
    timer,
    longBreak,
    shortBreak,
    pomodoroDuration,
    autoPomodoro.status,
    autoPomodoro.longBreakLimit,
    autoPomodoro.shortBreakLimit,
    autoPomodoro.pomodoroLimit,
    PomodoroSuggestion,
    toggle,
    setSpecifiedTimer,
    checkFavorites,
    Lists,
  ]);

  useHotkeys("shift+p", () => toggle());
  useHotkeys("shift+[", () => setToggleTimer(false));
  useHotkeys("shift+a", () => setAutoTimer());
  useHotkeys("shift+r", () => resetTimer());

  const validationSchema = Yup.object().shape({
    todoName: Yup.number().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={getTodo}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {(formikBag: any) => (
        <Form>
          <>
            <Label type="h2" align="center" weight="bold">
              <span style={{ fontFamily: "'Orbitron', sans-serif" }}>
                Timer: <br />
                {time_convert(timer)}
              </span>
            </Label>
            <PomodoroListChild percentWidth={30}>
              <Button
                theme="dark"
                width={100}
                onClick={toggle}
                disabled={toggleTimer === false ? true : false}
              >
                &#10074;&#10074;
              </Button>
              <Button
                theme="dark"
                width={100}
                onClick={toggle}
                disabled={toggleTimer === true ? true : false}
              >
                &#9655;
              </Button>
              <Button theme="dark" width={100} onClick={resetTimer}>
                ↻
              </Button>
            </PomodoroListChild>
            {modalView.todoModal &&
              renderTimerModal({
                modalView,
                setModalView,
                editTodo,
                setEditTodo,
                updateTodoList,
              })}
            {modalView.timerModal &&
              renderTodoModal({
                shortBreakState,
                longBreakState,
                pomodoroDurationState,
                setShortBreakState,
                setlongBreakState,
                setpomodoroDurationState,
                setModalView,
                updateTimer,
              })}
            {modalView.aboutModal &&
              renderAboutModal({ modalView, setModalView })}
            {modalView.favoritesModal &&
              renderFavoritesModal({ setModalView, modalView, setTodoTitle })}
            <RenderPomodoroInput
              pomodoroDuration={pomodoroDuration}
              longBreak={longBreak}
              shortBreak={shortBreak}
              getTodo={getTodo}
              todoTitle={todoTitle}
              setTodoTitle={setTodoTitle}
              setAutoTimer={setAutoTimer}
              setSpecifiedTimer={setSpecifiedTimer}
              modalView={modalView}
              setModalView={setModalView}
              autoPomodoro={autoPomodoro}
              handleSubmit={formikBag.handleSubmit}
              todoName={initialValues.todoName}
            />
            {renderTodoList({
              lists,
              Lists,
              editTodoList,
              deleteTodo,
              setSpecifiedTimer,
              dragStart,
              onDrop,
              dragOver,
              setModalView,
              updateOrder,
            })}
          </>
        </Form>
      )}
    </Formik>
  );
};

IndexPage.displayName = "Pomodoro";
export default IndexPage;
