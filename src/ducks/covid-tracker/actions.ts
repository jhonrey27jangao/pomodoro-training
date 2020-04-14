export const GET_INFO_REQUEST = "GET_INFO_REQUEST";
export const GET_INFO_SUCCESS = "GET_INFO_SUCCESS";
export const GET_INFO_FAILURE = "GET_INFO_FAILURE";
export const GET_COUNTRIES_REQUEST = "GET_COUNTRIES_REQUEST";
export const GET_COUNTRIES_SUCCESS = "GET_COUNTRIES_SUCCESS";
export const GET_COUNTRIES_FAILURE = "GET_COUNTRIES_FAILURE";

export const getInfoRequest = () => {
  return {
    type: GET_INFO_REQUEST,
  };
};

export const getInfoSuccess = (data: any) => {
  return {
    type: GET_INFO_SUCCESS,
    payload: data,
  };
};

export const getInfoFailure = (error: any) => {
  return {
    type: GET_INFO_FAILURE,
    payload: error,
  };
};

export const getCountriesRequest = () => {
  return {
    type: GET_COUNTRIES_REQUEST,
  };
};

export const getCountriesSuccess = (data: any) => {
  return {
    type: GET_COUNTRIES_SUCCESS,
    payload: data,
  };
};

export const getCountriesFailure = (error: any) => {
  return {
    type: GET_COUNTRIES_FAILURE,
    payload: error,
  };
};
