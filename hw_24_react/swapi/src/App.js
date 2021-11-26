import logo from './logo.svg';
import './App.css';
import Card from './components/card.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <Card />
      </header>
    </div>
  );
}

export default App;
