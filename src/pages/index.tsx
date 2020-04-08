import React from "react";
import { Provider } from "react-redux";
import { store } from "../ducks/index";

import Pomodoro from "./Pomodoro/";
// import CovidTracker from './covid-tracker/'

const IndexPage: React.FC = () => (
  <Provider store={store}>
  <div id="main">
    <Pomodoro />
    {/* <CovidTracker/> */}
  </div>
  </Provider>

);

IndexPage.displayName = "Main Page";
export default IndexPage;
