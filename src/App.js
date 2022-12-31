import logo from './penguin.svg';
import './App.css';
import './Time';
function App() {
  return (
    <main>
    <h1 id="title">Cargando Tarjeta de Cumpleaños</h1>
    <div>
      <img id="me" src={logo} alt=""/>
    </div>
    <div class="box">
      <div class="loading-box"></div>
    </div>
    <h3 id="state-message">Cargando...</h3>
    <h2 id="result">&nbsp;</h2>
  </main>
  );
}

export default App;
