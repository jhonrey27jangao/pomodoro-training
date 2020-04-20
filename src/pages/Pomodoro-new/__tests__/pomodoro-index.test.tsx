import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import PomodoroApp from "../index";
import { Formik } from "formik";

describe("Test for Index Pomodoro App", () => {
  const mockStore = configureStore();
  let store: any;
  let initialState: any;

  beforeEach(() => {
    initialState = {
      pomodoroReducer: {
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
          {
            id: 2,
            title: "Taena KO",
            savedPomodoro: 25,
            savedLongBreak: 15,
            savedShortBreak: 10,
            done: true,
            favorites: true,
          },
        ],
      },
    };
    store = mockStore(initialState);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the component", () => {
    const { container, queryAllByText } = render(
      <Formik initialValues={initialState} onSubmit={() => {}}>
        {() => (
          <Provider store={store}>
            <PomodoroApp />
          </Provider>
        )}
      </Formik>
    );
    expect(container).toMatchSnapshot();
    /* 
    test play 
    */
    fireEvent.click(queryAllByText("❚❚")[0]);
    fireEvent.click(queryAllByText("▷")[0]);
    fireEvent.click(queryAllByText("↻")[0]);
    /*
     Add Todo
    */
    fireEvent.change(document.getElementById("todoName") as HTMLElement, {
      target: { value: "AddedTodo" },
    });

    fireEvent.click(queryAllByText("Add Todo")[0]);
    fireEvent.click(queryAllByText("Play")[0]);
    fireEvent.click(queryAllByText("Delete")[0]);
    /*
    trigger general buttons
    */
    fireEvent.click(queryAllByText("Auto")[0]);
    fireEvent.click(queryAllByText("Manual")[0]);
    fireEvent.click(queryAllByText("Pomodoro")[0]);
    fireEvent.click(queryAllByText("L-Break")[0]);
    fireEvent.click(queryAllByText("S-break")[0]);
    fireEvent.click(queryAllByText("About")[0]);
    fireEvent.click(queryAllByText("X")[0]);
    /*
    modify time settings
    */
    fireEvent.click(queryAllByText("Settings")[0]);
    fireEvent.click(queryAllByText("X")[0]);
    fireEvent.click(queryAllByText("Settings")[0]);
    fireEvent.change(document.getElementById("PDuration") as HTMLElement, {
      target: { value: "30" },
    });
    fireEvent.change(document.getElementById("LBreak") as HTMLElement, {
      target: { value: "20" },
    });
    fireEvent.change(document.getElementById("SBreak") as HTMLElement, {
      target: { value: "15" },
    });
    fireEvent.click(queryAllByText("Update")[0]);
    /*
     Drag Item
    */
    fireEvent.drag(queryAllByText("Taena hehe")[0]);
    fireEvent.dragOver(queryAllByText("Taena hehe")[0]);
    fireEvent.drop(queryAllByText("Taena hehe")[0]);
    /*
     Edit Todo
    */
    fireEvent.click(queryAllByText("✎")[0]);
    fireEvent.click(queryAllByText("X")[0]);
    fireEvent.click(queryAllByText("✎")[0]);
    fireEvent.click(queryAllByText("Done")[0]);
    fireEvent.click(queryAllByText("Added to favorites")[0]);
    fireEvent.change(document.getElementById("editTodoInput") as HTMLElement, {
      target: { value: "adsadsad" },
    });
    fireEvent.click(queryAllByText("Update Todo")[0]);
    /*
    Pick fav
    */
    fireEvent.click(queryAllByText("Show Favorites")[0]);
    fireEvent.click(queryAllByText("X")[0]);
    fireEvent.click(queryAllByText("Show Favorites")[0]);
    fireEvent.click(queryAllByText("Taena hehe")[0]);
  });
});
