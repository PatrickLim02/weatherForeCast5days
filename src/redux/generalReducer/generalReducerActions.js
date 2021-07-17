import { SET_TODAY, SET_5DAYS, SET_DETAILS} from './generalReducerTypes';
import { WEATHER_API_KEY } from '../../shared/constants';
import { getWeatherList5Days, getWeatherToday } from '../../helpers/request';
export const setToday = (payload) => {
  return {
    type: SET_TODAY,
    payload,
  }
}
export const set5Days = (payload) => {
  return {
    type: SET_5DAYS,
    payload,
  }
}

export const fetchToday = () => {
  return async (dispatch) => {
    const params = {
      q: 'Jakarta',
      appid: WEATHER_API_KEY
    }
    const responseToday = await getWeatherToday(params)
    dispatch(setToday(responseToday))
  }
}

export const fetchForeCast = () => {
  return async (dispatch) => {
    const params = {
      q: 'Jakarta',
      appid: WEATHER_API_KEY
    }
    const response5Days = await getWeatherList5Days(params)
    dispatch(set5Days(response5Days))
  }
}

export const setDetails = (payload) => {
  return {
    type: SET_DETAILS,
    payload,
  }
}