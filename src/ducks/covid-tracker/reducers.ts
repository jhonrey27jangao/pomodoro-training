import * as actions from "./actions";

const covidTrackerState = {
  loading: false,
  info: {
    cases: 0,
    deaths: 0,
    recovered: 0,
  },
  countries: [],
};

export const getInfoReducer = (state: any = covidTrackerState, action: any) => {
  switch (action.type) {
    case actions.GET_INFO_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      return state;

    case actions.GET_INFO_SUCCESS:
      state = {
        ...state,
        info: { ...action.payload },
        loading: false,
      };
      return state;
    case actions.GET_INFO_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      return state;
    default:
      return state;
  }
};

export const getCountriesReducer = (
  state: any = covidTrackerState,
  action: any
) => {
  switch (action.type) {
    case actions.GET_COUNTRIES_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      return state;
    case actions.GET_COUNTRIES_SUCCESS:
      state = {
        ...state,
        countries: [...action.payload],
        loading: false,
      };
      return state;
    case actions.GET_COUNTRIES_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      return state;
    default:
      return state;
  }
};
