import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import About from '../containers/About.js';
import WorldCat from '../containers/WorldCat';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/about' element={ <About /> } />
        <Route exact path='/worldOfCats' element={ <WorldCat /> } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
