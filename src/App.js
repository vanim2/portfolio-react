import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './assets/Home';
import Contact from './assets/Contact';
import Project from './assets/Project';
import About from './assets/About';

function App() {

    return ( 
      
      <React.Fragment>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/project' element={<Project />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      </React.Fragment>
      
      
     
    )
}

export default App;