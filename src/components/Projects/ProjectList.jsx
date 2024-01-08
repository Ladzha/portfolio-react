import React from 'react'
import { projects } from './ProjectInfo'
import ProjectCard from './ProjectCard'

const ProjectList = () => {
  return (
    <div className='project-list'>
      {projects.map((project) => 
      <ProjectCard 
      key={project.id}
      title={project.projectName} 
      description={project.description}
      image={project.imageLink}
      tools={project.tools}
      link={project.link}
      />
      )}
    </div>
  )
}

export default ProjectList