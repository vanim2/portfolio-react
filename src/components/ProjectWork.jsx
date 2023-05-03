import React from "react";
import "./projcard.css";
import ProjCardData from "./ProjCardData";
import ProjCard from "./ProjCard";
import "./projectwork.css";

function ProjectWork(props) {
  console.log(props.title);
  return (
    <React.Fragment>
      <div className="container-fluid proj-sec p-5 bg-black">
        <h1 className="text-center text-white p-5 ">PROJECTS</h1>

        <div className="row d-flex flex-wrap">
          {ProjCardData.map((val, ind) => {
            return (
              <div className="col-md-4 d-flex align-items-stretch">
                <ProjCard
                  key={ind}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  url={val.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProjectWork;
