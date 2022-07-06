import "./App.css";
import Paisagem from "./assets/paisagem.png";
import ManageData from "./components/ManageData";
const App = () => {
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
    </div>
  );
};

export default App;
