import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { store } from "../ducks/index";
import Pomodoro from "./pomodoro-new";
import CovidTracker from "./covid-tracker/";
import { SideBar } from "../components/sidebar/sidebar";
import { Content } from "../components/content/content";

const HomePage: React.FC = () => (
  <div>
    <p>Work in process..</p>
  </div>
);

const IndexPage: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div id="main">
          <SideBar />
          <Content title="">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/pomodoro" component={Pomodoro} />
              <Route path="/covid-tracker" component={CovidTracker} />
            </Switch>
          </Content>
        </div>
      </Router>
    </Provider>
  );
};
IndexPage.displayName = "Main Page";
export default IndexPage;
