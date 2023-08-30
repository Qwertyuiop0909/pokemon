import "./App.css";
import Main from "./components/Main/Main";

export default function App() {
  return <div className="App">
    <div className="container">
      <header>
        <div className="label">
          ПОКЕМОНЫ API
        </div>
        <div className="info">
          <img src="/img/Icon.png" alt="icon"/>
          <div>Нажмите на<br />нужное Покемона</div>
        </div>
      </header>
      <Main />
    </div> 
    
  </div>;
}
