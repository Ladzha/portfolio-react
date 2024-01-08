import React from 'react'
import EducationSection from './Education/EducationSection';
import WorkSection from './Work/WorkSection';
import { UilBookAlt } from '@iconscout/react-unicons';
import { UilBagAlt } from '@iconscout/react-unicons';

const QualificationSection = () => {
  return (
    <div className='qualification-container section' id='qualification'>
      <EducationSection title={'Education'} icon={<UilBookAlt/>}/>
      <WorkSection title={'Work experience'} icon={<UilBagAlt/>}/> 
    </div>
  )
}

export default QualificationSection