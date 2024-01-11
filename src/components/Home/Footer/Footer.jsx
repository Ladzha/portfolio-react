import { UilLinkedinAlt, UilGithubAlt, UilEnvelopeUpload } from '@iconscout/react-unicons';
import './Footer.css';
import 'boxicons';
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaSquareGithub } from "react-icons/fa6";

import { MdEmail } from "react-icons/md";
import { FaEnvelopeSquare } from "react-icons/fa";





const Footer = () => {
  return (
    <div className='footer'>

      <div className='footer-nav'>
        <a href="#home" className="footer-link">Home</a>
        <a href="#qualification" className="footer-link">Experience</a>
        <a href="#portfolio" className="footer-link">Portfolio</a>
      </div>

      <div className="footer-social">
        <a href="https://www.linkedin.com/in/alla-nudelman/" target='_blanck' className="footer-icon">
          <FaLinkedin/></a>

        <a href="https://github.com/Ladzha" target='_blanck' className="footer-icon"> 
          <FaSquareGithub/></a>

        <a href="mailto:allanudelman@gmail.com?subject=Your%20Subject&body=Your%20Message" target='_blanck' className="footer-icon">
          <FaEnvelopeSquare/></a>
      </div>

      <div className='footer-copy'>©2024 Privacy policy. All right reserved.</div>

    </div>
  )
}

export default Footer