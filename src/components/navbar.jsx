import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <NavLink className='navbar-brand' to='/'>
            Areeb's Vidly
          </NavLink>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <NavLink to='/' className='nav-link'>
                Movies
              </NavLink>
              <NavLink to='/Customers' className='nav-link'>
                Customer
              </NavLink>
              <NavLink to='/Rentals' className='nav-link'>
                Rentals
              </NavLink>
              <NavLink to='/Login' className='nav-link'>
                Login
              </NavLink>
              <NavLink to='/Register' className='nav-link'>
                Register
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
