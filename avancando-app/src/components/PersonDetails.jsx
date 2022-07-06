import React from "react";

const PersonDetails = ({ name, peso, color }) => {
  return (
    <div>
      <h2>Caracteristicas da pessoa</h2>
      <ul>
        <li>Nome: {name}</li> 
        <li>Pesso: {peso}</li>
        <li>Cor de pele: {color} </li>
      </ul>
    </div>
  );
};

export default PersonDetails;
