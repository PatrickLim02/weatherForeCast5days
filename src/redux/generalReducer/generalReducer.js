import {SET_5DAYS, SET_TODAY, SET_DETAILS} from './generalReducerTypes'

const initialState = {
    todays : {},
    fiveDaysList: {},
    details: {}
}

const generalReducer = (state = initialState, action) =>{
    switch(action.type) {
        case SET_TODAY: return {
            ...state,
            todays: {
              ...state.todays,
              ...action.payload,
            }
          }
          case SET_5DAYS: return {
            ...state,
            fiveDaysList: {
              ...state.fiveDaysList,
              ...action.payload,
            }
          }
          case SET_DETAILS: return {
            ...state,
            details: {
              ...state.details,
              ...action.payload,
            }
          }
        default : return state;
    }
}

export default generalReducer;