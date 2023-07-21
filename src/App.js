import './App.css';
import AddCity from './components/AddCity';
import Card from './components/Card';


function App() {


    // get weather from server
    const getCityWeather = async () => {
      const response = await fetch("http://localhost:8000/city", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({})
      })
      const data = await response.json()
      console.log(data)
    }


  return (
    <div className="wrapper">
       <h1>Sky Explorer</h1>
       <AddCity />
       <Card />
    </div>
  );
}

export default App;

