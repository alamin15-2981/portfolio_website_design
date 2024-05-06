import React from "react";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const date = new Date()
  return (
    <nav className="navbar navbar-expand-lg shadow py-3">
      <div className="container">
        <a className="navbar-brand" href="#">
        My Portfolio <span className="align-top text-success" style={{fontSize: 12}}>{ date.getFullYear() }</span> 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to={'/'}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/about'}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/education'}>Education</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/skills'}>Skills</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/projects'}>Project</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/contact'}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
