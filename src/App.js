import { useState } from 'react';
import './App.css';
import AddCity from './components/AddCity';
import Card from './components/Card';
import Credits from './components/Credits';

function App() {
  const [userCity, setUserCity] = useState(null)
  const [cityWeather, setCityWeather] = useState(null)

  // get weather from server
  const getCityWeather = async (city) => {

    // post city to back-end that user types in form input field
    const response = await fetch("http://localhost:8000/city", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({city})
    })
    const location = await response.json()
    setUserCity(location)

    // get request to send state route parameter to back-end
    const res = await fetch(`http://localhost:8000/weather/${city}`)
    const conditions = await res.json()
    setCityWeather(conditions)
  }

  return (
    <div className="wrapper">
       <h1>Sky Explorer</h1>
       <AddCity getCityWeather={getCityWeather} />
       {cityWeather && <Card userCity={userCity} cityWeather={cityWeather} />}
       {cityWeather && <Credits cityWeather={cityWeather} />}
    </div>
  );
}

export default App;

