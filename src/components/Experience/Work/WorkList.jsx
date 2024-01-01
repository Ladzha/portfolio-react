import React from 'react'
import WorkCard from './WorkCard'
import {works} from '../ExperienceInfo.jsx'

const WorkList = () => {
  return (
    <div>
      <h2>Work experience</h2>
      {works.map((work)=>
      <WorkCard 
        key={work.id} 
        title={work.name}
        subtitle={work.place}
        activities={work.activity}
        year={work.year}/>
      )}  
    </div>
  )
}

export default WorkList