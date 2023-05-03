import React from "react";
import './Main.css';
import { Link } from "react-router-dom";
import pic from '../images/pic.jpg';

const Main = () => {
  return (
    <React.Fragment>
    {/* <div className="bg-img"></div> */}
    <div className="container-fluid bg-img d-flex justify-content-center align-items-center">
      <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 main text-white">
                <h3 className="home_title">Hi, I'm <span>Vani Majjari </span>,</h3>
                <p className="home_desc mb-5">Front-End developer.</p>
                <div className="text-center buttons">
                <Link to='/project' className="btn home-button btn-lg btn-success me-5">PROJECTS</Link>
                <Link to='/contact' className="btn home-button btn-lg btn-secondary">CONTACT</Link>
                </div>
            </div>
           
      </div>
    </div>
    </React.Fragment>
  )
  
   
};

export default Main;
