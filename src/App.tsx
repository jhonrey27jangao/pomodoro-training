import React from "react";
import Main from "./pages";
import { Provider } from "react-redux";
import { store } from "./ducks/index";
const Portfolio: React.FC = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

Portfolio.displayName = "Portfolio";
export default Portfolio;
