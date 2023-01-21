import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Forms</h2>
        <MyForm
          user={{
            name: "Beca",
            email: "bacamitchell@gmail.com",
            bio: "Sou cantora e produtora musical",
            role: "admin",
          }}
        />
      </header>
    </div>
  );
}

export default App;
