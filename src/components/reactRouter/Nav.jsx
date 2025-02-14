import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <>
      <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <li>
          <NavLink to={'/a'}>Component A</NavLink>
        </li>
        <li>
          <NavLink to={'/b'}>Component B</NavLink>
        </li>
        <li>
          <NavLink to={'/services'}>Services</NavLink>
        </li>
      </ul>
     
    </>
  );
}

export default Nav;
