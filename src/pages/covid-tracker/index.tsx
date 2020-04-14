import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CountryInfo from "./country-info";
import CovidInfo from "./covid-info";

import * as actions from "../../ducks/covid-tracker/actions";

import { useSelector } from "react-redux";

const IndexPage: React.FC = () => {
  const dispatch = useDispatch();
  const info = useSelector((state: any) => state.getInfoReducer.info);
  const countries = useSelector(
    (state: any) => state.getCountriesReducer.countries
  );

  useEffect(() => {
    dispatch(actions.getInfoRequest());
    dispatch(actions.getCountriesRequest());
  }, [dispatch]);

  return (
    <>
      <CovidInfo info={info} />
      <CountryInfo countries={countries} />
    </>
  );
};

IndexPage.displayName = "CovidTrackerPage";
export default IndexPage;
