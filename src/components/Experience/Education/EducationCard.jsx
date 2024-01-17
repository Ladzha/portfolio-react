const EducationCard = ({title, subtitle, year, country}) => {
  return (
    <div>
      <h3 className='qualification-title'>{title}</h3> 
      <p className='qualification-subtitle bold-text'>{subtitle}</p>
      <p className='qualification-detail'>{country}</p>

      <div className="qualification-date">
        <span><i className='uil uil-calendar-alt calendar-icon'></i></span>
        <span className='year'>{year}</span>
      </div>  

    </div>
  )
}

export default EducationCard