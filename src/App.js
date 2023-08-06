import { useState } from 'react';
import './App.css';
import AddCity from './components/AddCity';
import Card from './components/Card';
import Credits from './components/Credits';

function App() {
  const [userCity, setUserCity] = useState(null)
  const [cityWeather, setCityWeather] = useState(null)
  const [errors, setErrors] = useState(null)

  // get weather from server
  const getCityWeather = async (city) => {

    // added try catch to handle server errors on front-end
    try {
      // fetch post to lambda function (getcity.js) to post city that user types in form input field
      const cityResponse = await fetch("/.netlify/functions/getcity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({city})
      })
      // grab error off json object sent from post route on server and use its value to throw new error to client
      if (!cityResponse.ok) {
        const error = await cityResponse.json()
        throw new Error(error.msg)
      }
      const cityData = await cityResponse.json()
      // console.log(data)
      const cityKey = cityData.city.Key;
      setErrors(null)
      setUserCity(cityData)
        
      // using city location key returned from first fetch to make subsequent post request to lambda function (getweather.js) to get weather conditions
      const weatherResponse = await fetch("/.netlify/functions/getweather", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({cityKey})
      })
      if (!weatherResponse.ok) {
        const error = await weatherResponse.json()
        throw new Error(error.msg)
      } 
        const weatherData = await weatherResponse.json()
        // console.log(location)
        setErrors(null)
        setCityWeather(weatherData)

    } catch (err) {
        console.log('rejected:', err.message)
        setErrors("oops, let's try that again .. 😒")
    }
  }
  return (
    <div className="wrapper">
       <h1>Sky Explorer</h1>
       <AddCity getCityWeather={getCityWeather} />
       {cityWeather && <Card userCity={userCity} cityWeather={cityWeather} errors={errors} />}
       {errors && <p>{errors}</p>}
       {cityWeather && <Credits cityWeather={cityWeather} errors={errors} />}
    </div>
  );
}

export default App;

