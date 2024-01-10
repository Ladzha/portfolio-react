import React, {useState}from 'react'
import EducationSection from './Education/EducationSection';
import WorkSection from './Work/WorkSection';
import ExperienceButton from './ExperienceButton.jsx'
import { UilBookAlt } from '@iconscout/react-unicons';
import { UilBagAlt } from '@iconscout/react-unicons';
import './Experience.css'

const QualificationSection = () => {

  const [dataSection, setDataSection] = useState(<WorkSection/>)

  const handleClick=(type)=>{
    setDataSection(type)
  }


  return (
    <div className='' id='qualification'>
      
      <div className='qualification-button-container'>
        <ExperienceButton title={'Education'} icon={<UilBookAlt/>} onClick={()=>handleClick(<EducationSection/>)}/>
        <ExperienceButton title={'Work experience'} icon={<UilBagAlt/>} onClick={()=>handleClick(<WorkSection/>)}/>
      </div>

      <div className='qualification-container'>
        {dataSection}
      </div>

    </div>
  )
}

export default QualificationSection