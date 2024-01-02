import React from 'react'
import EducationList from './EducationList'

const EducationSection = ({title, icon}) => {
  return (
    <div className='qualification-data' id="education">  
      
      <div className='qualification-button'>
        <span>
        <i className='qualification-icon'>{icon}</i></span>
        <span>{title}</span>
      </div>

      <div>
        <EducationList/>
      </div>


    </div>
  )
}

export default EducationSection