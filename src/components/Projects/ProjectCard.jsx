import React from 'react'


const ProjectCard = ({title, description, image, tools, link}) => {
  return (
    <div>
      <img 
      className="portfolio-img"
      src={image} 
      alt="Project preview image" 
      title="Project preview image"/>

      <h3 className='portfolio-title'>{title}</h3>
      <p className='portfolio-description'>{description}</p>
      {tools.map((tool, index)=>
      <p>{tool}</p>)}
      <p>tools</p>
      <a href={link} className="button button-flex button-small portfolio-button">Demo</a>
      <i className='uil uil-arrow-right button-icon'></i>

    </div>
  )
}

export default ProjectCard