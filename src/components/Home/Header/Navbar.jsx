import React, {useState} from 'react'

const Navbar = () => {
  const [isActive, setIsActive] = useState('Home')

  const handleClick=(type)=>{
    setIsActive(type)
  }
  
  return ( 
    <div className="nav-menu" id="nav-menu">

      <ul className="nav-list">
        <li className="nav-item" onClick={()=>handleClick('home')}>
          <a href="#" className={isActive=== 'home' ? 'active-link nav-link' : 'nav-link'}>
          <i class="uil uil-estate nav-icon"></i>Home</a></li>
        <li className="nav-item" onClick={()=>handleClick('qualification')}>
          <a href="#qualification" className={isActive === 'qualification' ? 'active-link nav-link' : 'nav-link'}>
          <i className="uil uil-bag-alt nav-icon"></i>Experience</a></li>
        <li className="nav-item" onClick={()=>handleClick('skills')}>
          <a href="#skills" className={isActive === 'skills'? 'active-link nav-link' : 'nav-link'}>
            <i className="uil uil-file-alt nav-icon"></i><span>Skills</span></a></li>
        <li className="nav-item" onClick={()=>handleClick('portfolio')}>
          <a href="#portfolio" className={isActive === 'portfolio' ? 'active-link nav-link' : 'nav-link'}>
            <i className="uil uil-folder-open nav-icon"></i><p>Portfolio</p></a></li>
        <li className="nav-item" onClick={()=>handleClick('contact')}>
          <a href="#contact" className={isActive === 'contact'? 'active-link nav-link' : 'nav-link'}>
            <i className="uil uil-envelopes nav-icon"></i>Contact</a></li>         
      </ul>

        <i className="uil uil-times nav-close" id="nav-close"></i>
        
    </div>  
  )
}

export default Navbar