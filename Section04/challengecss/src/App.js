import "./App.css";
import Car from "./components/Car";

function App() {
  const cars = [
    { name: "Astra", km: 221555, color: "Prata" },
    { name: "Logan", km: 19308, color: "Prata" },
    { name: "Celta", km: 8432, color: "Prata" },
    { name: "Corsa", km: 14598, color: "Preto" },
  ];
  return (
    <div className="App">
      <h1>Lista de Carros</h1>
      <div className="car-container">
        {cars.map((car) => (
          <Car car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
