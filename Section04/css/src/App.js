import "./App.css";
import MyComponent from "./components/MyComponent";

import { useState } from "react";
import Title from "./components/Title";

function App() {
  const n = 15;

  const [name] = useState("Skye");
  const redTitle = false;

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de Componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* Inline CSS */}
      <p
        style={{
          color: "blue",
          padding: "25px",
          borderTop: "2px solid orange",
        }}
      >
        Este elemento foi estilizado de forma inline
      </p>
      <p
        style={{
          color: "blue",
          padding: "25px",
          borderTop: "2px solid orange",
        }}
      >
        Este elemento foi estilizado de forma inline
      </p>
      {/* CSS Inline Dinâmico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "lightGreen" }}>
        CSS Dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "lightGreen" }}>
        CSS Dinâmico
      </h2>
      <h2
        style={
          name === "Skye"
            ? { color: "lightBlue", backgroundColor: "#000" }
            : null
        }
      >
        Teste nome
      </h2>
      {/* Classe  Dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica
      </h2>
      {/* CSS Modules */}
      <Title />
      <h2 className="my_title"> Testando</h2>
    </div>
  );
}

export default App;
