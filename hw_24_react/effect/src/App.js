import logo from './logo.svg';
import './App.css';
import Checkbox from './components/Checkbox';
import Phrase from './components/Phrase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    <Phrase />
      </header>
    </div>
  );
}

export default App;
