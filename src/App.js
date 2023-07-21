import { useState } from 'react';
import './App.css';
import AddCity from './components/AddCity';
import Card from './components/Card';


function App() {
const [city, setCity] = useState([])


    // get weather from server
    const getCityWeather = async () => {
      const response = await fetch("http://localhost:8000/city")
      const data = await response.json()
      console.log(data)
    }
    getCityWeather()


  return (
    <div className="wrapper">
       <h1>Sky Explorer</h1>
       <AddCity />
       <Card />
    </div>
  );
}

export default App;

