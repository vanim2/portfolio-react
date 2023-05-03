import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MainImage from "../components/MainImage";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <MainImage heading="CONTACT." text="Lets have a chat."/>
      <ContactForm/>
      <Footer/>
    </React.Fragment>
        )
};

export default Contact;
