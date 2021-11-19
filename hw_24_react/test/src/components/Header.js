import { NavLink } from 'react-router-dom';
import style from './style.module.css';
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
            <NavLink to='/worldAfter'> World of cats </NavLink>
           </li>
         </ul>
       </header>
    </div>
  )
};

export default Header;