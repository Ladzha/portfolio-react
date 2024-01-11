import React from 'react'
import SkillList from './SkillList' 
import {frontendTools, backendTools, designTools, language} from '../ExperienceInfo.js';
import { UilBracketsCurly } from '@iconscout/react-unicons';
import { UilDatabase } from '@iconscout/react-unicons';
import { UilSwatchbook } from '@iconscout/react-unicons';
import { UilGlobe } from '@iconscout/react-unicons';
import './Skills.css'




const SkillsSection = () => {
  
  return (
    <div className='skill-container'>
      <SkillList title={'Frontend Development Tools'} icon={<UilBracketsCurly/>} skillsList={frontendTools}/>
      <SkillList title={'Backend Development Tools'} icon={<UilDatabase/>} skillsList={backendTools}/>
      <SkillList title={'Design & Graphic Tools'} icon={<UilSwatchbook/>} skillsList={designTools}/>
      {/* <SkillList title={'Languages'} icon={<UilGlobe/>} skillsList={language}/> */}
    </div>
    
  )
}

export default SkillsSection