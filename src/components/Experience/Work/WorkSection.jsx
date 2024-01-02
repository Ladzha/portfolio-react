import React from 'react'
import WorkList from './WorkList'

const WorkSection = ({title, icon}) => {
  return (
    <div className='qualification-data' id="work">
      <div className="qualification-button">
      <i className='qualification-icon'>{icon}</i>{title}</div>
      <WorkList/>
    </div>
  )
}

export default WorkSection