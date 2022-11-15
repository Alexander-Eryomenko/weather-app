import axios from 'axios';

const baseWeatherUrl = 'https://weatherapi-com.p.rapidapi.com';

export const requestSearch = (city = 'London') => {
  const params = {
    q: city
  };
  return performRequest('search.json', params);
};

export const requestSportsNews = (city = 'Kharkiv') => {
  const params = {
    q: city
  };
  return performRequest('sports.json', params);
};

export const requestHistoryWeather = (city = 'Kharkiv', date = new Date().toString()) => {
  const params = {
    q: city,
    dt: date
  };
  return performRequest('history.json', params);
};

export const requestForecastWeather = (city = 'Kharkiv', days = '3') => {
  const params = {
    q: city,
    days
  };
  return performRequest('forecast.json', params);
};

const performRequest = async ( path, params ) => {
  const options = {
    method: 'GET',
    url: [baseWeatherUrl, path].join('/'),
    params: params,
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
      'Content-Type': 'application/json'
    }
  };
  try {
    const response = await axios.request(options);
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};
