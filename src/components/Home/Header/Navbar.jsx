import React from 'react'

const Navbar = ({isActive}) => {
  let linkClass = 'nav-link'

  if(isActive){
    linkClass += 'active-link'
  }
  

  return ( 
    <div className="nav-menu" id="nav-menu">

      <ul className="nav-list grid">
        <li className="nav-item">
          <a href="#" className={linkClass}>
          <i class="uil uil-estate nav-icon"></i>Home</a></li>
        <li className="nav-item" >
          <a href="#qualification" className={linkClass}>
          <i className="uil uil-bag-alt nav-icon"></i>Experience</a></li>
        <li className="nav-item">
          <a href="#skills" className={linkClass}>
            <i className="uil uil-file-alt nav-icon"></i><span>Skills</span></a></li>
        <li className="nav-item">
          <a href="#portfolio" className={linkClass}>
            <i className="uil uil-folder-open nav-icon"></i><p>Portfolio</p></a></li>
        <li className="nav-item">
          <a href="#contact" className={linkClass}>
            <i className="uil uil-envelopes nav-icon"></i>Contact</a></li>         
      </ul>

        <i className="uil uil-times nav-close" id="nav-close"></i>
        
    </div>  
  )
}

export default Navbar