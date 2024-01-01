import React from 'react'

const Skill = ({name, language}) => {

  return (
    <div>
      <div className="skill-list grid">
        <div className="skills-data">
          <div className="skills-list">
            <p className="skill"><span className="bold-text">{name}</span> - {language} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill