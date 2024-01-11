import React from 'react'
import { UilTimes, UilEstate, UilBagAlt, UilFileAlt, UilImage, UilEnvelopeAlt, UilFolderOpen, UilEnvelopes } from '@iconscout/react-unicons';

const Navbar = ({isActive}) => {
  let linkClass = 'nav-link'

  if(isActive){
    linkClass += 'active-link'
  }
  

  return (
    <div className="nav-menu" id="nav-menu">
    <ul className="nav-list grid">
      <li className="nav-item">
        <a href="#home" className={linkClass}>
          <i className="nav-icon"><UilEstate/></i>Home</a></li>
      <li className="nav-item" >
        <a href="#qualification" className={linkClass}>
        <i className="nav-icon"><UilBagAlt/></i>Experience</a></li>
      <li className="nav-item">
        <a href="#skills" className={linkClass}>
          <i className="nav-icon"><UilFileAlt/></i><span>Skills</span></a></li>
      <li className="nav-item">
        <a href="#portfolio" className={linkClass}>
          <i className="nav-icon"><UilFolderOpen/></i><p>Portfolio</p></a></li>
      <li className="nav-item">
        <a href="#contact" className={linkClass}>
          <i className="nav-icon"><UilEnvelopes/></i>Contact</a></li>
    </ul>
    <i className="nav-close" id="nav-close"><UilTimes/></i>
  </div>  
  )
}

export default Navbar