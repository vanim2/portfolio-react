import React from "react";
import './MainImage.css';

function MainImage(props) {
  return(
    <React.Fragment>
        <div className="container-fluid bgimage d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col text-white text-center">
                    <h1>{props.heading}</h1>
                    <p className="lead">{props.text}</p>
                </div>
            </div>
        </div>
   </React.Fragment>
  )
}

export default MainImage;
