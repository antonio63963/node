import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <div>
       <NavLink to='/about'> About Us </NavLink>
       <NavLink to='/worldOfCats'> World of cats </NavLink>
       <NavLink to='/worldAfter'> World of cats </NavLink>
    </div>
  )
};

export default Header;