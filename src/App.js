import './App.css';
import AddCity from './components/AddCity';
import Card from './components/Card';

function App() {
  return (
    <div className="wrapper">
       <h1>Sky Explorer</h1>
       <AddCity />
       <Card />
    </div>
  );
}

export default App;
