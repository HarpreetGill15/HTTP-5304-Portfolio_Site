import React from 'react';
import './App.css';
import Navbar from './components/Header';
import About from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/ContactMe';
import Social from './components/SocialMedia';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Projects/>
      <Contact/>
      <Social/>
      <Footer/>
      
    </div>
    
  );
}

export default App;
