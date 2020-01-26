import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar'>
      <div className='container'>
        <Link to='/' exact className='navbar-brand'>
          <strong>
            <i className='fa fa-book-open    '></i> 4Shop
          </strong>
        </Link>
        <div className='navbar-collapse' id='navbarSupportedContent-7'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <NavLink className='nav-link ml-5' to='/' exact>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link ml-5' to='/shop' exact>
                Shop
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link ml-5' to='/contact' exact>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
