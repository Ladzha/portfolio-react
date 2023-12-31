import React from 'react'


const ProjectCard = ({title, description, image, tools, link}) => {
  return (
    <div>
      <img src={image} alt="image" title="image"/>
      <h1>{title}</h1>
      <p>{description}</p>
      {tools.map((tool, index)=>
      <p>{tool}</p>)}
      <p>tools</p>
      <a href={link} className="button button-flex button-small portfolio-button">Demo</a>
      <i className='uil uil-arrow-right button-icon'></i>

    </div>
  )
}

export default ProjectCard