export const GET_INFO_REQUEST = 'GET_INFO_REQUEST'
export const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS'
export const GET_INFO_FAILURE = 'GET_INFO_FAILURE'

export const getInfoRequest = () => {
    return {
        type: GET_INFO_REQUEST,
    }
}
export const getInfoSuccess = (data: any) => {
    return {
        type: GET_INFO_SUCCESS,
        payload: data
    }
}
export const getInfoFailure = (error: any) => {
    return {
        type: GET_INFO_FAILURE,
        payload: error
    }
}