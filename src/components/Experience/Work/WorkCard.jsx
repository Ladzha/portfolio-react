import React from 'react'

const WorkCard = ({title, subtitle, activities, year}) => {
  return (
    <div>
      <h3 className='qualification-title'>{title}</h3>
      <p className='qualification-subtitle'>{subtitle}</p>
      {activities.map((activity)=>
      <p className='qualification-body'>{activity}</p>)}
      <p className='year'>{year}</p>
    </div>
  )
}

export default WorkCard