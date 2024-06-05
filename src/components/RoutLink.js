import React from 'react';
import { NavLink } from 'react-router-dom';

function RoutLink(){

  return (
    <nav>
      <ul>
        <li>
          <NavLink  to="/" exact >Home</NavLink>
        </li>
        <li>
          <NavLink to="/allProducts">AllProducts</NavLink>
        </li>
        <li>
          <NavLink to="/Search">Search</NavLink>
        </li>
      </ul>
    </nav>
  );
};export default RoutLink;