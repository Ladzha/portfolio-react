import React from 'react'

const Navbar = () => {
  return (
    <header className='header' id='header'>
      <nav className='nav container'>
      <a href="#" className="nav-logo">Alla Nudelman</a>  
      <div className="nav-menu" id="nav-menu">
        <ul className="nav-list grid">
          <li className="nav-item">
            <a href="#home" className="nav-link active-link">
              <i className="uil uil-estate nav-icon"></i>Home</a></li>
          <li className="nav-item" >
            <a href="#qualification" className="nav-link">
            <i className="uil uil-bag nav-icon"></i>Experience</a></li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">
              <i className="uil uil-file-alt nav-icon"></i>Skills</a></li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link">
              <i className="uil uil-scenery nav-icon"></i>Portfolio</a></li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              <i className="uil uil-envelope-alt nav-icon"></i>Contact</a></li>
        </ul>
        <i className="uil uil-multiply nav-close" id="nav-close"></i>
      </div>
      <div className="nav-toggle" id="nav-toggle">
        <i className="uil uil-apps"></i>
      </div>
      </nav>
    </header>
  )
}

export default Navbar