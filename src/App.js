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
      const res1 = await fetch("/.netlify/functions/getcity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({city})
      })
      // grab error off json object sent from post route on server and use its value to throw new error to client
      if (!res1.ok) {
        const error = await res1.json()
        throw new Error(error.msg)
      }
      let data = await res1.json()
      // console.log(data)
      let cityKey = data.city.Key;
      setErrors(null)
      setUserCity(data)
        
      // using city location key returned from first fetch to make subsequent post request to lambda function (getweather.js) to get weather conditions
      const res2 = await fetch("/.netlify/functions/getweather", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({cityKey})
      })
      if (!res2.ok) {
        const error = await res1.json()
        throw new Error(error.msg)
      } 
        let location = await res2.json()
        // console.log(location)
        setErrors(null)
        setCityWeather(location)

    } catch (err) {
        console.log('rejected:', err.message)
        setErrors("Oh dear :( let's try that again..")
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

