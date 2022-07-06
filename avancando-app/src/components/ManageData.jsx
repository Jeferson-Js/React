import React from "react";
import { useState } from "react";

const ManageData = () => {

  const [number, setNumber] = useState(50);

  return (
    <div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(100)}>Mudar variável</button>
      </div>
    </div>
  );
};

export default ManageData;
