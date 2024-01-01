import React from 'react'

const Section = ({children, sectionName, title, subtitle}) => {
  return (
    <section className='section' id={sectionName}>
      
      <h2 className="section-title">{title}</h2>
      <span className="section-subtitle">{subtitle}</span>

      <div className='container'>{children}</div>

    </section>
  )
}

export default Section