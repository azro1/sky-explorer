import './App.css';
import AddCity from './components/AddCity';
import Card from './components/Card';


function App() {
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
      console.log(location)


      // get request to send state route parameter to back-end
      const res = await fetch(`http://localhost:8000/weather/${city}`)
      const weather = await res.json()
      console.log(weather)
    }


  return (
    <div className="wrapper">
       <h1>Sky Explorer</h1>
       <AddCity getCityWeather={getCityWeather} />
       <Card />
    </div>
  );
}

export default App;

