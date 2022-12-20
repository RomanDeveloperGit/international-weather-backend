import fetch from 'node-fetch';

import {
  WEATHER_API_KEY,
  WEATHER_API_ORIGIN,
  WEATHER_API_UNITS,
  WEATHER_API_PATH,
} from './config.js';

const getLocationURL = (id, language) => {
  if (!id || !language) return null;

  return `${WEATHER_API_ORIGIN}${WEATHER_API_PATH}?id=${id}&lang=${language}&units=${WEATHER_API_UNITS}&appid=${WEATHER_API_KEY}`;
};

const getLocation = async (id, language = 'en') => {
  if (!id) throw 'You must specify the location id at 1 argument!';

  try {
    const data = await fetch(getLocationURL(id, language));
    const parsedData = await data.json();

    const result = {
      id: parsedData.city.id,
      name: parsedData.city.name,
      country: parsedData.city.country,
      days: parsedData.list
        .filter((item, index) => (
          index === 0 ||
          (item.dt_txt.includes('09:00:00') &&
            new Date(item.dt_txt).getDate() !== new Date().getDate())
        ))
        .filter((item, index) => (index <= 3))
        .map((item, index) => ({
          id: index + 1,
          date: item.dt_txt,
          weather: {
            description: item.weather[0].main,
            temperature: item.main.temp,
            cloudiness: item.clouds.all,
            humidity: item.main.humidity,
            wind: item.wind.speed,
          },
        })),
    };

    return result;
  } catch (error) {
    console.error(error);

    return null;
  }
};

export default getLocation;
