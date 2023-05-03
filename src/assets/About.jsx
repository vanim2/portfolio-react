import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MainImage from "../components/MainImage";
import AboutContent from "../components/AboutContent";

const About = () => {
  return(
    <React.Fragment>
      <Navbar/>
      <MainImage heading="ABOUT." text="Iam friendly Front-End Developer."/>
      <AboutContent/>
      <Footer/>
    </React.Fragment>
        )
};

export default About;
