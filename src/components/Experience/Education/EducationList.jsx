import React from 'react'
import EducationCard from './EducationCard'
import {education} from '../ExperienceInfo.jsx'

const EducationList = () => {
  return (
    <div>
      {education.map((education)=>
      <EducationCard
        key={education.id}
        title={education.name}
        subtitle={education.place}
        year={education.year}/>
      )}
    </div>
  )
}

export default EducationList