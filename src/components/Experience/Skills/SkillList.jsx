import React from 'react';
import Skill from './Skill';
import {skills} from '../ExperienceInfo.jsx';
import {language} from '../ExperienceInfo.jsx';

const SkillList = () => {
  return (
    <div>
      {skills.map((skill)=>
      <Skill
      key={skill.id}
      skill={skill.name}/>)}
      {language.map((language)=>
      <Skill
      key={language.id}
      language={language.language}/>)}
    </div>
  )
}

export default SkillList