import "./App.css";
import UserDetails from "./components/UserDetails";

function App() {
  const users = [
    { id: 1, name: "Beca", job: "Cantora/Produtora Musical", age: 30 },
    { id: 2, name: "Chloe", job: "Veterinária", age: 32 },
    { id: 3, name: "Aubrey", job: "Advogada", age: 33 },
    { id: 4, name: "Bella", job: "Estudante", age: 5 },
  ];

  return (
    <div>
      <h1>Desafio</h1>
      {users.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          job={user.job}
          age={user.age}
        />
      ))}
    </div>
  );
}

export default App;
