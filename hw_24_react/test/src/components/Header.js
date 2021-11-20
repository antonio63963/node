import { NavLink, Routes, Route } from 'react-router-dom';
import style from './style.module.css';
import BadCatsLink from '../components/BadCatsLink.js'
function Header() {
  return (
    <div>
       <header className={style.header}>
         <ul>
           <li>
            <NavLink to='/about'> About Us </NavLink>
           </li>
           <li>
            <NavLink to='/worldOfCats'> World of cats </NavLink>
           </li>
           <li>
            <NavLink to='/worldAfter'> World after the cat's world </NavLink>
           </li>
           <Routes>
           <Route exact path='/worldAfter' element={ <BadCatsLink /> } />
           </Routes>
         </ul>
       </header>
    </div>
  )
};

export default Header;