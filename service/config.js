import dotenv from 'dotenv';

dotenv.config();

export const WEATHER_API_ORIGIN = 'http://api.openweathermap.org';
export const WEATHER_API_PATH = '/data/2.5/forecast';
export const WEATHER_API_UNITS = 'metric';
export const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export const CITY_LIST = [
  'Moscow',
  'Saint Petersburg',
  'Ekaterinburg',
  'Novosibirsk',
  'Kazan',
  'Nizhny Novgorod',
  'Chelyabinsk',
  'Ufa',
  'Omsk',
  'Perm',
  'Tula',
  'London',
  'Sidney',
  'Longford',
  'New York',
  'Denver',
  'Washington',
  'Paris',
  'Bordeaux',
  'Marrakech',
  'Ho Chi Minh City',
  'David',
];
