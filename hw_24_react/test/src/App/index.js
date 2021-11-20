import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import About from '../containers/About.js';
import WorldCat from '../containers/WorldCat';
import WorldAfter from '../containers/WorldAfter';
import FuckingCat from '../containers/FuckingCat';
import { Routes, Route } from 'react-router-dom';
import style from './appStyle.module.css'

function App() {
  return (
    <div className={style.mainPage}>
      <Header />
      <Routes>
        <Route exact path='/about' element={ <About /> } />
        <Route exact path='/worldOfCats' element={ <WorldCat /> } />
        <Route exact path='/worldAfter' element={ <WorldAfter /> } />
        <Route exact path='/badCats' element={ <FuckingCat /> } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
