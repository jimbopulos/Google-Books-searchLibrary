import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/search'>Search</Link>
        </li>
        <li>
          <Link to='/saved'>Saved</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
