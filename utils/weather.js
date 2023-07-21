require('dotenv').config();
const key = process.env.REACT_APP_API_KEY;

// get city information
const getCity = async (location) => {
  const baseUrl =
    'https://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${location}`;

  const response = await fetch(baseUrl + query);
  const data = await response.json();
  return data[0];
};

// get weather information
const getWeather = async (id) => {
  const baseUrl = 'https://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(baseUrl + query);
  const data = await response.json();
  return (data[0]);
};

module.exports = { getCity, getWeather }