import React from 'react'

const Skill = ({skills}) => {
  console.log(skills);
  return (
    <div>
      {skills.map((skill, index)=>
      <p>{skill.name}</p>)}
      
    </div>
  )
}

export default Skill