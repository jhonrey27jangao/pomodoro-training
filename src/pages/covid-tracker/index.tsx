import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CovidInfo from "./covid-info";
import * as types from "./types";
import * as actions from "../../ducks/covid-tracker/actions";

import { useSelector } from "react-redux";
const IndexPage: React.FC = () => {
  const dispatch = useDispatch();
  const info = useSelector((state: any) => state.covidTrackerReducer.info);

  useEffect(() => {
    dispatch(actions.getInfoRequest());
  }, []);

  return (
    <>
      <CovidInfo info={info} />
    </>
  );
};

IndexPage.displayName = "CovidTrackerPage";
export default IndexPage;
