import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { store } from "../ducks/index";

import { SideBar } from "../components/sidebar/sidebar";
import { Content } from "../components/content/content";

import Pomodoro from "./pomodoro-new";
import CovidTracker from "./covid-tracker/";

const HomePage: React.FC = () => <div></div>;

const IndexPage: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div id="main">
          <SideBar />
          <Content title="Pomodoro">
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
