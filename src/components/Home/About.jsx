import React from 'react'

const About = () => {
  return (
    <div>
      <h1 className="home-title">Hi, I'm Alla</h1>
      <h3 className="home-subtitle">Full Stack Developer</h3>

      <div className="home-img">
          <img src="img/profile-foto.png" alt="profile-foto-png" className="home-photo-img"/>
      </div>

      <p className="home-description">
        With a background in graphic design and strong passion for coding, focused on creating attractive and user-friendly web applications. Skilled in creative problem-solving and meticulous attention to detail, I bring a unique combination of design and coding expertise.
      </p>
      <div className="button-container">
            <a href="#contact" className='button button-flex'>Contact me <i className="uil uil-message button-icon"></i></a>
            <a download="" href="pdf/Alla_Nudelman_CV.pdf" className='button button-flex'>Download CV <i className="uil uil-download-alt button-icon"></i></a> 
          </div> 
    </div>
  )
}

export default About