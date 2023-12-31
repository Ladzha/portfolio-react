import React from 'react'
import EducationCard from './EducationCard'
import {education} from '../ExperienceInfo.jsx'

const EducationList = () => {
  return (
    <div>
      {education.map((education, index)=>
      <EducationCard education={education}/>
      )}
    </div>
  )
}

export default EducationList