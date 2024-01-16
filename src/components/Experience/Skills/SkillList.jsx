import React, { useState } from 'react';
import Skill from './Skill';
import { UilArrowDown } from '@iconscout/react-unicons'


const SkillList = ({title, icon, skillsList}) => {
  const [skillSection, setSkillSection] = useState(false)


  const showSkills=()=>{
    setSkillSection((prev)=>!prev)
    // const classSet = 'skills-open'
  }

  return (
    <div className='skills-content skills-open'>
      
      <div className="skills-header">
        <div className="skills-icon">{icon}</div>
        <div>
          <h3 className="skills-title">{title}</h3>
        </div>
        <button className="skills-arrow"><UilArrowDown onClick={showSkills}/></button>
      </div>

      <div className='skills-data'>
        {
          skillSection?
          <div className='skills-list'>
          {skillsList.map((skill, index)=>
          <Skill
          key={skill.id}
          skill={skill.name}
          icon={skill.icon}/>)}
        </div>
        : <></>
        }



      </div>

    </div>

  )
}

export default SkillList