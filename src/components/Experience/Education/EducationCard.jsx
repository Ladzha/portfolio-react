import React from 'react'

const EducationCard = ({title, subtitle, year}) => {
  return (
    <div>
      <h3 className='qualification-title'>{title}</h3>
      <p className='qualification-subtitle'>{subtitle}</p>
      <p className='year'>{year}</p>
    </div>
  )
}

export default EducationCard