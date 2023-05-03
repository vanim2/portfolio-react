import './NavbarStyles.css'
import React from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {

   
  return (
    
    <React.Fragment> 
           
<nav className="navbar navbar-scroll navbar-dark navbar-expand-lg bg-gray fixed-top">
  <div className="container-fluid">
  <Link to='/' className="navbar-brand fw-bolder text-white">Portfolio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h3 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Portfolio</h3>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body ms-auto">
        <ul className="navbar-nav">
        <Link to='/' className="nav-link" aria-current="page">Home</Link> 
        <Link to='/project' className="nav-link">Project</Link> 
        <Link to='/about' className="nav-link">About</Link> 
        <Link to='/contact' className="nav-link">Contact</Link> 
        </ul>
      </div>
    </div>
  </div>
</nav>

</React.Fragment>

  )
};

export default Navbar;
