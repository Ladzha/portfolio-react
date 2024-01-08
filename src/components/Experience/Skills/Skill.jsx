import React from 'react'

const Skill = ({skill}) => {


  return (
    <div>
      <div className="skills-data">
        <div className="skills-list">
          <p className="skill">{skill}</p>
        </div>
      </div>
    </div>
  )
}

export default Skill