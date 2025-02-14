import { Link, NavLink } from 'react-router-dom';
import './style.css';
function NavBar() {
  return (
    <>
      <ul>
        <li>
          <NavLink
            className={({ isPending, isActive }) =>
              isActive ? 'active' : isPending ? 'pending' : ''
            }>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isPending, isActive }) =>
              isActive ? 'active' : isPending ? 'pending' : ''
            }
            to="about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isPending, isActive }) =>
              isActive ? 'active' : isPending ? 'pending' : ''
            }
            to="services">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isPending, isActive }) =>
              isActive ? 'active' : isPending ? 'pending' : ''
            }
            to="contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isPending, isActive }) =>
              isActive ? 'active' : isPending ? 'pending' : ''
            }
            to="items">
            Items
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
