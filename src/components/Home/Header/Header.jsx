import React from 'react';
import Navbar from './Navbar';
import { UilApps, UilTimes } from '@iconscout/react-unicons';
import './Header.css';

const Header = () => {
  return (
    <header className='header' id='header'>

      <nav className='nav container'>

        <a href="#" className="nav-logo"><span>AN.</span></a>
        <Navbar/>  

        <div className="nav-toggle" id="nav-toggle">
          <i class="uil uil-apps"></i>
        </div> 

      </nav>
      
    </header>
  )
}

export default Header