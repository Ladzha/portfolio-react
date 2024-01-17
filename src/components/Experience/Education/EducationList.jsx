import React from 'react'
import EducationCard from './EducationCard'
import {education} from '../ExperienceInfo.js'

const EducationList = () => {
  return (
    <>
      {education.map((education)=>
      <EducationCard
        key={education.id}
        title={education.name}
        subtitle={education.place}
        country={education.country}
        year={education.year}/>
      )}
    </>
  )
}

export default EducationList