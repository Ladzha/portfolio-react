import React, {useState}from 'react'
import EducationSection from './Education/EducationSection';
import WorkSection from './Work/WorkSection';
import ExperienceButton from './ExperienceButton.jsx'
import { UilBookAlt } from '@iconscout/react-unicons';
import { UilBagAlt } from '@iconscout/react-unicons';
import './Experience.css'

const QualificationSection = () => {

  const [dataSection, setDataSection] = useState(<WorkSection/>)
  const [tab, setTab] = useState('education')

  const handleClick=(type)=>{
    setTab(type)
  }


  return (
    <div className='' id='qualification'>
      
      <div className='qualification-button-container'>
        <ExperienceButton isActive={tab==='education'} title={'Education'} icon={<UilBookAlt/>} onClick={()=>handleClick('education')}/>
        <ExperienceButton  isActive={tab==='work'} title={'Work experience'} icon={<UilBagAlt/>} onClick={()=>handleClick('work')}/>
      </div>

      <div className='qualification-container'>
        {tab==='education' ? <EducationSection/> : <WorkSection/> }
      </div>

    </div>
  )
}

export default QualificationSection