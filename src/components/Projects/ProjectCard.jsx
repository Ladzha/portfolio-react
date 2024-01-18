import { UilArrowRight } from '@iconscout/react-unicons';
import './Project.css'



const ProjectCard = ({title, description, image, tools, link}) => {
  return (
    <div className='project-card'>
      <img 
      className="portfolio-img"
      src={image} 
      alt="Project preview image" 
      title="Project preview image"/>

      <h3 className='portfolio-title'>{title}</h3>
      <p className='portfolio-description'>{description}</p>

      <div className='toolList'>
      {tools.map((tool, index)=>
      <p key={index} className='tool'>{tool}</p>)}
      </div>

      <a href={link} className="button">Demo <i className='uil uil-arrow-right button-icon'></i></a>

    </div>
  )
}

export default ProjectCard