import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CountryInfo from "./country-info";
import CovidInfo from "./covid-info";
import SignUpForm from "./signup";
import { Modal } from "../../components/modal/modal";
import * as actions from "../../ducks/covid-tracker/actions";

const IndexPage: React.FC = () => {
  const dispatch = useDispatch();
  const info = useSelector((state: any) => state.getInfoReducer.info);
  const countries = useSelector(
    (state: any) => state.getCountriesReducer.countries
  );

  const [showSignUp, setShowSignUp] = useState(true);

  useEffect(() => {
    dispatch(actions.getInfoRequest());
    dispatch(actions.getCountriesRequest());
  }, [dispatch]);

  return (
    <>
      {showSignUp && (
        <Modal
          modalTitle="Sign up First:"
          width={500}
          onClose={() => setShowSignUp(false)}
        >
          <SignUpForm />
        </Modal>
      )}
      <CovidInfo info={info} />
      <CountryInfo countries={countries} worldInfo={info} />
    </>
  );
};

IndexPage.displayName = "CovidTrackerPage";
export default IndexPage;
