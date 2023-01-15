import { useState } from "react";
import "./App.css";

import Varsovia from "./assets/image2.jpg";
import CarDetails from "./components/CarDetails";
import ChangeMessageState from "./components/ChangeMessageState";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Fragment from "./components/Fragment";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import Message from "./components/Message";
import ShowUserName from "./components/ShowUserName";

function App() {
  const name = "Chloe";
  const [userName] = useState("Aubrey");

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branca", newCar: false, km: 34343 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 },
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/image1.jpg" alt="Paris" />
      </div>
      {/* Imagem em asset */}
      <div>
        <img src={Varsovia} alt="Varsóvia" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* Props */}
      <ShowUserName name="Beca" />
      <ShowUserName name={name} />
      {/* Destructuring */}
      <ShowUserName name={userName} />
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* Reaproveitando */}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* Fragments */}
      <Fragment propFragment="teste" />
      {/* Children */}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <p>Testando o container</p>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* State lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
