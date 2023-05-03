import React from "react";
import "./aboutcontentstyles.css";
import { Link } from "react-router-dom";
import about1 from "../images/about1.png";
import about2 from "../images/about2.jpg";

function AboutContent() {
  return (
    <React.Fragment>
      <div className="container-fluid d-flex align-items-center bg-black about-sec text-white p-5">
        <div className="row  w-100  align-self-center">
          <div className="col-md-6 text-center about-left">
            <h1>Who Am I?</h1>
            <p>
              Im a React Front-end developer.
              <br />I create responsive secure websites for my clients.
            </p>
            <Link to="/contact" className="btn btn-lg btn-warning m-4">
              CONTACT
            </Link>
          </div>
          {/* <div className="col-md-6 position-relative">
            <img src={about1} className="img-fluid w-50" alt="about" />
            <img src={about2} className="img-fluid w-50 position-absolute top-50 start-50 translate-middle-x" alt="about" />

        </div> */}

          <div className="col-md-6 about-right">
            <img src={about1} className="img-fluid w-50" alt="about" />
            <img src={about2} className="img-fluid w-50 img2" alt="about" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AboutContent;
