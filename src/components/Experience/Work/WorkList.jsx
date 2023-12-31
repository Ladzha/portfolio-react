import React from 'react'
import WorkCard from './WorkCard'
import {works} from '../ExperienceInfo.jsx'

const WorkList = () => {
  return (
    <div>
      {works.map((work, index)=>
      <WorkCard work={work}/>
      )}
      
    </div>
  )
}

export default WorkList