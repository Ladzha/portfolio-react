import React from 'react'
import { UilApps, UilEstate, UilBagAlt, UilFileAlt, UilImage, UilEnvelopeAlt } from '@iconscout/react-unicons';

import './Header.css'
const Navbar = () => {
  return (
    <header className='header' id='header'>
      <nav className='nav container'>
      <a href="#" className="nav-logo">Alla Nudelman</a>  
      <div className="nav-menu" id="nav-menu">
        <ul className="nav-list grid">
          <li className="nav-item">
            <a href="#home" className="nav-link active-link">
              <i className="nav-icon"><UilEstate/></i>Home</a></li>
          <li className="nav-item" >
            <a href="#qualification" className="nav-link">
            <i className="nav-icon"><UilBagAlt/></i>Experience</a></li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">
              <i className="nav-icon"><UilFileAlt/></i>Skills</a></li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link">
              <i className="nav-icon"><UilImage/></i>Portfolio</a></li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              <i className="nav-icon"><UilEnvelopeAlt/></i>Contact</a></li>
        </ul>
        <i className="uil uil-multiply nav-close" id="nav-close"></i>
      </div>
      <div className="nav-toggle" id="nav-toggle">
        <i className=""><UilApps/></i>
      </div>
      </nav>
    </header>
  )
}

export default Navbar