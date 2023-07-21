import { useState } from 'react';
import './AddCity.css'

const AddCity = ({ getCityWeather }) => {
  const [city, setCity] = useState('')

  return (
    <form autoComplete='off' onSubmit={(e) => {
      e.preventDefault()
      getCityWeather(city)
    }}>
        <label>Enter a city to get up-to-date weather information
            <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
    </form>
  )
}

export default AddCity
