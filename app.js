const PORT = 8000;
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const key = process.env.REACT_APP_API_KEY;


const app = express()
app.use(cors())


app.get('/city-conditions', (req, res) => {

    // get city information
    const getCity = async (location) => {
      const baseUrl = 'https://dataservice.accuweather.com/locations/v1/cities/search';
      const query = `?apikey=${key}&q=${location}`;

      const response = await fetch(baseUrl + query)
      const data = await response.json()
      return data[0]
    };

    // get weather information
    const getWeather = async (id) => {
      const baseUrl = 'https://dataservice.accuweather.com/currentconditions/v1/'
      const query = `${id}?apikey=${key}`;
  
      const response = await fetch(baseUrl + query)
      const data = await response.json()
      res.send(data[0]);
    };
  
    getCity('Hong Kong')
    // return the call to getWeather function directly here and pass in the Key property on the data object as the argument
    .then(data => getWeather(data.Key))
    .catch(err => console.log(err))
})


app.listen(PORT, () => console.log(`server is running on port ${PORT}`))

