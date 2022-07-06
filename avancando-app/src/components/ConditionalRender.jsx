import React from "react";
import { useState } from "react";

const ConditionalRender = () => {
  const [y] = useState(false);

  const [nome, setNome] = useState("Oliveira");

  return (
    <div>
      <h1>Isso será exibido</h1>
      {y && <p>se Y form verdadeiro apareça!</p>}
      {nome === "Jeferson" ? (
        <div>
          <p>O nome é Jeferson</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
      <button onClick={() => setNome('Jeferson')}>Clique aqui</button>
    </div>
  );
};

export default ConditionalRender;
