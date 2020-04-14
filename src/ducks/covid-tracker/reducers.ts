import * as actions from './actions'

const covidTrackerState = {
    loading: false,
    info: []
}

export const covidTrackerReducer = (state: any = covidTrackerState, action: any ) => {
    switch(action.type) {
        case actions.GET_INFO_REQUEST:       
            state = {
                ...state,
                loading: true
            }
            console.log(action.type)
        return state;
        
        case actions.GET_INFO_SUCCESS:
            state = {
                ...state,
                info: [{...action.payload}],
                loading: false,
            }
            console.log(state)
            console.log(action.type, "DATA:", action.payload)
        return state;
        case actions.GET_INFO_FAILURE:
            state = {
                ...state,
                loading: false
            }
            console.log(action.type)
        return state;
        default:
        return state;
    }
}