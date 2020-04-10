import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { store } from "../ducks/index";

import { SideBar } from "../components/sidebar/sidebar";
import { Content } from "../components/content/content";

import Pomodoro from "./Pomodoro-new/";
import CovidTracker from "./covid-tracker/";

const HomePage: React.FC = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const IndexPage: React.FC = () => (
  <Provider store={store}>
    <Router>
      <div id="main">
        <SideBar />
        <Content>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/Pomodoro" component={Pomodoro} />
            <Route path="/Covid-tracker" component={CovidTracker} />
          </Switch>
        </Content>
      </div>
    </Router>
  </Provider>
);

IndexPage.displayName = "Main Page";
export default IndexPage;
