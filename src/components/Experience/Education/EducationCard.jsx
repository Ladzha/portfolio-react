import { UilCalendarAlt } from '@iconscout/react-unicons';

const EducationCard = ({title, subtitle, year}) => {
  return (
    <div>
      <h3 className='qualification-title'>{title}</h3>
      <span className='qualification-subtitle'>{subtitle}</span>
      
      <div className="qualification-date">
        <span><i className='calendar-icon'><UilCalendarAlt/></i></span>

        <span className='year'>{year}</span>
      </div>  

    </div>
  )
}

export default EducationCard