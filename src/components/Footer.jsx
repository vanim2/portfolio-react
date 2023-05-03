import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaPhoneVolume,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <React.Fragment>
      <div className="container-fluid bg-black text-white">
        <div className="row footer-sec p-5">
          <div className="col-md-6 text-center left">
            <p><FaHome
                size={25}
                style={{ color: "white", marginRight: "1.5rem" }}
              />West Melbourne<br/>,Florida.</p>
              <p className="fw-bold"><FaPhoneVolume
                size={25}
                style={{
                  color: "white",
                  marginRight: "1.5rem",
                  marginBottom: "1rem",
                }}
              />
              321-405-4650,</p>
              <p className="fw-bold"><FaMailBulk
                size={25}
                style={{ color: "white", marginRight: "1.5rem" }}
              />
              vanim2@gmail.com.</p>
          </div>
          <div className="col-md-6 right text-center align-self-center">
            <p className="display3 footer-sec">Feel free to contact me on social media.</p>
            <div className="m-3">
              <Link to='https://www.facebook.com'><FaFacebook
                size={30}
                style={{ color: "white", marginRight: "1.5rem" }}
              /></Link>
              <Link to='https://twitter.com'><FaTwitter
                size={30}
                style={{ color: "white", marginRight: "1.5rem" }}
              /></Link>
              <Link to='https://www.gmail.com'><FaMailBulk
                size={30}
                style={{ color: "white", marginRight: "1.5rem" }}
              /></Link>
             
              <Link to='https://linkedin.com'>
              <FaLinkedin size={30} style={{ color: "white" }} /></Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
