import React from 'react';
import Skill from './Skill';
import { UilArrowDown } from '@iconscout/react-unicons'


const SkillList = ({title, icon, skillsList}) => {


  return (
    <div className='skills-content skills-open'>
      
      <div className="skills-header">
        <div className="skills-icon">{icon}</div>
        <div>
          <h2 className="skills-title">{title}</h2>
        </div>
        <div className="skills-arrow"><UilArrowDown/></div>
      </div>

      <div className='skills-data'>

      <div className='skills-list'>
        {skillsList.map((skill, index)=>
        <Skill
        key={skill.id}
        skill={skill.name}/>)}
      </div>

      </div>

    </div>

  )
}

export default SkillList