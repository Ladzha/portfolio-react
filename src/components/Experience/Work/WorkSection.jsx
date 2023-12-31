import React from 'react'
import WorkList from './WorkList'

const WorkSection = () => {
  return (
    <section className='skills section' id="skills">
      <h2 class="section-title">Skills</h2>
       <span class="section-subtitle">Some tools I've been working with recently </span>
      <WorkList/>
    </section>
  )
}

export default WorkSection