import React from "react";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import "./projcard.css";

function ProjCard(props) {
  return (
    <React.Fragment>
      <section id="portfolio">
        <div className="container mt-3">
          <div className="card h-100 projcard border-success mb-5 rounded">
            <img src={props.imgsrc} className="card-img-top" alt="Projectpic" />
            <div className="card-body text-center ">
              <h5 className="card-title ">
                <FaCode size={20} style={{ color: "green" }} /> {props.title}
                <FaCode size={20} style={{ color: "green" }} />
              </h5>
              <Link className="proj-link" to={props.url}>
                Link to Code
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default ProjCard;
