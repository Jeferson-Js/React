import { useState } from "react";
import "./App.css";
import Paisagem from "./assets/paisagem.png";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import PersonDetails from "./components/PersonDetails";
import ShowUserName from "./components/ShowUserName";
const App = () => {
  const name = "Bruno";

  const [userName] = useState("Maria");

  return (
    <div className="central">
      <h1>Avançando em React</h1>
      {/*Insert image in plublic*/}
      <div>
        <img src="/img/paisagem.png" alt="Paisagem" />
      </div>
      {/*Insert image in assets*/}
      <div>
        <img src={Paisagem} alt="paisagem" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={name} />
      <ShowUserName name="Jeferson" />
      <ShowUserName name={userName} />
      <PersonDetails name="Jeferson" peso="98" color="Negro"/>
    </div>
  );
};

export default App;
