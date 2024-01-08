import React from 'react'
import WorkCard from './WorkCard'
import {works} from '../ExperienceInfo.js'

const WorkList = () => {
  return (
    <>
      {works.map((work)=>
      <WorkCard 
        key={work.id} 
        title={work.name}
        subtitle={work.place}
        activities={work.activity}
        year={work.year}/>
      )}  
    </>
  )
}

export default WorkList