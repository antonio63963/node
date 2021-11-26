import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import People from './containers/People.js';
import Planets from './containers/Planets.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <header>
          <NavLink className="m10" to="/characters"> Characters </NavLink>
          <NavLink className="m10" to="/planets"> Planets </NavLink>
        </header>
        <Routes>
          <Route exact path="/characters" element={<People/>} />
          <Route exact path="/planets" element={<Planets />} />
        </Routes>
      {/* <Card /> */}
      </header>
    </div>
  );
}

export default App;
