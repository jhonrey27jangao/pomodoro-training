import React from "react";
import Pomodoro from "./Pomodoro/";

const IndexPage: React.FC = () => (
  <div id="main">
    <Pomodoro />
  </div>
);

IndexPage.displayName = "Main Page";
export default IndexPage;
