import fetch from 'node-fetch';

import {
  WEATHER_API_KEY,
  WEATHER_API_ORIGIN,
  WEATHER_API_UNITS,
  WEATHER_API_PATH,
} from './config.js';

const getCityURL = (city, language) => {
  if (!city || !language) return null;

  return `${WEATHER_API_ORIGIN}${WEATHER_API_PATH}?q=${city}&lang=${language}&units=${WEATHER_API_UNITS}&appid=${WEATHER_API_KEY}`;
};

const getLocationList = async (cities = [], language = 'en') => {
  try {
    const result = await Promise.all(cities.map(async (city) => {
      const data = await fetch(getCityURL(city, language));
      const parsedData = await data.json();

      return {
        id: parsedData.city.id,
        name: parsedData.city.name,
        country: parsedData.city.country,
      };
    }));

    return result;
  } catch (error) {
    console.error(error);

    return null;
  }
};

export default getLocationList;
