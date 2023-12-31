import React from 'react'
import Skill from './Skill'
import {skills} from '../ExperienceInfo.jsx'

const SkillList = () => {
  return (
    <div>
      <Skill skills={skills}/>
    </div>
  )
}

export default SkillList