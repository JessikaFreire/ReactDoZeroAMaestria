import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("Jesse");
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso!</p>}
      {name === "Beca" ? (
        <div>
          <p>O nome é Beca</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
      <button onClick={() => setName("Beca")} >Clica aqui</button>
    </div>
  );
};

export default ConditionalRender;
