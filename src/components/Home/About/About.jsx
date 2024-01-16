import React from 'react'
import './About.css'
import { UilLinkedinAlt, UilGithubAlt, UilEnvelope, UilImport, UilMessage, UilAt } from '@iconscout/react-unicons';

const About = () => {
  return (

    <div className='home-container' id='home'>

      <div className="home-img">
        <img src="img/profile-foto-bw.png" alt="profile-foto-png" className="home-photo-img"/>
      </div>

      <div className='home-data'>
        <h1 className="home-title">Hi, I'm Alla</h1>
        <h3 className="home-subtitle">Full Stack Developer</h3>
        <p className="home-description">
          With a background in graphic design and strong passion for coding, focused on creating attractive and user-friendly web applications. Skilled in creative problem-solving and meticulous attention to detail, I bring a unique combination of design and coding expertise.
        </p>


        <div className="button-container">
          <a href="#contact" className='button'>Contact me
          <i className="uil uil-message button-icon"></i></a>
          <a download="" href="pdf/Alla_Nudelman_CV.pdf" className='button'>Download CV
          <i className="uil uil-file-download button-icon"></i></a> 
        </div> 


        {/* <div className="home-social">
          <a href="https://www.linkedin.com/in/alla-nudelman/" target='_blank' className="home-social-icon">
            <i className=""><UilLinkedinAlt/></i>
          </a>

          <a href="https://github.com/Ladzha" target='_blank' className="home-social-icon">
            <i className=""><UilGithubAlt/></i>
          </a>

          <a href="mailto:allanudelman@gmail.com?subject=Your%20Subject&body=Your%20Message" target='_blank' className="home-social-icon">
            <i className=""><UilAt/></i>
          </a>
        </div> */}

      </div>

    </div>
  )
}

export default About