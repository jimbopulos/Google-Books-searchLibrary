import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <ul className='navbar-nav'>
        <a className='navbar-brand' href='/'>
          Google Books
        </a>
        <li className='nav-item'>
          <Link to='/search' className='nav-link'>
            Search
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/saved' className='nav-link'>
            Saved
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
