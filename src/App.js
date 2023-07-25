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
        // post city to back-end that user types in form input field
        const res_1 = await fetch("http://localhost:8000/city", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({city})
        })
        
        // grab error off json object sent from post route on server and use its value to throw new error to client
        if (!res_1.ok) {
          const error = await res_1.json()
          throw new Error(error.msg)
        }

        const newCity = await res_1.json()
        setUserCity(newCity)

    } catch (err) {
        setErrors(err.message)
    }


    // get request to send state route parameter to back-end
    const res_2 = await fetch(`http://localhost:8000/weather/${city}`)
    const newCityWeather = await res_2.json()
    setCityWeather(newCityWeather)
    setErrors(null)
  }

  

  return (
    <div className="wrapper">
       <h1>Sky Explorer</h1>
       <AddCity getCityWeather={getCityWeather} />
       {cityWeather && <Card userCity={userCity} cityWeather={cityWeather} errors={errors} />}
       {errors && <p>{errors}</p>}
       {cityWeather && <Credits cityWeather={cityWeather} />}
    </div>
  );
}

export default App;

