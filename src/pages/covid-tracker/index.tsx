import React from "react";
import {useDispatch} from 'react-redux'
import CovidInfo from "./covid-info";
import * as actions from '../../ducks/covid-tracker/actions'


import {useSelector} from 'react-redux'
const IndexPage: React.FC = () => {
  const dispatch = useDispatch();
  const OverAll = useSelector((state: any) => state.OverAll)
 
  return (    
    <>
      <button onClick={() => dispatch(actions.getInfoRequest())}>GET</button>
      <p>Cases: {JSON.stringify(OverAll)}</p>
      <CovidInfo />
    </>
  );
};

IndexPage.displayName = "CovidTrackerPage";
export default IndexPage;
