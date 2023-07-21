import { useState } from 'react';
import './AddCity.css'

const AddCity = () => {
  const [city, setCity] = useState('')
  console.log(city)

  return (
    <form autoComplete='off'>
        <label>Enter a city to get up-to-date weather information
            <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
        {city}
    </form>
  )
}

export default AddCity
