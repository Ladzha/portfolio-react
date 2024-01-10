import React from 'react'
import { UilCheckCircle } from '@iconscout/react-unicons'

const Skill = ({skill, icon}) => {


  return (
    <div>
      <div className="skills-data">
        {/* <div className="skills-list">    */}
          <p className="skill">{icon? <img src={icon} className='skill-icon'/>: <UilCheckCircle/>} {skill}</p>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Skill