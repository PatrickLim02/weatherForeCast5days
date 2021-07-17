import Wrap from './axiosWrapper';

export const getWeatherToday = (params = {}) => {
  return Wrap({
    url: '/data/2.5/weather',
    method: 'GET',
    params : {...params},
  });
};

export const getWeatherList5Days = (params = {}) => {
  return Wrap({
    url: '/data/2.5/forecast',
    method: 'GET',
    params : {...params},
  });
};

