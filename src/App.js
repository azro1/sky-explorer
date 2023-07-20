import { useState, useEffect } from 'react';
import './App.css';
import AddCity from './components/AddCity';
import Card from './components/Card';


function App() {

const [city, setCity] = useState([])

  useEffect(() => {
    // get weather from server
    const cityWeather = async () => {
      const response = await fetch("http://localhost:8000/city-conditions")
      const data = await response.json()
      setCity(data)
    }
    cityWeather()
}, [])

  return (
    <div className="wrapper">
       <h1>Sky Explorer</h1>
       <AddCity />
       <Card />
    </div>
  );
}

export default App;
