import React from "react";
import './contactForm.css';
import { useState } from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
    const [formData, setformData] = useState({
        name: '',
        email: '',
        message: '' 
    });
    const submitForm =(e)=>{
        e.preventDefault();
        console.log(formData);
        
        }
      return (
    <React.Fragment>
<div className="container-fluid bg-black text-white">
    <div className="row d-flex justify-content-center">
        <div className="col-md-5 p-4">

        
<form onSubmit={submitForm} className="contact-form">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" className="form-control form-feild text-white mb-3" placeholder="Enter your name" name="name"
         onChange={e=>setformData({...formData, name:e.target.value})}required />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" className="form-control form-feild text-white mb-3" placeholder="Enter your email" name="email" 
        onChange={e=>setformData({...formData, email:e.target.value})}required />
      </div>
      <div className="form-group">
        <label>Message:</label>
        <textarea className="form-control form-feild text-white mb-3" rows="5" placeholder="Enter your message" name="message" 
        onChange={e=>setformData({...formData,message:e.target.value})}
        required></textarea>
      </div>
      <div className="d-grid">
      <Link to='/' type="submit" className="btn btn-warning">Submit</Link>
      </div>
    </form>
</div>
</div>
</div>
    </React.Fragment>
  )
}

export default ContactForm;
