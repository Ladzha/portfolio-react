import { UilLinkedinAlt, UilGithubAlt, UilEnvelope} from '@iconscout/react-unicons';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-social">
        <a href="https://www.linkedin.com/in/alla-nudelman/" target='_blank' className="home-social-icon">
          <i className=""><UilLinkedinAlt/></i>
        </a>

        <a href="https://github.com/Ladzha" target='_blank' className="home-social-icon">
          <i className=""><UilGithubAlt/></i>
        </a>

        <a href="mailto:allanudelman@gmail.com?subject=Your%20Subject&body=Your%20Message" target='_blank' className="home-social-icon">
          <i className=""><UilEnvelope/></i>
        </a>
      </div>
    </div>
  )
}

export default Footer