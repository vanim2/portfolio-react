import React from "react";
import Footer from "../components/Footer";
import MainImage from "../components/MainImage";
import Navbar from "../components/Navbar";
import ProjectWork from "../components/ProjectWork";



const Project = () => {
    return (
<React.Fragment>
  <Navbar/>
  <MainImage heading="PROJECTS." text="Some of my most recent works"/>
<ProjectWork />
  
  <Footer/>
</React.Fragment>
    )
};

export default Project;