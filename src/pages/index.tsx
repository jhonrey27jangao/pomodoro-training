import React from "react";
import Pomodoro from "./Pomodoro/";
import CovidTracker from './covid-tracker/'

const IndexPage: React.FC = () => (
  <div id="main">
    <Pomodoro />
    <CovidTracker/>
  </div>
);

IndexPage.displayName = "Main Page";
export default IndexPage;
